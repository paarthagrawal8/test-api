const Pool = require("pg").Pool;

const pool = new Pool({
    user : "postgres",
    password : "",
    
    database : "paldata",
    host : "localhost",
    port : 5432
});

module.exports = pool;