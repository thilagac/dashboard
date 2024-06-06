import React from 'react'

import Bar from '../bar'

import First from './First'
import Second from './Second'
import Third from './thrid'
import ChartFirst from '../Basic chart/ChartFirst'
const AdvanceChart = () => {
  return (
    <div> 
        <span className='lg:w-2/5  shadow-md sm:w-full md:w-full max-sm:w-full bg-white ' ><ChartFirst/></span>
     
      <div className=' max-sm:mt-4  shadow-default max-sm:gap-4 flex flex-wrap items-start justify-between gap-8 sm:flex-wrap lg:flex-nowrap lg:w-full pt-4 pr-0 max-sm:pr-0  max-md:gap-4 max-md:pt-0 mt-4 sm:mb-4 lg:mb-8 max-sm:mb-4 md:mb-8'>
       
    <div className='lg:w-3/5 sm:w-full md:w-full max-sm:w-full shadow-md bg-white '><First/></div>
      <span className='lg:w-2/5  shadow-md sm:w-full md:w-full max-sm:w-full bg-white' ><Second/></span>
         
   </div>

      <span className='lg:w-2/5  shadow-md sm:w-full md:w-full max-sm:w-full bg-white ' ><Third/></span>
     
      </div>
  )
}

export default AdvanceChart