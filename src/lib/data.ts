
import Portfolio from '@/images/Portfolio.png'
import Travelit from '@/images/Travelit.png'
export const links = [


 {
    name: "About",
    hash: "#About",
 },

 {
    name: "Skils",
    hash: "#Skils",
 },
 {
   name: "Projects",
   hash: "#Projects",
 },
 {
   name: "Contact",
   hash: "#Contact",
 },
 
] as const

export const skils = [
   "HTML",  
   "CSS",  
   "TypeScript",
   "JavaScript",
   "React",
   "NextJs" ,
   "Tailwind",
   "Axios",
   "Prisma",
   "ZOD",
   "NextAuth",
  
] as const

export const projects = [
   {
      title: 'Traveit',
      description: 'This is description of my project',
      imageUrl: Travelit,

   },

   {
      title: 'Portfolio',
      description: 'This is sescription',
      imageUrl: Portfolio,
   }
] as const

