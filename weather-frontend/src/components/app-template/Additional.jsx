import {React,useState,useEffect} from 'react'
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
             return<Week key={d} maxtemp={val.day.maxtemp_c} maxtempf={val.day.maxtemp_f} mintemp={val.day.mintemp_c} mintempf={val.day.mintemp_f} sunrise={val.astro.sunrise} sunset={val.astro.sunset} moonrise={val.astro.moonrise} moonset={val.astro.moonset} date={val.date} showsun={showsun} icon={val.day.condition.icon} unit={props.unit}/>
        }):<div>Sorry cant get weather details</div> }
    </div>
    <div className="highlights" style={{height:"60%"}}></div>
    
    </div>
    
  )
}

export default Additional
