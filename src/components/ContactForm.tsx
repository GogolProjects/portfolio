"use client"

import  { sendEmail } from '@/actions/SendEmail';
import { useFormStatus } from 'react-dom';
import toast from 'react-hot-toast';


function ContactForm() {

  const { pending } = useFormStatus();
  
    return (
        <div id='Contact' className='flex  sm:flex-row flex-col sm:space-x-[10vw] sm:ml-[18vw]'>
         <div className='bg-[#CA0241]/30  shadow-2xl w-[65vw] p-4 sm:p-6   space-y-2 rounded-md'>
            <form 
              id='form' 
              className='text-blue-900 text-sm text-wrap flex flex-col space-y-3'
              action={async (formData) => {
                const { data, error } = await sendEmail(formData);
              if (error) {
                toast.error(error);
                return;
              }
              toast.success("Email sent successfully!", {position: 'bottom-center'})
              console.log("Success");
            }}
            >
                <input
                name='email'
                type='email' 
                autoComplete='email'
                required
                maxLength={500}
                className=' rounded-t-lg p-3'
                placeholder='example@example.com'
               />             
                <textarea 
                name='message'
                required
                maxLength={5000}
                placeholder='Please write Your message. I will contact with You as soon as possible.'
                className='p-3 sm:w-full min-h-[30vw] w-[60vw] sm:min-h-[15vw] rounded-b-lg'/>
                <button 
                type='submit'
                disabled={pending}
                className='rounded-full shadow-md self-end text-[#f6f6f6]  bg-[#790643f0] hover:bg-[#44092e] w-fit px-4 py-2'>    
                    {pending ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"/>
                         ) : (<>Send message</>)}
                 </button>
            </form>
        </div>
    </div>
  )
            }


export default ContactForm