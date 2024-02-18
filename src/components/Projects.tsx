import React from 'react'


import { projects } from '@/lib/data'
import Project from './Project'

function Projects() {
  return (
    <div id='Projects' className=' flex flex-col sm:flex-row items-center sm:space-x-[10vw] justify-center w-[65vw]'>
      <header className='text-3xl pb-4'>Projects</header>
    <div >
        <div>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project}/>
          </React.Fragment>
        ))}
        </div>  
    
    </div>
    </div>
    
  )
}

export default Projects