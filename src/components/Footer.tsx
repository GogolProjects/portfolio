import {  LucideChevronUpCircle } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <div className='bg-[#692a9d]/20 w-full justify-between py-8 px-[10vw] flex space-x-24 text-lg '>
     <span className='pl-[15vw] sm:pl-[35vw]'>2024  Designed by Agata Gogół</span>
     <a href='#Start'>
        <LucideChevronUpCircle size={32} className='hover:stroke-[#771449]'/>
     </a>
    </div>
  )
}

export default Footer