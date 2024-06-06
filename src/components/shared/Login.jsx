             import React from 'react'
import logo from './Capture.PNG'
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate()
  
  return (	
    <div className=' bg-[#1C2434] pt-3  overflow-y-hidden  overscroll-none'>
  <div class="flex flex-col bg-[#1C2434]  h-screen   overflow-y-hidden  justify-center items-center  ">
          <h1 class=" block text-center ml-4 mt-3  font-semibold"><img src={logo} className='left-6  text-center pt-2 '/>
          </h1>
        <div class="p-6 m-6 shadow-lg bg-white rounded-md  sm:w-92 lg:w-1/2  ">
        <h2 class="mb-0 text-2xl font-bold text-black  ">
                     Login to TailAdmin
                    </h2>
              <div class="mt-3">
                <label for="username or Email Address" class="block text-base mb-2 text-slate-800">Username</label>
                <input type="text" id="username" placeholder="Enter your email" class="w-full border  rounded-lg border-stroke bg-transparent py-4 pl-6 pr-10 outline-blue-800"  />
            </div>
            <div class="mt-3 ">
                <label for="password" class="block text-base text-slate-800  mb-2">Password  </label>
              
                <input type="password" id="password" placeholder="6+ Characters, Numbers" class="w-full border border-stroke  rounded-lg  bg-transparent py-4 pl-6 pr-10 outline-blue-800"  />
     
            </div>
          
            <div class="mt-8 flex justify-between items-center">
               
                <div class="w-full text-center rounded-lg border border-stroke bg-blue-800 hover:bg-opacity-90 py-4 pl-6 pr-10 outline-blue-800 ">
                <button type="submit" class="w-full  text-slate-50 text-md font-medium " onClick={() => navigate('/home')}>Login</button>
            </div>
           
            </div>
            <button class="flex w-full mt-3 items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray-200 p-4 font-medium hover:bg-opacity-70 ">
                        <FcGoogle className='w-8 h-8'/>
                        Sign in with Google
                      </button>
            <div class="mt-6 text-center">
                        <p class="font-medium">  
                          Don’t have any account?
                          <a href="" class="text-blue-800 mx-2">Sign Up</a>
                        </p>
                      </div>
            <div >
                </div>
        </div>
    </div>
    </div>
  

  )
}

export default Login