import {React,useState} from 'react'

const Visibility = (props) => {
  const [km,iskm]=useState(true)
  const changekm=()=>{
    km?iskm(false):iskm(true)
  }
  return (
    <div className="box" id='visibility'>
      <span className="toggle-km">
        <p style={{marginRight:km?"8%":"0"}}>Km</p>
        <div className="line" style={{backgroundColor:km?"black":"white"}} onClick={changekm}><span className="ball" style={{left:km?"-25%":"72%"}}></span></div>
        <p style={{marginLeft:km?"0":"8%"}}>Mile</p>
      </span>
          <h3>Visibility</h3>
          <span className='vis-info'>{km?<>{props.visible.km} <span style={{fontSize:"0.5em"}}>km</span> </>:<>{props.visible.mile} <span style={{fontSize:"0.5em"}}>mile</span> </>}</span>
          <span  style={{marginBottom:"5%",fontSize:"1.1em",marginLeft:"6%"}}className='vis-info'>{props.visible.km>=10?"Very Good 😁":props.visible.km>=8?"Good 🙂":props.visible.km>=5?"Average 😕":props.visible.km>=2?"Bad 😶‍🌫️":"Very Bad 😤"}</span>
        </div>
  )
}

export default Visibility
