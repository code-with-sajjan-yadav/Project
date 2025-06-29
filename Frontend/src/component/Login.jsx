import React from 'react';
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) =>{
     const userInfo={
        email:data.email,
        password:data.password,
      }
    await axios.post("http://localhost:4001/user/login",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success('Login Successfully');
        document.getElementById("my_modal_3").close();
        window.location.reload();
      }
      localStorage.setItem("user",JSON.stringify(res.data.user));
    }).catch((err)=>
    {
      console.log(err)
      toast.error(" Error:"+err.response.data.message);
    })
  }
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
        <button
        type="button"
          onClick={() => document.getElementById("my_modal_3").close()}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >✕
      </button>
    <h3 className="font-bold text-lg">Login</h3>
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
      >
      </input>
      <br></br>
      {errors.password && (<span className="text-sm text-red-500">This field is required</span>)}
    </div>
    <div className="flex justify-around mt-4">
    {/* button */}
    <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Login</button>
    <p>Not registered?{""}
      <Link
      to="/signup"
     className="underline text-blue-500 cursor-pointer" 
     >
      Signup
      </Link>{""}
      </p>
    </div>
    </form>
  </div>
</dialog>
    </div>
  )
}

export default Login
