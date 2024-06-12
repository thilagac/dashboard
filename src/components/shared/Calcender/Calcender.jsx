     import React from 'react'
     
     function Calcender() {
       return (
         <div><table class="w-full">
         <thead>
           <tr class="grid grid-cols-7 rounded-t-sm bg-blue-800 text-white">
             <th class="flex h-15 items-center justify-center rounded-tl-sm p-1 text-xs font-semibold sm:text-base xl:p-5">
               <span class="hidden lg:block"> Sunday </span>
               <span class="block lg:hidden"> Sun </span>
             </th>
             <th class="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
               <span class="hidden lg:block"> Monday </span>
               <span class="block lg:hidden"> Mon </span>
             </th>
             <th class="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
               <span class="hidden lg:block"> Tuesday </span>
               <span class="block lg:hidden"> Tue </span>
             </th>
             <th class="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
               <span class="hidden lg:block"> Wednesday </span>
               <span class="block lg:hidden"> Wed </span>
             </th>
             <th class="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
               <span class="hidden lg:block"> Thursday </span>
               <span class="block lg:hidden"> Thur </span>
             </th>
             <th class="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
               <span class="hidden lg:block"> Friday </span>
               <span class="block lg:hidden"> Fri </span>
             </th>
             <th class="flex h-15 items-center justify-center rounded-tr-sm p-1 text-xs font-semibold sm:text-base xl:p-5">
               <span class="hidden lg:block"> Saturday </span>
               <span class="block lg:hidden"> Sat </span>
             </th>
           </tr>
         </thead>
         <tbody>
     
           <tr class="grid grid-cols-7">
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 xl:h-31">
               <span class="font-medium text-black ">1</span>
               <div class="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30">
                 <span class="group-hover:text-blue-600 md:hidden">
                   More
                 </span>
                 <div class="event invisible absolute left-2 z-99 mb-1 bg-blue-100 flex w-[200%] flex-col rounded-sm border-l-[3px] border-blue-600 bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100  md:visible md:w-[190%] md:opacity-100">
                   <span class="event-name text-sm font-semibold text-black ">
                     Redesign Website
                   </span>
                   <span class="time text-sm font-medium text-black ">
                     1 Dec - 2 Dec
                   </span>
                 </div>
               </div>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 xl:h-31">
               <span class="font-medium text-black ">2</span>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 xl:h-31">
               <span class="font-medium text-black ">3</span>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray md:h-25 md:p-6 xl:h-31">
               <span class="font-medium text-black ">4</span>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 xl:h-31">
               <span class="font-medium text-black ">5</span>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 xl:h-31">
               <span class="font-medium text-black ">6</span>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 xl:h-31">
               <span class="font-medium text-black">7</span>
             </td>
           </tr>
       
           <tr class="grid grid-cols-7">
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 xl:h-31">
               <span class="font-medium text-black ">8</span>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 xl:h-31">
               <span class="font-medium text-black ">9</span>
             </td> 
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 xl:h-31">
               <span class="font-medium text-black ">10</span>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 xl:h-31">
               <span class="font-medium text-black ">11</span>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 xl:h-31">
               <span class="font-medium text-black ">12</span>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 xl:h-31">
               <span class="font-medium text-black ">13</span>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 xl:h-31">
               <span class="font-medium text-black ">14</span>
             </td>
           </tr>
          
           <tr class="grid grid-cols-7">
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 ">
               <span class="font-medium text-black ">15</span>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 ">
               <span class="font-medium text-black ">16</span>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 ">
               <span class="font-medium text-black ">17</span>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 ">
               <span class="font-medium text-black ">18</span>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 ">
               <span class="font-medium text-black ">19</span>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 ">
               <span class="font-medium text-black ">20</span>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 ">
               <span class="font-medium text-black ">21</span>
             </td>
           </tr>
     
           <tr class="grid grid-cols-7">
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 ">
               <span class="font-medium text-black ">22</span>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 ">
               <span class="font-medium text-black ">23</span>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray md:h-25 md:p-6 ">
               <span class="font-medium text-black ">24</span>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 ">
               <span class="font-medium text-black ">25</span>
               <div class="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30">
                 <span class="group-hover:text-primary md:hidden">
                   More
                 </span>
                 <div class="event invisible absolute left-2 z-99 mb-1 flex w-[200%] bg-blue-100 flex-col rounded-sm border-l-[3px] border-blue-600 bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100  md:visible md:w-[290%] md:opacity-100">
                   <span class="event-name text-sm font-semibold text-black ">
                     App Design
                   </span>
                   <span class="time text-sm font-medium text-black ">
                     25 Dec - 27 Dec
                   </span>
                 </div>
               </div>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray md:h-25 md:p-6 ">
               <span class="font-medium text-black ">26</span>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 ">
               <span class="font-medium text-black ">27</span>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:p-6 ">
               <span class="font-medium text-black ">28</span>
             </td>
           </tr>
        
           <tr class="grid grid-cols-7">
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 ">
               <span class="font-medium text-black ">29</span>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 ">
               <span class="font-medium text-black ">30</span>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 xl:h-31">
               <span class="font-medium text-black ">31</span>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray md:h-25 md:p-6 xl:h-31">
               <span class="font-medium text-black ">1</span>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 xl:h-31">
               <span class="font-medium text-black ">2</span>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 xl:h-31">
               <span class="font-medium text-black ">3</span>
             </td>
             <td class="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray  md:h-25 md:p-6 xl:h-31">
               <span class="font-medium text-black ">4</span>
             </td>
           </tr>
           
         </tbody>
       </table></div>
       )
     }
     
     export default Calcender