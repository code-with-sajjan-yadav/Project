import React from 'react';
import Home from "./home/Home";
import {Route, Routes} from "react-router-dom";
import Courses from "./Courses/Courses"
import Signup from "./component/Signup"
import Contact from "./component/Contact"
import About from "./component/About"
const App=()=>
{
  return(
    <>
   <div className="dark:bg-slate-900 dark:text-white">
     {/* <Home/>
    <Course/> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Course" element={<Courses/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/About" element ={<About/>}/>
    </Routes>
   </div>
    </>
    
  )
}
export default App;