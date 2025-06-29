import React from 'react';
import Home from "./home/Home";
import {Navigate,Route, Routes} from "react-router-dom";
import Courses from "./Courses/Courses"
import Signup from "./component/Signup"
import Contact from "./component/Contact"
import About from "./component/About"
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/Authprovider";
const App=()=>
{
   const [authUser,setAuthUser] = useAuth();
  console.log(authUser)
  return(
    <>
   <div className="dark:bg-slate-900 dark:text-white">
     {/* <Home/>
    <Course/> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Course" element={authUser?<Courses/>:<Navigate to = "/signup"/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/About" element ={<About/>}/>
    </Routes>
    <Toaster/>
   </div>
    </>
    
  )
}
export default App;