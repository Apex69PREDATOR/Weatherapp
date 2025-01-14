import {React} from 'react'
import { useForm } from 'react-hook-form'

const Login = (props) => {

    const {register,handleSubmit}=useForm()
    const onsubmit=async(data)=>{
         const res=await fetch("http://localhost:5000/login",{method:"POST",headers:{
          "Content-type":"application/json"
         },body:JSON.stringify(data)})
         const r=await res.json()

         if(r.loggin){
         if(r.token){
           localStorage.setItem("weatherauthtoken",r.token)
           
         }
        else{
        alert("some error occured signning in")
      }
         props.setname(r.name)
         
         location.href='/'
        }
        else
        alert("email or password is invalid")
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
