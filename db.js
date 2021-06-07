const Pool = require("pg").Pool;

const pool = new Pool({
    user : "paarthagrawal",
    password : "0141",
    database : "paldata",
    host : "localhost",
    port : 5000
});

module.exports = pool;