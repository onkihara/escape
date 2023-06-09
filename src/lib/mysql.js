import * as mysql from 'mysql';
import { BLIKK_ESCAPE_DBHOST,BLIKK_ESCAPE_DBNAME,BLIKK_ESCAPE_DBUSER,BLIKK_ESCAPE_DBPASS, } from '$env/static/private';


export const db = {
    connect,
    close,
    getPlayer,
    getHouseByHash,
    getPlayerKeysByHouse,
    setRank,
    runQuery
};


function getPlayer(access_key) {
    return new Promise((resolve, reject) => {
        const connection = connect();
        const houses = { houses : [], player : {}};
        connection.query("SELECT * FROM `players`, `houses` WHERE `key` LIKE ? AND `house_id` = `houses`.`id`",[access_key],(error, results, fields) => {
            if (error) reject(null);
            houses.player.key = access_key;
            houses.player.is_root = false;
            houses.player.rank = results[0].rank;
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


async function getHouseByHash(hash) {
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
    return mysql.createConnection({
        host     : BLIKK_ESCAPE_DBHOST,
        user     : BLIKK_ESCAPE_DBUSER,
        password : BLIKK_ESCAPE_DBPASS,
        database : BLIKK_ESCAPE_DBNAME
    });
}


function close(connection) {
    connection.end();
}



