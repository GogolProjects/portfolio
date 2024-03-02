import { projects } from '@/lib/data';
import Image from 'next/image';
import React from 'react'

type ProjectProps = (typeof projects)[number];
function Project({
    title,
    description,
    imageUrl,
    url,
    urlIcon,
    tags,
    github,
    githubIcon,
}: ProjectProps) {
  return (
    <div className=' flex flex-col sm:flex-row sm:space-x-5 items-center bg-[#1b070d8e]/30 shadow-2xl w-[65vw] p-6 space-y-2 rounded-md mb-5'>
       <div className='flex flex-row sm:flex-col items-center justify-center space-x-3 sm:space-y-2 py-3'> 
        <label className='w-fit sm:w-[10vw] text-3xl sm:pl-6'>{title}</label>
        <div className='flex flex-row items-start space-x-2'>
        <a href={url}>
          <Image src={urlIcon} width={48} alt='urlIcon' />
        </a>
        <a href={github}>
          <Image src={githubIcon} width={48} alt='githubIcon' />
        </a>
        </div>
      </div>
        <Image src={imageUrl} width={350} alt='projectImg' />
        <p className='text-justify pt-2'>{description}</p>
        <ul className='flex flex-wrap justify-center space-x-2 space-y-2'>
          {tags.map((tag, index) =>(
            <li 
            className='w-fit p-4 items-center rounded-2xl bg-[#692a9d]/70 hover:bg-[#692a9d]'
            key={index}>
              {tag}
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Project