import { cn } from '@/lib/utlis'
import { Alkatra } from 'next/font/google'
import React from 'react'

const alkatra = Alkatra ({
    subsets: ['latin'],
    weight: '400'
  })
function Header() {
  return (
    <div  className={cn('text-4xl items-center flex flex-col font-semibold justify-center sm:ml-20 pb-6 sm:pb-0', alkatra.className)}>
      <header >Agata Gogół</header>
      <h2 className='text-2xl'>Junior Frontend Developer</h2>
      </div>
  
  )}
export default Header