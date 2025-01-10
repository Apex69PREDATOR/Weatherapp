import {React,useState,useEffect,lazy,Suspense} from 'react'
import "./layout.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass,faDropletSlash,faDroplet } from '@fortawesome/free-solid-svg-icons';
import Additional from './Additional';
const Sunny = lazy(() => import("../weather-image/Sunny"));
const Moon = lazy(()=>import("../weather-image/Moon"))
const Suncloud = lazy(()=>import("../weather-image/Suncloud"))
const Mooncloud = lazy(()=>import("../weather-image/Mooncloud"))
const Sunrain = lazy(()=>import("../weather-image/Sunrain"))
const Moonrain = lazy(()=>import("../weather-image/Moonrain"))
const Moonsnow = lazy(()=>import("../weather-image/Moonsnow"))
const Sunsnow = lazy(()=>import("../weather-image/Sunsnow"))
const Moonthunder = lazy(()=>import("../weather-image/Moonthunder"))

const weather_layout = () => {
   const [place,setPlace]=useState(null)
   const [magnify,setMagnify]=useState(true)
   const [temp,setTemp]=useState(undefined)
   const [tempf,setTempf]=useState(undefined)
   const [weatherimg,setWeatherimg]=useState("")
   const [Weathercomp,setWeathercomp]=useState(null)
   const [day,setDay]=useState(undefined)
   const [time,setTime]=useState(undefined)
   const [precipitaion,setPrecipitation]=useState(0)
   const [skycondition,setSkycondition]=useState("")
   const [address,setAddress]=useState(undefined)
   const [rain,isRain]=useState(false)
   const [uv,setUv]=useState(null)
   const [unit,currentUnit]=useState('cel')
   const [windspeed,setwindSpeed]=useState({})
   const [winddir,setWinddir]=useState("")
   const [humidity,setHumidity]=useState("")
   const [visibility,setVisibility]=useState({})

   const snow_codes=[1066, 1069, 1072, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1237]
   const thunderstormCodes = [1087, 1273, 1276, 1279, 1282];
   const days=['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday']
   const modify_maginfy=(e)=>{
     e.target.value.length>0?setMagnify(false):setMagnify(true)
   }
   const set_image=(isday,iscloud,israin,code)=>{
    if(isday){
      setWeathercomp(Sunny)
      if(iscloud>5){
        setWeathercomp(Suncloud)
      }
      if(israin){
        setWeathercomp(Sunrain)
      }
      if(snow_codes.includes(code)){
        setWeathercomp(Sunsnow)
      }
  
    }
    else{
      setWeathercomp(Moon)
      if(iscloud>5){
        setWeathercomp(Mooncloud)
      }
      if(israin){
        setWeathercomp(Moonrain)
      }
      if(snow_codes.includes(code)){
        setWeathercomp(Moonsnow)
      }
      if(thunderstormCodes.includes(code)){
        setWeathercomp(Moonthunder)
      }
    }
   }
   const get_weather_details=async()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async(position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setPlace(latitude.toString()+','+longitude.toString())
          const res=await fetch("http://localhost:5000/get-weather",{method:"POST",headers:{
            "Content-type":"application/json"
          },body:JSON.stringify({latitude:latitude,longitude:longitude})})
          const weather_conditions=await res.json() 
          if(weather_conditions.current){
            setTemp(weather_conditions.current.temp_c)
          setTempf(weather_conditions.current.temp_f)
              set_image(weather_conditions.current.is_day,weather_conditions.current.cloud,weather_conditions.current.precip_mm,weather_conditions.current.condition.code)
              isRain('Rain - ' + weather_conditions.current.precip_mm.toString() + 'mm')
              setPrecipitation(weather_conditions.current.precip_mm)
              setUv(weather_conditions.current.uv)
              setwindSpeed({kph:weather_conditions.current.wind_kph,mph:weather_conditions.current.wind_mph})
              setWinddir(weather_conditions.current.wind_dir)
              setHumidity(weather_conditions.current.humidity)
              setVisibility({km:weather_conditions.current.vis_km,mile:weather_conditions.current.vis_miles})
      
          }
          if(weather_conditions.current.condition){
            setWeatherimg(weather_conditions.current.condition.icon)
            setSkycondition(weather_conditions.current.condition.text)
          }
          if(weather_conditions.location){
              const [date,time]=weather_conditions.location.localtime.split(' ')
              const date_obj=new Date(date)
              console.log(days[date_obj.getDay()])
              setDay(days[date_obj.getDay()])
              setTime(time)
              setAddress(weather_conditions.location.name+ ',' + weather_conditions.location.region + ',' + weather_conditions.location.country)
          }
        },
        (error) => {
          console.error("Error obtaining location:", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
    
   }
   const search_by_place=async(e)=>{
    if(e.key==='Enter'){
      if(e.target.value){
        setTemp(null)
        setPlace(e.target.value)
        const res=await fetch("http://localhost:5000/get-weather/byplace",{method:"POST",headers:{
          "Content-type":'application/json'
        },body:JSON.stringify({place:e.target.value})})
        const weather_conditions=await res.json()
        if(weather_conditions.current){
          set_image(weather_conditions.current.is_day,weather_conditions.current.cloud,weather_conditions.current.precip_mm,weather_conditions.current.condition.code)
          setTemp(weather_conditions.current.temp_c)
          setTempf(weather_conditions.current.temp_f)
              isRain('Rain - ' + weather_conditions.current.precip_mm.toString() + 'mm')
              setPrecipitation(weather_conditions.current.precip_mm)
              setUv(weather_conditions.current.uv)
              setwindSpeed({kph:weather_conditions.current.wind_kph,mph:weather_conditions.current.wind_mph})
              setWinddir(weather_conditions.current.wind_dir)
              setHumidity(weather_conditions.current.humidity)
              setVisibility({km:weather_conditions.current.vis_km,mile:weather_conditions.current.vis_miles})
        }
        if(weather_conditions.current.condition){
          setWeatherimg(weather_conditions.current.condition.icon)
          setSkycondition(weather_conditions.current.condition.text)
        }
        if(weather_conditions.location){
          const [date,time]=weather_conditions.location.localtime.split(' ')
          const date_obj=new Date(date)
          console.log(days[date_obj.getDay()])
          setDay(days[date_obj.getDay()])
          setTime(time)
          setAddress(weather_conditions.location.name+ ',' + weather_conditions.location.region + ',' + weather_conditions.location.country)
      }
      }
    }
   }
  useEffect(()=>{
    get_weather_details()
  },[])
  return (
    < >
      <div className="container">
        <div className="required-weather">
          <div className="search" style={{height:"10%"}}>
          <input type="text" placeholder='Search for places...' id='search' onChangeCapture={modify_maginfy} onKeyDown={search_by_place}   />
         {magnify? <FontAwesomeIcon icon={faMagnifyingGlass} style={{position:"absolute",left:"3%"}}/>:null}
          </div>
          <div className="img-weather" style={{height:"30%",width:"65%",display:"flex",alignItems:"center"}}>
          <Suspense fallback={<div>Loading Weather Image...</div>}>
              {Weathercomp ? <Weathercomp /> : null}
            </Suspense>
          </div>
          <div className="temperature" style={{height:"12%"}}>
            {temp?<span style={{fontSize:"4em",alignContent:"start",padding:"0",fontFamily:"sans-serif"}}>{unit==='cel'?temp:tempf}<sup style={{fontSize:"0.6em"}}>°</sup> <span style={{position:"absolute",top:"5%",fontSize:"0.7em"}}>{unit==='cel'?"C":"F"}</span> </span>:"cant get temperature"}
          </div>
          <div className="time" style={{height:"10%",alignItems:"center",borderBottom:"1px solid rgb(0,0,0,0.2)"}}>
           {day?<span style={{fontSize:"1.3em",fontFamily:"sans-serif"}}>{day}, <span style={{opacity:"0.5"}}>{time}</span></span>:null}
          </div>
          <div className="weather">
            <span className='sky'>
              <img src={weatherimg} alt="" style={{height:"100%"}} />
              <pre style={{marginLeft:"1.5%"}}>{skycondition}</pre>
            </span>
            <span className='rain-snow' >
              {precipitaion?<FontAwesomeIcon icon={faDroplet} color='#5f81e8' />:<FontAwesomeIcon icon={faDropletSlash}  color='#5f81e8'/>}
              <span style={{marginLeft:precipitaion?"5%":"7%"}}>{rain}</span>
            </span>
          </div>
          <div className="address" style={{height:"12%"}}>
            {address?address:"not found"}
          </div>
        </div>
        <Additional unit={unit} place={place} changeUnit={currentUnit} uv={uv} windspeed={windspeed} winddirection={winddir} humidity={humidity} visible={visibility}/>
      </div>
    </>
  )
}

export default weather_layout
