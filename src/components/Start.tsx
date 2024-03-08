
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
      <div className='py-4 w-[65vw] sm:w-[51vw]  bg-[#CA0241]/20 rounded-md items-center '>
        <div className='m-6 sm:px-6 text-justify'>   
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a porta felis. Proin ac condimentum risus, vitae faucibus ligula. Maecenas vel odio placerat, hendrerit magna eget, luctus sem. Proin vitae libero commodo, aliquam nisi nec, congue lectus. Suspendisse eget est blandit tortor fringilla dictum. Nulla non convallis ligula, a gravida libero. Donec ut scelerisque eros, a interdum justo. Suspendisse congue semper risus, sed laoreet purus pharetra in. Vivamus rhoncus et massa non hendrerit. Proin ac purus at purus tincidunt vestibulum id quis velit. Ut pretium sem a libero dapibus lacinia.
        </div>
      </div>
    </div>  
  )
}

export default Start