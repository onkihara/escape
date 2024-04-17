import * as mysql from 'mysql';
import { BLIKK_ESCAPE_DBHOST,BLIKK_ESCAPE_DBNAME,BLIKK_ESCAPE_DBUSER,BLIKK_ESCAPE_DBPASS, } from '$env/static/private';


export const db = {
    connect,
    close,
    getPlayer,
    getClueSubtractions,
    writeScore,
    getRiddlesWithStates,
    getHouseByHash,
    getPlayerKeysByHouse,
    setRank,
    runQuery
};

// evaluate the clues
async function getClueSubtractions(player_id,riddle_id) {
    return 0;
}

// persist score
async function writeScore(score,player_id,riddle_id) {
    // is there a state entry
    const state = await getState(player_id,riddle_id);
    return new Promise((resolve, reject) => {
        const connection = connect();
        if (state.length === 0) {
            connection.query("INSERT `riddle_states` SET `gain` = ?, `player_id` = ?, `riddle_id` = ?, `state` = 1",[score, player_id, riddle_id],(error, results, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(score);
                }
            });
        } else {
            connection.query("UPDATE `riddle_states` SET `gain` = ?, `state` = 1 WHERE `player_id` LIKE ? AND `riddle_id` LIKE ?",[score, player_id, riddle_id],(error, results, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(score);
                }
            });
        }
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
                state = Object.assign({},riddle_states[riddle]);
                break;
            }
        }
        riddles_with_states[riddle].state = state;
        // parse JSON-Fields
        for (const field in riddles_with_states[riddle]) {
            if (['styles','input','chiffre'].indexOf(field) != -1) {
                riddles_with_states[riddle][field] = JSON.parse(riddles_with_states[riddle][field]);
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
            if (error) reject(null);
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



