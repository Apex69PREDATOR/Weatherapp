import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSun,faCloud,faCloudRain} from '@fortawesome/free-solid-svg-icons';
const Sunrain = () => {
  return (
    <div style={{alignItems:"flex-start"}}>
      <FontAwesomeIcon icon={faSun} style={{zIndex:"0",color:"#FFD700"}}/>
      <FontAwesomeIcon icon={faCloud} style={{zIndex:"1",position:"absolute",color:"#F0F8FF",bottom:"4%",left:"17%"}}/>
      <FontAwesomeIcon icon={faCloudRain} style={{color:"blue",position:"absolute",bottom:"-15%",right:"25%",height:"80%"}}/>
    </div>
  )
}

export default Sunrain
