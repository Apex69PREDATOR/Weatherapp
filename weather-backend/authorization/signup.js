const express=require("express")
const Route=express.Router()
const mysql=require("mysql2")
const bcrypt=require("bcrypt")
 
const connection=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"siuuuuuuu",
    database:"weatherapp",
    port:"3307"
}).promise()

Route.post("/",async(req,res)=>{
    try{
        delete req.body.confirm_password
        const hashed_password=await bcrypt.hash(req.body.password,10)  //make sure saltrounds from .env file
        req.body.password=hashed_password
        const values=Object.values(req.body)
        console.log(req.body)
        const result=await connection.query("INSERT INTO users VALUES(?,?,?,?,?)",values)
        console.log(result)
        res.status(201).json({created:true,messege:"account created successfully"})
    }
    catch(err){
        console.log(err)
        res.status(403).json({messege:"email or phone number is already registered"})
    }
})

module.exports=Route