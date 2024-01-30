
import { links } from '@/lib/data'

import React from 'react'


export default function Navbar() {
 
  
  return (
    
    <div className='flex justify-center space-x-10 items-center '>
      
       
  
     <ul className='w-[90vw] sm:w-[70vw]  ml-0 sm:ml-[15vw] rounded-full  sm:mt-2 pl-3 sm:px-14 py-2 bg-[#790643f0]/30 sm:bg-[#211476cc]/30  flex flex-row  '>

      
         <a href='#Start'>
            <img src='Logo.png' className='w-[10vw] sm:w-[5vw]'/>
          </a>
          <div className=' ml-8 pt-5 space-x-10 text-xl font-semibold'> 
          <a href='#About' className='hover:text-blue-950 '>About</a>
          <a href='#Skils' className='hover:text-blue-950 '>Skils</a>
          </div>
        </ul>
     
      </div>

  )
}