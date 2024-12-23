const mysql=require("mysql2")

const connection =mysql.createPool({
    host:"localhost",
    user:"root",
    password:"siuuuuuuu",
    port:"3307",
    database:"weatherapp"
}).promise()

module.exports=connection