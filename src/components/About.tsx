
import React from 'react'

function About() {
  return (
    <div id='About' className='flex  sm:flex-row flex-col items-center sm:space-x-[10vw] justify-center' >
       <header className='min-w-[7vw] items-center text-3xl pb-4'>About</header>
      <div className='bg-[#CA0241]/15  shadow-2xl w-[65vw] p-4 sm:p-6 items-center  space-y-2 rounded-md' > 
        <div className='py-4 m-6 text-lg indent-8 text-justify'>
        <p>
          I have a Master Degree in Genetics and Experimental Biology. After graduation, I worked in one of the largest dental clinics in Poland. Currently, I am working nn the legalization of the stay and work of foreigners. Both of these places allowed me to gain valuable experience in working with clients and dealing with various, often unusual situations. Both of these places also showed me that I can learn a lot in a very short time, even if I start from scratch. I became fascinated with programming in high school, but only now I decided to explore this topic and it turned out that it has a lot to do with genetics. After all, a website is like an organism, all of its elements must work well to function properly, and this is determined by the code. And it was this code and how it works that fascinated me years ago when it comes to genetics, and now just as much when it comes to programming.
        </p>
        <p>
         In my free time, I develop my passion for cooking, reading books and practicing sports, as well as learning foreign languages.
        </p>


        </div>
      </div>
    </div>
  )
}

export default About