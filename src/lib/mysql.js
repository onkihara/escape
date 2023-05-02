import * as mysql from 'mysql';
import { BLIKK_ESCAPE_DBHOST,BLIKK_ESCAPE_DBNAME,BLIKK_ESCAPE_DBUSER,BLIKK_ESCAPE_DBPASS, } from '$env/static/private';

export const db = {
    connect : () => connect(),
    close : (connection) => close(connection)
};


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


