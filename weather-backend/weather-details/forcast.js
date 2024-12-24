const app=require("express")
const Router=app.Router()

Router.post('/',async(req,res)=>{
    const place=req.body?.place
    console.log(place);
    if(place){
    const response=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=d2055f75d646463fbc8194146241712&q=${place}&days=7&aqi=no&alerts=no`)
    const data=await response.json()
    console.log(data.forecast.forecastday[0])
    }
    
})

module.exports=Router