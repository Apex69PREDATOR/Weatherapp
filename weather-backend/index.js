const express=require("express")
const port=5000
const app=express()
const cors=require("cors")

app.use(cors()) 
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hiii")
})

app.use('/signup',require("./authorization/signup"))

app.listen(port,()=>{
    console.log(`app running on http://localhost:${port}`)
})