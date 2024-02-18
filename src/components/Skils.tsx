import { skils } from '@/lib/data'
import React from 'react'

function Skils() {
  return (
    <div id='Skils' className=' flex flex-col sm:flex-row items-center sm:space-x-[10vw] justify-center'>
      <header className=' text-3xl pb-4'>Skils</header>
    <div className=' w-[65vw] p-4 sm:p-6  mx-4 space-y-2 rounded-md' >
    
    <div className='text-center justify-center flex flex-row flex-wrap'>
    
        {skils.map((skill) => (
          <div className='rounded-2xl  bg-[#310b17d8]/30 hover:bg-[#CA0241]/50 shadow-2xl m-2 w-fit p-5 space-y-7 sm:space-x-5 space-x-4'>
            <label>{skill}</label>
          </div>
        )

        )}
    
      
    </div>
    </div>
    </div>
  )
}

export default Skils