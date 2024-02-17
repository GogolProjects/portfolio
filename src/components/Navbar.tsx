"use client"
import { links } from '@/lib/data'

import React, { FC } from 'react'

export default function Navbar() {
  window.onload = function(){
    const navigation = document.getElementById('nav') as HTMLDivElement
  
    let lastKnownScrollPosition = 0;
    
    document.addEventListener("scroll", (event) => {
      lastKnownScrollPosition = window.scrollY;
      var x = window.matchMedia("(min-width: 640px)")
      function scroll(x : any, lastKnownScrollPosition : any) {
        if(x.matches && lastKnownScrollPosition > 10){
            navigation.style.backgroundColor = "rgba(33,20,118,0.65)"
          }
        else if(x.matches && lastKnownScrollPosition < 10){
            navigation.style.backgroundColor = "rgba(33,20,118,0.3)"
          }  
        else if(!x.matches && lastKnownScrollPosition > 10){
            navigation.style.backgroundColor = "rgba(121,6,67,0.85)"
          } 
        else{
            navigation.style.backgroundColor = "rgba(121,6,67,0.3)"
          }
      } 
      x.addEventListener("change", function() {
        scroll(x, lastKnownScrollPosition); 
      })
      scroll(x, lastKnownScrollPosition);
    }) 
  }
  return (
    <div id='nav' className='space-x-10 items-center  bg-[rgba(121,6,67,0.85)] sm:bg-[rgba(33,20,118,0.77)] w-[90vw] sm:w-[70vw]  ml-5 sm:ml-[15vw] rounded-full  sm:mt-2 pl-3 sm:px-14 '>  
      <ul className='flex flex-row  items-center opacity-100'>
         <a href='#Start'>
            <img src='Logo.png' className='w-[10vw] scale-[90%] sm:w-[5vw]'/>
          </a>
         {links.map((link)=>(   
            <li key={link.hash} className=' ml-8 space-x-10 text-xl font-semibold'> 
            <a href={link.hash} className='hover:text-blue-950 '>{link.name}</a>
            </li>
            ))
          }
      </ul>
    </div>
  )
}
