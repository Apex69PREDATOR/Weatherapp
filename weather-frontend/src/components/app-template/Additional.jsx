import {React,useState,useEffect,useRef} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSun,faMoon } from '@fortawesome/free-solid-svg-icons'
import Week from './Week'
import "./additional.css"
const Additional = (props) => {
  const [them,Setthem]=useState('s-day')
  const [weatherforecast,setWeatherforecast]=useState(null)
  const [showsun,setShowsun]=useState(true)

  
    const change_unit=(e)=>{
       let btn=document.getElementById(props.unit) 
        btn.style.backgroundColor="white"
        btn.style.color="black"
      const id=e.target.id
      props.changeUnit(id)
      btn=document.getElementById(id)
      btn.style.backgroundColor="black"
      btn.style.color="white"
    }
    const change_them=(id)=>{
        Setthem(id)
        if(id==='s-day')
          setShowsun(true)
        else
        setShowsun(false)
    }
    useEffect(()=>{
     document.getElementById(props.unit).style.backgroundColor="black"
     document.getElementById(props.unit).style.color="white"
     
    },[])

    const forecast=async(place)=>{
      const res=await fetch("http://localhost:5000/forecast",{method:"POST",headers:{
        "Content-type":"application/json"
      },body:JSON.stringify({place})})
      const obj=await res.json()
      console.log(obj)
      if(!obj.found){
       alert(obj.messege)
      }
      else{
        setWeatherforecast(obj.forecastresults)
      }
    }
    useEffect(()=>{
     forecast(props.place)
    },[props.place])
  return (
    <div className="additional">
    <div className="unit-select" style={{height:"12%"}}>
        <div className="unit">
        <span className='temp-unit theme' onClick={()=>{change_them('s-day')}} style={{border:them==='s-day'?"1px solid":"none"}}  id='s-day'><FontAwesomeIcon icon={faSun} color='#FFD700'/></span>
        <span className='temp-unit theme' onClick={()=>{change_them('s-night')}}  style={{border:them==='s-night'?"1px solid":"none"}} id='s-night'><FontAwesomeIcon icon={faMoon} color='#A2B9E4' /></span>
        </div>
        <div className="unit">
        <span className='temp-unit' onClick={change_unit} id='cel'>°C</span>
        <span className='temp-unit' onClick={change_unit} id='fa'>°F</span>
        </div>
    </div>
    <div className="forecast">
        {weatherforecast? weatherforecast.map(val=>{
             const d=val.date
             return<Week key={d} maxtemp={val.day.maxtemp_c} maxtempf={val.day.maxtemp_f} mintemp={val.day.mintemp_c} mintempf={val.day.mintemp_f} sunrise={val.astro.sunrise} sunset={val.astro.sunset} moonrise={val.astro.moonrise} moonset={val.astro.moonset} date={val.date} showsun={showsun} icon={val.day.condition.icon} unit={props.unit} text={val.day.condition.text} />
        }):<div>Sorry cant get weather details</div> }
    </div>
    <div className="highlights" style={{height:"60%"}}>
      <h2>Today's Highlights</h2>
      <div className="content">
        <div className="box" id='uv'>
          <h3 >UV Index</h3>
          <span className='label' style={{top:"52%",left:"10%"}}>2</span>
          <span className='label' style={{top:"22%",left:"52%"}}>6</span>
          <span className='label' style={{top:"50%",right:"11%"}}>10</span>
          <span className='label' style={{bottom:"20%",right:"4%"}}>11+</span>
          <span className='scale'></span>
          <span className="semi-circle" style={{background: `conic-gradient(rgba(255, 255, 255, 0) 0% ${props.uv>2?100-(props.uv/12*100)-5:props.uv==0?100:100-(props.uv/12*100)-8 }%, gold ${props.uv>2?100-(props.uv/12*100)-5:props.uv==0?100:100-(props.uv/12*100)-8}% 100%)`,marginTop:"10%"}}>
         <span className="inner">{props.uv!==null?props.uv:"no uv found"}</span>
        </span>
        </div>
        <div className="box" id='wind-stat'>
          <h3>Wind Status</h3>
          <span className="speed">{props.windspeed.kph} <span style={{fontSize:"0.4em"}}>km/h</span></span>
        </div>
        <div className="box" id='sun-info'>
        <h3>Sunrise - Sunset</h3>
        </div>
        <div className="box" id='humidity'>
          <h3>Humidity</h3>

        </div>
        <div className="box" id='visibility'>
          <h3>Visibility</h3>

        </div>
        <div className="box" id='air-quality'>
          <h3>Air Quality</h3>

        </div>
      </div>
    </div>
    
    </div>
    
  )
}

export default Additional
