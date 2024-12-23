import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMoon,faCloud } from '@fortawesome/free-solid-svg-icons';
const Mooncloud = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faMoon} style={{zIndex:"0",color:"#A2B9E4"}}/>
      <FontAwesomeIcon icon={faCloud} style={{zIndex:"1",position:"absolute",color:"#F0F8FF",bottom:"-3%",left:"17%"}}/>
    </div>
  )
}

export default Mooncloud
