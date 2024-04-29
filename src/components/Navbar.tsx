"use client"
import {  links } from '@/lib/data'

import React, { FC, useEffect } from 'react'

export default function Navbar() {
  useEffect(() =>{ 
      const navigation = document.getElementById('nav') as HTMLDivElement
  
      let lastKnownScrollPosition = 0;
    
      document.addEventListener("scroll", () => {
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
    })
  return (
    <div id='nav' className='items-center  bg-[rgba(121,6,67,0.3)] sm:bg-[rgba(33,20,118,0.3)] w-full sm:w-[700px]  m-auto  rounded-full  sm:mt-2 p-4 sm:px-14 '>  
      <ul className='flex flex-wrap sm:flex-row  items-center opacity-100 justify-between pr-auto'>
         <a href='#Start'>
            <img src='Logo.png' className='w-[10vw] md:w-[50px]'/>
          </a>
         {links.map((link)=>(   
            <li key={link.hash} className=' ml-auto   text-2xl font-semibold'> 
              <a href={link.hash} className='hover:text-[#72abf1]'>{link.name}</a>
            </li>
            ))
          }        
      </ul>
    </div>
  )
}
function componentDidMount() {
  throw new Error('Function not implemented.')
}

