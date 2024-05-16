 import React from 'react'
import ChartGraph from './shared/Linechart'
import Bar from './shared/bar'
import DonutChartUsage from './shared/radiochart'
import Map from './Map'
import Table from './shared/Table'
import Review from './shared/review'
 
 const Chart = () => {
   return (
     <div className=' '>
        <div className='  '>
        
        <div className='  shadow-default flex flex-wrap items-start justify-between gap-2 sm:flex-wrap lg:flex-nowrap lg:w-full p-3 pr-5 mt-4'>
       
      <div className='lg:w-3/5 sm:w-full md:w-full  shadow-md bg-white'><ChartGraph/></div>
        <span className='lg:w-2/5  shadow-md sm:w-full md:w-full bg-white' ><Bar/></span>
        </div>
        
        </div>
        <div className=' flex flex-wrap  max-sm:flex-wrap lg:flex-nowrap lg:w-full  pr-2'>
<div className='lg:w-2/5 max-sm:w-full sm:w-full md:w-full m-2 mt-2 shadow-md  ' >
  <DonutChartUsage/>
  
</div>
<div className='lg:w-3/5 max-sm:w-full sm:w-full md:w-full m-2 mt-2 shadow-md '>
  <Map/>
</div>

        </div>
        <div className='shadow-default flex flex-wrap items-start justify-between gap-2 sm:flex-wrap lg:flex-nowrap lg:w-full  mt-'>

        <div className='  flex flex-wrap items-start justify-between  sm:flex-wrap lg:flex-nowrap lg:w-full p-1 pr-2'>
<div className='lg:w-3/5 max-sm:w-full sm:w-full md:w-full m-2 mt-2 shadow-md  ' >
<Table/>
  
</div>
<div className='lg:w-2/5 max-sm:w-full sm:w-full md:w-full m-2  mt-2 shadow-md '>
<Review/>
</div>

        </div>
        </div>
       
        
        
        </div>
   )
 }
 
 export default Chart