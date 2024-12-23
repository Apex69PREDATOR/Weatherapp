import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSun,faCloud,faSnowflake} from '@fortawesome/free-solid-svg-icons';
const Sunsnow = () => {
  return (
    <div style={{alignItems:"flex-start"}}>
      <FontAwesomeIcon icon={faSun} style={{zIndex:"0",color:"#FFD700"}}/>
      <FontAwesomeIcon icon={faCloud} style={{zIndex:"1",position:"absolute",color:"#F0F8FF",bottom:"4%",left:"17%"}}/>
      <FontAwesomeIcon icon={faSnowflake} style={{color:"blue",position:"absolute",bottom:"-15%",right:"25%",height:"25%"}}/>
      <FontAwesomeIcon icon={faSnowflake} style={{color:"blue",position:"absolute",bottom:"-15%",right:"45%",height:"25%"}}/>
      <FontAwesomeIcon icon={faSnowflake} style={{color:"blue",position:"absolute",bottom:"-15%",right:"65%",height:"25%"}}/>

    </div>
  )
}

export default Sunsnow
