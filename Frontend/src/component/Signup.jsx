import React from 'react'
import {Link} from "react-router-dom"
import Login from "./Login"
import { useForm } from "react-hook-form"
function Signup() {
   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
  
    const onSubmit = (data) => console.log(data)
  return (
    <>
    <div className="flex h-screen items-center justify-center">
      <div id="my_modal_3" className="w-[600px]">
        <div className="Modal-box">
          <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    <h3 className="font-bold text-lg">Signup</h3>
    <div className="mt-4 space-y-2">
      <span>Name:</span>
      <br></br>
      <input type="name" 
      placeholder='enter your fullname' 
      className="w-80 px-3 py-1 border rounded-md outeline-none"
       {...register("name", { required: true })}
      ></input>
      <br></br>
      {errors.name && (<span className="text-sm text-red-500">This field is required</span>)}
    </div>
    <div className="mt-4 space-y-2">
      <span>Email:</span>
      <br></br>
      <input type="email" 
      placeholder='enter your email' 
      className="w-80 px-3 py-1 border rounded-md outeline-none"
       {...register("email", { required: true })}
      >
      </input>
      <br></br>
      {errors.email && (<span className="text-sm text-red-500">This field is required</span>)}
    </div>
    {/* password */}
    <div className="mt-4 space-y-2">
      <span>Password:</span>
      <br></br>
      <input type="password" 
      placeholder='enter your password' 
      className="w-80 px-3 py-1 border rounded-md outeline-none"
       {...register("password", { required: true })}
      ></input>
      <br></br>
      {errors.password && (<span className="text-sm text-red-500">This field is required</span>)}
    </div>
    <div className="flex justify-around mt-4">
    {/* button */}
    <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Signup</button>
    <p className="text-xl">
      Have account?{""}
      <Link to="/"
     className="underline text-blue-500 cursor-pointer" 
     onClick={()=>
      document.getElementById("my_modal_3").showModal()
     }
     >
      home
      </Link>{""}
      </p>
    </div>
    </form>
  </div>
</div>
    </div>
    </>
  )
}

export default Signup
