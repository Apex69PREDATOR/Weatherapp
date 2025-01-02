import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCloud} from '@fortawesome/free-solid-svg-icons';
const Overcast = () => {
  return (
    <div style={{alignItems:"flex-start"}}>
      <FontAwesomeIcon icon={faCloud} style={{zIndex:"0",color:"black"}}/>
    </div>
  )
}

export default Overcast
