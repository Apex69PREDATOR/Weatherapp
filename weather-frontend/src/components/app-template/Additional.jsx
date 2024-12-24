import { use } from 'react'
import {React,useState,useEffect} from 'react'
import "./additional.css"
const Additional = (props) => {
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
    useEffect(()=>{
     document.getElementById(props.unit).style.backgroundColor="black"
     document.getElementById(props.unit).style.color="white"
    },[])

    const forecast=async(place)=>{
      const res=await fetch("http://localhost:5000/forecast",{method:"POST",headers:{
        "Content-type":"application/json"
      },body:JSON.stringify({place})})
    }
    useEffect(()=>{
     forecast(props.place)
    },[props.place])
  return (
    <div className="additional">
    <div className="unit-select" style={{height:"12%"}}>
        <span className='temp-unit' onClick={change_unit} id='cel'>°C</span>
        <span className='temp-unit' onClick={change_unit} id='fa'>°F</span>
    </div>
    <div className="forecast">
        <span className="week"></span>
        <span className="week"></span>
        <span className="week"></span>
        <span className="week"></span>
        <span className="week"></span>
        <span className="week"></span>
        <span className="week"></span>
    </div>
    <div className="highlights" style={{height:"60%"}}></div>
    
    </div>
    
  )
}

export default Additional
