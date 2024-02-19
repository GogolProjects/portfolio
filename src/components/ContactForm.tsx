import React from 'react'
import '@/style/globals.css'

function ContactForm() {
  return (
    <div id='Contact' className='flex  sm:flex-row flex-col sm:space-x-[10vw] sm:ml-[18vw]'>
        <div className='bg-[#CA0241]/20  shadow-2xl w-[65vw] p-4 sm:p-6   space-y-2 rounded-md'>
            <form className='text-blue-900 text-sm text-wrap flex flex-col space-y-3'>
                <input className=' rounded-t-lg p-3'
                placeholder='example@example.com'>
                </input>
                <input type='text' placeholder='Please write Your message. I will contact with You as soon as possible.'
                className='px-3 sm:w-full min-h-[30vw] w-[60vw] sm:min-h-[15vw] rounded-b-lg'>
                </input>
                <button 
                type='submit'
                className='border-2 rounded-full self-end text-sky-200 bg-slate-600 w-fit px-4 py-2'> Send message</button>
            </form>
        </div>
    </div>
  )
}

export default ContactForm