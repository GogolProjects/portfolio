import React from 'react'
import SectionSeparator from './Section Separator'

import { projects } from '@/lib/data'
import Project from './Project'

function Projects() {
  return (
    <div id='Projects' className=' flex flex-col sm:flex-row items-center sm:space-x-[10vw] justify-center sm:ml-6'>
      <header className=' text-3xl pb-4'>Projects</header>
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