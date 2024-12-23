import {React,useState} from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import "./sign.css"
const sign = () => {
  const nav=useNavigate()
    const {register,handleSubmit,unregister,reset,setError}=useForm()
    const onsubmit=async (data)=>{
      console.log(data)
      if(data.password!==data.confirm_password){
        alert("passwords dosen't match")
        return
      }
      const res=await fetch("http://localhost:5000/signup",{method:"POST",headers:{
        "Content-type":"application/json"
      },body:JSON.stringify(data)})
      const account=await res.json()
      alert(account.messege)
      if(account.created){
        nav('/login')
      }
      reset()
    }
  return (
    <>
    <form className='weather-sign' onSubmit={handleSubmit(onsubmit)}>
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
     <input type="number"  id="phone" {...register("number",{required:true})} /></div>
     <div className="wrap">
     <label htmlFor="password">Password</label>
     <input type="password" id="password" {...register("password",{required:true,min:{value:8,message:"password must be minimum 8 charecters"}})} />
     </div>
     <div className="wrap">
     <label htmlFor="confirm-password">Retype Password</label>
     <input type="password"  id="confirm-password" {...register("confirm_password",{required:true})} />
     </div>
     <button className='signin' style={{height:"10%",color:"black",borderRadius:"10px",border:"none",cursor:"pointer"}}>Sign up</button>
    </form>
    <div className="navsign" style={{left:"46%"}}>You can sign in <a href="/login">here</a></div>
    </>
  )
}

export default sign
