import { data } from "autoprefixer";
import React, { useState } from "react";

const AdvanceForm = () => {
  const [Data,setData]=useState(0)
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 w-full">
         
 
          <div className="flex flex-col gap-9">
            <div class="rounded-sm border border-stroke bg-white shadow-default ">
              <div class="border-b border-stroke px-6 py-4 dark:border-strokedark">
                <h3 class="font-medium text-black dark:text-white">
                  File Drop Zone
                </h3>
              </div>
              <div class="p-6">                
                  
<div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 active:border-sky-600 hover:bg-gray-100 ">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 

              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="rounded-sm border border-stroke bg-white shadow-default  ">
              <div className="border-b border-stroke px-6 py-4">
                <h3 className="font-medium text-black ">
                 Date &Time Picker
                </h3>
              </div>
              <div className="p-6">
                
<div className="flex items-center justify-center w-full">
    

<div className="relative p-8 ">
 
<form className="">
        
<label for="time" className=" font-medium text-gray-700  mt-4 mb-4">Select Date:</label>
    
          <input datepicker type="date" className="bg-gray-50 border border-gray-300 text-gray-900 mt-4 mb-4 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2 p dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>

         
    <label for="time" className="font-medium text-gray-700 mt-8 mb-4">Select time:</label>
    <div className="relative">
        <div className="absolute inset-y-0 end-0 top-0 flex items-center p-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"/>
            </svg>
        </div>
        <input type="time" id="time" className="bg-gray-50 border leading-none mt-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min="09:00" max="18:00" value="00:00" required />
    </div>
</form>

   
</div>
</div> 

              </div>
            </div>
          </div>
          <div className="flex flex-col gap-9 mb-4">
            <div className="rounded-sm border border-stroke bg-white shadow-default ">
              <div className="border-b border-stroke px-6 py-4 ">
                <h3 className="font-medium text-black ">
                  Range Slider
                </h3>
              </div>
              <div className="flex flex-col gap-5.5 p-7">
                
<label for="default-range" className="block mb-2 text-sm font-medium text-gray-800 dark:text-white mt-3">Default range</label>
<input  type="range"  value={Data} className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-3"

onChange={(e)=>setData(parseInt(e.target.value,10))}/>
<h4>{Data}</h4>
<label for="disabled-range" className="block mb-2 text-sm font-medium text-gray-800 dark:text-white mt-4">Disable range</label>
<input id="disabled-range" type="range" value="50" className="w-full h-3 bg-gray-200 mt-3 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" disabled></input>
               
              </div>
            </div>
          
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceForm;
