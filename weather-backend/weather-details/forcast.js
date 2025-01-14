const app=require("express")
const Router=app.Router()
require('dotenv').config()
Router.post('/',async(req,res)=>{
    const place=req.body?.place
    if(place){
        try{
    const response=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${place}&days=7&aqi=yes&alerts=no`)
    const data=await response.json()
    
    const forecast_obj=data.forecast.forecastday
    if(forecast_obj)
    res.status(200).json({found:true,forecastresults:forecast_obj})
    else
    res.status(404).json({messege:`cant find weather information of ${place}`})
  
        }
        catch(err){
res.status(404).json({messege:`cant find weather information of ${place}`})
        }
    }
    
})

module.exports=Router