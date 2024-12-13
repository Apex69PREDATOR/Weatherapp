import {React,useState} from "react";
import {createBrowserRouter,RouterProvider}from "react-router-dom"
import Sign from "./components/signin/sign";
function App() {
  
 const route=createBrowserRouter([
   {
    path:'/',
    element:<Sign/>
   }
 ])
  return (
    <RouterProvider router={route}/>
  )
}

export default App
