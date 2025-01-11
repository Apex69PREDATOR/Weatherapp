import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMoon,faCloud,faThunderstorm} from '@fortawesome/free-solid-svg-icons';
const Moonthunder = () => {
  return (
    <div style={{alignItems:"flex-start"}}>
      <FontAwesomeIcon icon={faMoon} style={{zIndex:"0",color:"#A2B9E4"}}/>
      <FontAwesomeIcon icon={faCloud} style={{zIndex:"1",position:"absolute",color:"#858481",bottom:"4%",left:"17%"}}/>
      <FontAwesomeIcon icon={faThunderstorm} style={{color:"gold",position:"absolute",bottom:"-20%",right:"22%",height:"80%"}}/>

    </div>
  )
}

export default Moonthunder
