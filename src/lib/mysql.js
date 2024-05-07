import * as mysql from 'mysql';
import { BLIKK_ESCAPE_DBHOST,BLIKK_ESCAPE_DBNAME,BLIKK_ESCAPE_DBUSER,BLIKK_ESCAPE_DBPASS, } from '$env/static/private';


export const db = {
    connect,
    close,
    getPlayer,
    getClues,
    openClue,
    getCluesStates,
    getCluesWithStates,
    getClueSubtractions,
    writeScore,
    getRiddlesWithStates,
    getHouseByHash,
    getPlayerKeysByHouse,
    setRank,
    runQuery
};

// persist clue state
async function openClue(player_id,clue_id,cost) {
    // is there a state entry
    const state = await getCluesStates(player_id,clue_id);
    return new Promise((resolve, reject) => {
        const connection = connect();
        if (state.length === 0) {
            connection.query("INSERT `clue_states` SET `player_id` = ?, `clue_id` = ?, `cost` = ?, `state` = 1",[player_id, clue_id, cost],(error, results, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(clue_id);
                }
            });
        } else {
            connection.query("UPDATE `clue_states` SET `state` = 1, `cost` = ? WHERE `player_id` LIKE ? AND `clue_id` = ?",[cost, player_id, clue_id],(error, results, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(clue_id);
                }
            });
        }
        close(connection);
    });
}


async function getCluesWithStates(player_id,riddle_id) {
    const clues = await getClues(riddle_id);
    const clue_ids = clues.map((cl) => cl.id);
    let states = [];
    if (clue_ids.length > 0) {
        states = await getCluesStates(player_id,clue_ids.join());
    }
    const filtered_clues = [];
    let first = true;
    for (let i = 0; i < clues.length; i++) {
        const state = states.filter((st) => st.clue_id === clues[i].id);
        if (state.length === 0 || state[0].state === 0) {
            let active = 0;
            if (first) {
                active = 1;
                first = 0;
            }
            filtered_clues[i] = { id : clues[i].id, cost : clues[i].cost, open : false,  active };
        } else {
            filtered_clues[i] = { open : true, ...clues[i] };
        }
    }
    return filtered_clues;
}

// get the clues of a riddle
async function getClues(riddle_id) {
    return new Promise((resolve, reject) => {
        const connection = connect();
        connection.query("SELECT * FROM `clues` WHERE `riddle_id` = ? ORDER BY `id`",[riddle_id],(error, results, fields) => {
            if (error) reject(null);
            const clues = [];
            for (let i = 0; i < results.length; i++) {
                clues.push(Object.assign({},results[i]));
            }
            resolve(clues);
        });
        close(connection);
    });
}


// get the clues_states for player and clue_ids (csv)
async function getCluesStates(player_id,clue_ids) {
    if ( ! clue_ids ) return [];
    return new Promise((resolve, reject) => {
        const connection = connect();
        connection.query("SELECT * FROM `clue_states` WHERE `player_id` = ? AND `clue_id` IN ("+clue_ids+")",[player_id],(error, results, fields) => {
            if (error) reject(null);
            const states = [];
            for (let i = 0; i < results.length; i++) {
                states.push(Object.assign({},results[i]));
            }
            resolve(states);
        });
        close(connection);
    });
}

// evaluate the clues
async function getClueSubtractions(player_id,riddle_id) {
    const clues = await getClues(riddle_id);
    const clue_ids = clues.map((clue) => clue.id);
    const clue_states = await getCluesStates(player_id,clue_ids.join());
    let count = 0;
    for (let i = 0; i < clue_states.length; i++) {
        count += clue_states[i].cost;
    }
    return count;
}

// persist score
async function writeScore(score,player_id,riddle_id) {
    // is there a state entry
    const state = await getState(player_id,riddle_id);
    return new Promise((resolve, reject) => {
        const connection = connect();
        let query = '';
        if (state.length === 0) {
            query = "INSERT `riddle_states` SET `gain` = ?, `player_id` = ?, `riddle_id` = ?, `state` = 1";
        } else {
            query = "UPDATE `riddle_states` SET `gain` = ?, `state` = 1 WHERE `player_id` = ? AND `riddle_id` = ?";
        }
        connection.query(query,[score, player_id, riddle_id],(error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(score);
            }
        });
        close(connection);
    });
}

