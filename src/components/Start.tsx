
import React from 'react'


function Start() {
  return (
 
    <div  className='flex flex-col sm:flex-row items-center sm:space-x-8 space-y-6'>
      <div className='w-[40vw] sm:w-[20vw]  justify-center sm:ml-0 p-5 bg-[#692a9d]/30 sm:bg-blue-900/30  shadow-2xl rounded-3xl sm:rounded-l-3xl sm:rounded-tr-3xl'>
        <img className='rounded-lg scale-[90%] sticky'  src="/Portfoliophoto.png" />
      </div>
      <div className='flex flex-row sm:flex-col sm:space-y-10 space-x-4 sm:space-x-2 items-center justify-center  sm:bg-blue-800/20 hover:bg-[#692a9d]/50 sm:hover:bg-blue-400/50 sm:py-8 pl-4 pr-2 pt-2 pb-4 sm:px-2 rounded-full sm:rounded-full'>
          <a href='https://github.com/GogolProjects?tab=repositories'>
            <img className='w-[10vw] md:w-[50px] mt-2 sm:mt-0 sm:mx-4'
              src='/GitHubIcon.png'/>
            </a>
          <a href='https://www.linkedin.com/in/agata-gog%C3%B3%C5%82-403976213/'>
              <img className='w-[10vw] md:w-[50px] overflow-hidden mt-2 mx-2 sm:mx-3 sm:mt-0'
              src='/LinkedinIcon.png'/>
           </a>
            </div>
      <div className='py-4 w-[65vw] sm:w-[51vw]  bg-transparent rounded-md items-center '>
        <div className='m-6 sm:px-6 text-2xl text-center font-semibold'>   
          Are you looking for someone full of energy, committed and hard-working? 
          <br/> 
          <br/>
          You're in the right place. Scroll down to get to know me a bit...
        </div>
      </div>
    </div>  
  )
}

export default Start