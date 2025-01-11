import React from 'react'

const Measurement = (props) => {
  return (
    <span  style={{position:"absolute",border:"1px solid rgba(178, 175, 175, 0.826)",height:"40%",width:"10%",right:"8%",top:"25%",borderRadius:"50px",display:"flex",justifyContent:"center"}} > <div style={{height:"25%",width:"70%",borderRadius:"50%",position:"inherit",background:"linear-gradient(120deg,blue,rgb(194, 77, 240))",bottom:`${props.bottom>=4?props.bottom:4}%`,transition:"0.3s ease-in-out"}}></div> </span>
  )
}

export default Measurement
