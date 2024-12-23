import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMoon,faCloud,faThunderstorm} from '@fortawesome/free-solid-svg-icons';
const Moonthunder = () => {
  return (
    <div style={{alignItems:"flex-start"}}>
      <FontAwesomeIcon icon={faMoon} style={{zIndex:"0",color:"#A2B9E4"}}/>
      <FontAwesomeIcon icon={faCloud} style={{zIndex:"1",position:"absolute",color:"#F0F8FF",bottom:"4%",left:"17%"}}/>
      <FontAwesomeIcon icon={faThunderstorm} style={{color:"blue",position:"absolute",bottom:"-15%",right:"45%",height:"25%"}}/>

    </div>
  )
}

export default Moonsnow
