const Pool = require("pg").Pool;

const pool = new Pool({
    user : "postgres",
    password : "",
    listen_addresses='127.0.0.1 3.143.209.89',
    database : "paldata",
    host : "3.143.209.89",
    port : 5432
});

module.exports = pool;