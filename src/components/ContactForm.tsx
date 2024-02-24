"use client"

import '@/style/globals.css'
import { FormEvent, useState } from 'react';



function ContactForm() {
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
   const handleSubmit = async (e: FormEvent) => {
        setLoading(true);
        e.preventDefault();

        if (email == "" && message == "") {
            setLoading(false);
            alert("Please enter both name & email id");
            return false;
        }
    
        await fetch("/api/SendEmail", {
            method: "POST",
            body: JSON.stringify({  email, message }),
        })
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                if (data && data.id) {
                    alert(`Thank you for your message! I will response as soon as possible!`);
                    setMessage("");
                    setEmail("");
                } else {
                    alert("Apologies! Please try again.");
                }
            })
            .catch((err) => {
                setLoading(false);
                alert("Ooops! unfortunately some error has occurred.");
            });
        return true;
        }

    return (
        <div id='Contact' className='flex  sm:flex-row flex-col sm:space-x-[10vw] sm:ml-[18vw]'>
         <div className='bg-[#CA0241]/30  shadow-2xl w-[65vw] p-4 sm:p-6   space-y-2 rounded-md'>
            <form 
            id='form'   
            onSubmit={handleSubmit} 
               
            className='text-blue-900 text-sm text-wrap flex flex-col space-y-3'>
                <input
                id='email'
                autoComplete='email'
                name='email'
                type='email' 
                value={email}
                required
                maxLength={500}
                className=' rounded-t-lg p-3'
                placeholder='example@example.com'
                onChange={(e) => setEmail(e.target.value)} />
               
                <textarea 
                id='message'
                name='message'
                value={message}
                required
                maxLength={5000}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Please write Your message. I will contact with You as soon as possible.'
                className='p-3 sm:w-full min-h-[30vw] w-[60vw] sm:min-h-[15vw] rounded-b-lg'/>

                <button 
                type='submit'
                className='rounded-full shadow-md self-end text-[#f6f6f6]  bg-[#790643f0] hover:bg-[#44092e] w-fit px-4 py-2'>    
                    {loading ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                         ) : ( "Send message")}
                 </button>
            </form>
        </div>
    </div>
  )
            }


export default ContactForm