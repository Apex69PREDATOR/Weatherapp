import {React,useState} from 'react'
import {useForm} from 'react-hook-form'
import "./sign.css"
const sign = () => {
    const {register,handleSubmit,unregister}=useForm()
    const onsubmit=async (data)=>{
      console.log(data)
      const res=await fetch("http://localhost:5000/signup",{method:"POST",headers:{
        "Content-type":"application/json"
      },body:JSON.stringify(data)})
    }
  return (
    <form action="" className='weather-sign' onSubmit={handleSubmit(onsubmit)}>
      <div className="sheet"></div>
      <div className="wrap">
     <label htmlFor="fstname">Firstname</label>
     <input type="text"  id="fstname" {...register("firstname",{required:true})} />
     </div>
     <div className="wrap">
     <label htmlFor="lstname">Lastname</label>
     <input type="text"  id="lstname" {...register("lastname",{required:true})} />
     </div>   
     
     <div className="wrap"><label htmlFor="email">Email</label>
     <input type="text"  id="email" {...register("email",{required:true})} /></div>
     <div className="wrap"><label htmlFor="phone">Phone no</label>
     <input type="number"  id="phone" {...register("phone",{required:true})} /></div>
     <div className="wrap">
     <label htmlFor="password">Password</label>
     <input type="text"  id="password" {...register("password",{required:true})} />
     </div>
     <div className="wrap">
     <label htmlFor="confirm-password">Retype Password</label>
     <input type="text"  id="confirm-password" {...register("confirm_password",{required:true})} />
     </div>
     <button className='signin' style={{height:"10%",color:"black",borderRadius:"10px",border:"none",cursor:"pointer"}}>Sign in</button>
    </form>
  )
}

export default sign
