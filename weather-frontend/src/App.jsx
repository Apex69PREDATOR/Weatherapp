import {React,useState,useEffect} from "react";
import {createBrowserRouter,RouterProvider,Navigate}from "react-router-dom"
import Sign from "./components/signin/sign";
import Login from "./components/login/Login";
import Weather_layout from "./components/app-template/weather_layout";
function App() {
  const [login,setLogin]=useState(false)
  const [loding,setLoding]=useState(true)
  const [name,setName]=useState(null)
  const authToken=localStorage.getItem("weatherauthtoken")

  const check_login=async()=>{
    if(authToken){
      console.log("ladhu");
      
      const res=await fetch("http://localhost:5000/checklogin",{method:"GET",headers:{
        "Authorization": `Bearer ${authToken}`
      }})
      console.log("kok");
      
      const checklog=await res.json()
      console.log(checklog)
      if(checklog.success){
        setLogin(true)
        setName(checklog.name)
      }
    }
    setLoding(false)

  }
  useEffect(()=>{
   check_login()
  },[])
  if(loding){
    return <div>Loading...</div>
  }
 const route=createBrowserRouter([
   {
    path:'/',
    element:login?<Weather_layout name={name} />:<Navigate to={'/login'}/>
   },
   {
    path:'/signup',
    element:<Sign/>
   },
   {
    path:'/login',
    element:<Login setname={setName}/>
   }
 ])
  return (
    <RouterProvider router={route}/>
  )
}

export default App
