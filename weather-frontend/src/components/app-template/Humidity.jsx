import React from 'react'
import Measurement from './Measurement'
const Humidity = (props) => {
  return (
    <div className="box" id='humidity'>
          <h3>Humidity</h3>
          <span style={{height:"40%",width:"50%",fontSize:"2.5em"}}>{props.humidity} <span style={{fontSize:"0.6em",margin:"0"}}>%</span> </span>
          <span style={{height:"25%",marginBottom:"5%",fontSize:"1.1em"}}>{props.humidity>=90?<>Extreme <pre style={{fontSize:"1em",display:"inline-block"}}>😱</pre></>:props.humidity>=80?<> Very High<pre style={{fontSize:"1em",display:"inline-block"}}>😨</pre></>:props.humidity>=60?<>High <pre style={{fontSize:"1em",display:"inline-block"}}>😔</pre></>:props.humidity>=40?<>Moderate <pre style={{fontSize:"1em",display:"inline-block"}}>🙂</pre></>:props.humidity>=20?<>Low <pre style={{fontSize:"1em",display:"inline-block"}}>☺️</pre></>:<>Very Low <pre style={{fontSize:"1em",display:"inline-block"}}>😁</pre></>}</span>
          <Measurement bottom={70/100*props.humidity}/>
        </div>
  )
}

export default Humidity
