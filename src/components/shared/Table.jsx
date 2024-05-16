import React from 'react'
import { TableData } from '../../lib/data'

function Table() {
  return (
    <div><div class="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
    <h4 class="mb-6 text-xl font-bold text-black dark:text-white">
      Top Channels
    </h4>
  
    <div class="flex flex-col">
      <div class="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
        <div class="p-2.5 xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base">Source</h5>
        </div>
        <div class="p-2.5 text-center xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base">Visitors</h5>
        </div>
        <div class="p-2.5 text-center xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base">Revenues</h5>
        </div>
        <div class="hidden p-2.5 text-center sm:block xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base">Sales</h5>
        </div>
        <div class="hidden p-2.5 text-center sm:block xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base">Conversion</h5>
        </div>
      </div>
      {
        TableData.map((table)=>(
            <>
            <div class="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
        <div class="flex items-center gap-3 p-2.5 xl:p-5">
        <div class="flex-shrink-0">
            <img src={table.Img} alt="Brand" className='w-12'/>
          </div>
          <p class="hidden font-medium text-black dark:text-white sm:block">
         {table.Source}
          </p>
        </div>
  
        <div class="flex items-center justify-center p-2.5 xl:p-5">
          <p class="font-medium text-black dark:text-white">{table.VISITORS}</p>
        </div>
  
        <div class="flex items-center justify-center p-2.5 xl:p-5">
          <p class="font-medium text-meta-3">{table.REVENUES}</p>
        </div>
  
        <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
          <p class="font-medium text-black dark:text-white">{table.SALES}</p>
        </div>
  
        <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
          <p class="font-medium text-meta-5">{table.CONVERSION}</p>
        </div>
      </div>
            </>
        ))

        
      }
      
  
     
  
    
      
  
     
     
    </div>
  </div></div>
  )
}

export default Table