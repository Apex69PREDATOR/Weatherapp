import React from 'react'
import Measurement from './Measurement'
const Airquality = (props) => {
  const mapping={1: "Good ☺️",
    2: "Moderate 😮‍💨",
    3: "Unhealthy for Sensitive Groups😬",
    4: "Unhealthy 😨",
    5: "Very Unhealthy 😰",
    6: "Hazardous 💀"}
  return (
    <div className="box" id='air-quality'>
          <h3>Air Quality</h3>
            <Measurement bottom={70/100*(props.quality['gb-defra-index']*10)}/>
            <span style={{fontSize:"1.6em",alignContent:"center"}}>AQ index: {props.quality['us-epa-index']}</span>
            <span style={{marginBottom:"5%",fontSize:"1.2em",width:"90%"}}>{mapping[`${props.quality['us-epa-index']}`]}</span>
        </div>
  )
}

export default Airquality
