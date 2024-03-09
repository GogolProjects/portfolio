import { projects } from '@/lib/data';
import Image from 'next/image';
import React from 'react'

type ProjectProps = (typeof projects)[number];
function Project({
    title,
    description,
    imageUrl,
    imageUrl_2,
    url,
    urlIcon,
    tags,
    github,
    githubIcon,
}: ProjectProps) {
  return (
    <div className=' flex flex-row flex-wrap sm:space-x-5 items-center justify-center  bg-[#1b070d8e]/30 shadow-2xl w-[65vw] p-3 pb-5 space-y-4 rounded-md mb-5'>
       <div className=' space-x-3 sm:space-y-2 p-3'> 
        <label className='w-fit sm:w-[10vw] text-3xl m-auto pl-3 sm:pl-3'>{title}</label>
        <div className='flex flex-row items-start space-x-2'>
          <a href={url}>
            <Image src={urlIcon} width={48} alt='urlIcon' />
          </a>
          <a href={github}>
           <Image src={githubIcon} width={48} alt='githubIcon' />
          </a>
        </div>
      </div>
      <Image className='rounded-3xl hover:scale-110' src={imageUrl} width={250} alt='projectImg' />
      <Image className='rounded-3xl hover:scale-110' src={imageUrl_2} width={250} alt='projectImg' />
      <p className='text-justify py-4 pl-5 pr-10 w-full'>{description}</p>
        {tags.map((tag, index) =>(
          <div className='p-1  sm:p-0'>
            <ul className='sm:py-3' >
              <li 
                className='w-fit p-3 hover:animate-pulse items-center rounded-2xl bg-[#692a9d]/70 hover:bg-[#8645bb]'
                key={index}>
                  {tag}
              </li>
            </ul>
          </div>
        ))}
    </div>
  )
}

export default Project