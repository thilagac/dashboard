import React from 'react'
import {
   DashboardView
  } from "../../lib/data";
  import { BiUpArrowAlt } from "react-icons/bi";
import Chart from '../Chart';
import BarChartComponent from '../shared/bar';
import Bar from '../shared/bar';
const Dashboard = () => {
  return (
    <div class="mx-auto max-w-screen-2xl p-2 md:pr-2 2xl:p-10 sm:pr-1 ">
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-1 sm:gap-6 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5'> 
          
           {DashboardView.map((DashboardView) => {
            return(
            
          <div  className='rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-lg '>
<div className='px-6 py-3'>
    <span className='fill-primary dark:fill-white'>
<div className='text-title-md font-bold text-black dark:text-white'>
   <div className=' h-11.5 w-11.5 items-center justify-center  bg-meta-2 '>
   <span className='bg-blue-600 text-blue-600  '> {DashboardView.icon}</span>
   </div> 
    <div className='mt-4 flex items-end justify-between'>
        <div>
        <h4 class="text-title-md font-bold text-black dark:text-white">
        {DashboardView.value}
        </h4>
         
          <span class="text-sm font-medium">{DashboardView.valueName}</span>
          </div>
          <div className='flex items-center gap-1 text-sm font-medium text-meta-3 text-green-500'>
    4.40% 
    
    <BiUpArrowAlt size={18}/>
</div>
    </div>
 
   
</div>
    </span>

</div>


            </div>
           
          )})}</div>
          <Chart/>
         
        
       </div>
  )
}

export default Dashboard