const express=require("express")
const Route=express.Router()

Route.post("/",async(req,res)=>{
    console.log(req.body)
})

module.exports=Route