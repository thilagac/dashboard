import React from 'react'
import { ChartsData } from '../../lib/data'

function Review() {
  return (
    <div>
      <div class="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
                <h4 class="mb-6 px-7 text-xl font-bold text-black dark:text-white">
                  Chats
                </h4>

                <div>
                  {
                    ChartsData.map((data)=>(
                      <a href="messages" class="flex items-center gap-5 px-7 py-3 hover:bg-gray-3 dark:hover:bg-meta-4">
                      <div class="relative h-14 w-14 rounded-full">
                        <img src={data.Img} alt="User"/>
                        <span class="absolute   border-2 rounded-full border-white bottom-0 right-0 h-3.5 w-3.5 bg-green-500"></span>
                      </div>
  
                       <div class="flex flex-1 items-center justify-between">
                        <div>
                          <h5 class="font-medium text-black dark:text-white">
                            {data.user}
                          </h5>
                          <p>
                            <span class="text-sm font-medium text-black dark:text-white">{data.message}</span>
                            <span class="text-xs">{data.time}</span>
                          </p>
                        </div>
                        <div class="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                          <span class="text-sm font-medium text-white">3</span>
                        </div>
                      </div>
                    </a>
                    ))
                  }
                 
                 
                </div>
              </div>
    </div>
  )
}

export default Review