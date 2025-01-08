import {React,useState,useEffect,lazy} from 'react'

const Week = (props) => {

  const [day,setDay]=useState(null)
  const [date,setDate]=useState(null)
  const [month,setMonth]=useState(null)
  const days=['sunday','monday','tuesday','wednesday','thrusday','friday','saturday']
  const mas=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  
  const set_day=()=>{
    const date=new Date(props.date)
  setDay(days[date.getDay()])
  setDate(date.getDate())
  setMonth(mas[date.getMonth()])
  }
  useEffect(()=>{
    set_day()
    // find_image()
  },[props])
  
  return (

    <span className="week">
       <p className="min-max" style={{marginBottom:"8%",fontSize:"1.1em"}}>
       Max temp : <span style={{color:"red"}}> { props.unit==='cel'?props.maxtemp+'°C':props.maxtempf+'°F'} </span>Min temp : <span style={{color:"blue"}}> {props.unit==='cel'?props.mintemp+'°C':props.mintempf+'°F'} {props.mintemp<5?'🥶':'☺️'}</span>
       </p>
       <img src={props.icon} style={{position:"absolute",top:"12%"}} alt="no image available" height={85} width={90}/>
        <p style={{marginTop:"14%"}} className="rise-set">{props.showsun?<> Sunrise - {props.sunrise} Sunset - {props.sunset}</>:<>Moonrise - {props.moonrise} Moonset - {props.moonset}</>}</p>
        <p style={{fontSize:"0.9em",fontWeight:"bold"}} className="date">{date}<sup>{date===1?'st':date===2?'nd':date===3?'rd':'th'}</sup> {month} {day} <span style={{fontSize:"1.2em",fontWeight:"normal"}}>, Weather - <span id='weather' style={props.text==="Sunny"?{color:"#f5af18"}:props.text.includes("rain")?{color:"#2d96a6"}:props.text.includes("snow")?{color:"#b2c1cf"}:null}>{props.text}</span></span></p>
    </span>
  )
}

export default Week
