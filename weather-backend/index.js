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
app.use('/checklogin',require("./authentication/check_login"))
app.use('/login',require("./authentication/login"))
app.use('/get-weather',require("./weather-details/get_weather"))
app.use('/forecast',require("./weather-details/forcast"))



app.listen(port,()=>{
    console.log(`app running on http://localhost:${port}`)
})