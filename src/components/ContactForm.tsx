"use client"
import React, { FormEvent, useState } from 'react'
import '@/style/globals.css'

function ContactForm() {

  const[email, setEmail] = useState('')
  const[message, setMessage] = useState('')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
  }
  return (
    <div id='Contact' className='flex  sm:flex-row flex-col sm:space-x-[10vw] sm:ml-[18vw]'>
        <div className='bg-[#CA0241]/30  shadow-2xl w-[65vw] p-4 sm:p-6   space-y-2 rounded-md'>
            <form 
            onSubmit={onSubmit}
            className='text-blue-900 text-sm text-wrap flex flex-col space-y-3'>
                <input
                value={email}
                type='email' 
                onChange={(e) => setEmail(e.target.value)}
                className=' rounded-t-lg p-3'
                placeholder='example@example.com' />
               
                <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Please write Your message. I will contact with You as soon as possible.'
                className='p-3 sm:w-full min-h-[30vw] w-[60vw] sm:min-h-[15vw] rounded-b-lg'/>
               
                <button 
                type='submit'
                className='rounded-full shadow-md self-end text-[#f6f6f6]  bg-[#790643f0] hover:bg-[#44092e] w-fit px-4 py-2'> Send message</button>
            </form>
        </div>
    </div>
  )
}

export default ContactForm