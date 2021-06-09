const Pool = require("pg").Pool;

const pool = new Pool({
    user : "postgres",
    password : "",
    database : "paldata",
    host : "3.17.190.2",
    port : 5432
});

module.exports = pool;