// return json with riddle and state for player and  house
async function getRiddlesWithStates(player_id,house_id,withchiffre = false) {
    const riddles = await getRiddles(house_id);
    let riddle_ids = '';
    for (let i = 0; i < riddles.length; i++) {
        riddle_ids += riddles[i].id;
        riddle_ids += ',';
    }
    const riddle_states = await getRiddleStates(player_id,riddle_ids.replace(/,$/,''));
    const riddles_with_states = Object.assign({}, riddles);
    for (const riddle in riddles_with_states) {
        // inject state
        for (let i = 0; i < riddle_states.length;i++) {
            // default if empty
            var state = {};
            if (riddle_states[i].riddle_id === riddles_with_states[riddle].id) {
                state = Object.assign({},riddle_states[i]);
                break;
            }
        }
        riddles_with_states[riddle].state = state;
        // parse JSON-Fields
        for (const field in riddles_with_states[riddle]) {
            if (['styles','input','chiffre'].indexOf(field) != -1) {
                riddles_with_states[riddle][field] = riddles_with_states[riddle][field] ? JSON.parse(riddles_with_states[riddle][field]) : {};
            }
        }
        if ( ! withchiffre) {
            riddles_with_states[riddle].chiffre = null;
        }
    }
    return riddles;
}


function getPlayer(access_key) {
    return new Promise((resolve, reject) => {
        const connection = connect();
        const houses = { houses : [], player : {}};
        connection.query("SELECT * FROM `houses`, `players` WHERE `key` LIKE ? AND `house_id` = `houses`.`id`",[access_key],(error, results, fields) => {
            if (error) {
                console.log(error)
                reject(null);
            }
            if (results && results.length > 0) {
                houses.player.id = results[0].id;
                houses.player.key = access_key;
                houses.player.is_root = false;
                houses.player.rank = results[0] ? results[0].rank : 0;
                for (let i = 0; i < results.length; i++) {
                    houses.houses[i] = {
                        role : results[i].role,
                        house_id : results[i].house_id,
                        house_name : results[i].name,
                        hash : results[i].hash,
                        key : results[i].key
                    };
                    if (results[i].role === 'root') {
                        houses.player.is_root = true;
                    }
                }
            } 
            resolve(houses);
        });
        close(connection);
    });
}


function getState(player_id,riddle_id) {
    return new Promise((resolve, reject) => {
        const connection = connect();
        connection.query("SELECT * FROM `riddle_states` WHERE `player_id` = ? AND `riddle_id` = ?",[player_id,riddle_id],(error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
        close(connection);
    });
}


function getHouseByHash(hash) {
    return new Promise((resolve, reject) => {
        const connection = connect();
        connection.query("SELECT * FROM `houses` WHERE `hash` LIKE ?",[hash],(error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
        close(connection);
    });
}


function getRiddles(house_id, riddle_id = null) {
    return new Promise((resolve, reject) => {
        const connection = connect();
        let query_string;
        if ( ! riddle_id) {
            query_string = "SELECT * FROM `riddles` WHERE `house_id` = ?";
        } else {
            query_string = "SELECT * FROM `riddles` WHERE `house_id` = ? AND `id` = ?";
        }
        connection.query(query_string,[house_id,riddle_id],(error, results, fields) => {
            if (error) reject(error);
            const riddles = [];
            for (let i = 0; i < results.length; i++) {
                riddles.push(Object.assign({}, results[i]));
            }
            resolve(riddles);
        });
        close(connection);
    });
}


function getRiddleStates(player_id, riddle_ids) {
    if ( ! riddle_ids) return [];
    return new Promise((resolve, reject) => {
        const connection = connect();
        connection.query("SELECT * FROM `riddle_states` WHERE `player_id` = ? AND `riddle_id` IN ("+riddle_ids+")",[player_id],(error, results, fields) => {
            if (error) reject(error);
            const states = [];
            for (let i = 0; i < results.length; i++) {
                states.push(Object.assign({}, results[i]));
            }
            resolve(states);
        });
        close(connection);
    });
}


function getPlayerKeysByHouse(house_id) {
    return new Promise((resolve, reject) => {
        const connection = connect();
        let keys = [];
        connection.query("SELECT * FROM `players` WHERE `house_id` LIKE ?",[house_id],(error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                for (let i=0; i < results.length; i++) {
                    keys.push(results[i].key);
                }
                resolve(keys);
            }
        });
        close(connection);
    });
}


function setRank(house_id, player_key, new_rank) {
    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    return new Promise((resolve, reject) => {
        const connection = connect();
        connection.query("UPDATE `players` SET `rank` = ?, `updated_at` = ? WHERE `house_id` LIKE ? AND `key` LIKE ?",[new_rank, date, house_id, player_key],(error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(new_rank);
            }
        });
        close(connection);
    });
}


function runQuery(query, values) {
    return new Promise((resolve, reject) => {
        const connection = connect();
        connection.query(query,values,(err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
        close(connection);
    });
}


function connect() {
    const connpars = {
        host     : BLIKK_ESCAPE_DBHOST,
        user     : BLIKK_ESCAPE_DBUSER,
        password : BLIKK_ESCAPE_DBPASS,
        database : BLIKK_ESCAPE_DBNAME
    };
    //console.log(connpars);
    return mysql.createConnection(connpars);
}


function close(connection) {
    connection.end();
}



