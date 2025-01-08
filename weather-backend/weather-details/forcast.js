const app=require("express")
const Router=app.Router()

Router.post('/',async(req,res)=>{
    const place=req.body?.place
    if(place){
        try{
    const response=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=d2055f75d646463fbc8194146241712&q=${place}&days=7&aqi=yes&alerts=no`)
    const data=await response.json()
    data.forecast.forecastday.forEach(val=>{
    })
    
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