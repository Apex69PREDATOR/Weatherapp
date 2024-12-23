import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSun,faCloud} from '@fortawesome/free-solid-svg-icons';
const Suncloud = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faSun} style={{zIndex:"0",color:"#FFD700"}}/>
      <FontAwesomeIcon icon={faCloud} style={{zIndex:"1",position:"absolute",color:"#F0F8FF",bottom:"-3%",left:"17%"}}/>
    </div>
  )
}

export default Suncloud
