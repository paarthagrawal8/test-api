const { json } = require('body-parser')
const express = require('express')
const app = express()
const pool = require("./db")
const port = process.env.PORT || 5001;

app.use(express.json())
//recieve
app.get("/showdata" , async(req , res)=> {
    try {
        const showdata = await pool.query("SELECT * FROM users");
        res.json(showdata.rows)
    } catch (err) {
        console.error(err.message)
    }
})
app.get("/showdata/:id" , async (req , res) =>{
    const {id} = req.params;

    try {
        const nameSearch = await pool.query("SELECT * FROM users WHERE user_id = $1" , [id])
        res.json(nameSearch.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
})
//update
app.put("/showdata/:id" , async (req ,res) => {
    try {
        const {id} = req.params;
        const {name} = req.body;
        // console.log(fame)
        const updateName = await pool.query("UPDATE users SET name = $1 WHERE user_id = $2",
        [name , id]);
    } catch (err) {
    console.error(err.message)
    }
    res.json("Name was updated")
    // console.log(updateName)
})



//update
app.post("/showdata" , async (req , res ) => {
    try {
        const { name } =req.body;
        const newname = await pool.query(
            "INSERT INTO users (name) VALUES ($1) RETURNING *",
            [name]
        );
        res.json(newname.rows[0])
    } catch (err) {
        console.error(err.message)
        
    }
})
//delete 
app.delete("/showdata/:id" , async (req , res) =>{
    try {
        const {id} = req.params;
        const deletename = await pool.query("DELETE from users WHERE user_id = $1" , [id])
        res.json("name was deleted")
    } catch (err) {
    console.error(err.message)   
    }
})



app.listen(port , () =>{
    console.log(`http://localhost:${port}`)
})