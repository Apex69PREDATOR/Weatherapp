import {React,useEffect,useState} from 'react'
import { useForm } from 'react-hook-form'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const nav=useNavigate()
    const {register,unregister,handleSubmit}=useForm()
    const onsubmit=async(data)=>{
         const res=await fetch("http://localhost:5000/login",{method:"POST",headers:{
          "Content-type":"application/json"
         },body:JSON.stringify(data)})
         const r=await res.json()
         alert(r.messege)
         if(r.loggin){
         r.token?localStorage.setItem("weatherauthtoken",r.token):alert("some error occured signning in")
         nav('/') 
        }
    }
  return (
    <>
    <div className="logcontainer">
    <form className='weather-sign weather-log' onSubmit={handleSubmit(onsubmit)}>
      <div className="sheet"></div>
      <div className="wrap"><label htmlFor="email"><b>Email</b></label>
     <input type="text"  id="email" {...register("email",{required:true})} /></div>
     <div className="wrap"><label htmlFor="password" ><b> Password</b></label>
     <input type="text"  id="password" {...register("password",{required:true})} /></div>
     <button className='signin' style={{height:"10%",color:"black",borderRadius:"10px",border:"none",cursor:"pointer"}}>Sign in</button>
    </form>
    <div className="navsign">Don't have an account sign up <a style={{fontSize:""}} href="/signup"><i>here</i></a></div>
    </div>
    </>
  )
}

export default Login
