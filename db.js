const Pool = require("pg").Pool;

const pool = new Pool({
    user : "postgres",
    password : "",
    database : "paldata",
    host : "3.143.209.89",
    port : 5432
});

module.exports = pool;