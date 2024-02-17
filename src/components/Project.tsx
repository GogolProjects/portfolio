import { projects } from '@/lib/data';
import Image from 'next/image';
import React from 'react'

type ProjectProps = (typeof projects)[number];
function Project({
    title,
    description,
    imageUrl
}: ProjectProps) {
  return (
    <div className=' flex flex-col sm:flex-row sm:space-x-10 items-center bg-[#1b070d8e]/30 shadow-2xl w-[65vw]  p-6 sm:p-6  space-y-2 rounded-md mb-5'>
        <label className='min-w-[8vw] text-2xl'>{title}</label>
        <Image src={imageUrl} width={350} alt='projectImg' />
        <p className='text-justify pt-2'>{description}</p>
    </div>
  )
}

export default Project