
import Portfolio from '@/images/Portfolio.png'
import Travelit from '@/images/Travelit.png'
import GithubIcon  from '@/images/GitHubIcon.png'
import TravelitLogo from '@/images/TravelitLogo.jpg'
import Logo from '@/images/Logo.png'
import Travelit_2 from '@/images/Travelit_2.png'
import Portfolio_2 from '@/images/Portfolio_2.png'
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
      description: 'My first full-stack projects. Traveller forum, where You can share Your travel hacks and expiriences. You can post, subscribe, coemment and more....',
      imageUrl: Travelit,
      imageUrl_2: Travelit_2,
      githubIcon: GithubIcon,
      github: 'https://github.com/GogolProjects/travelit',
      urlIcon: TravelitLogo,
      url: 'https://travelit.vercel.app/',
      tags: ["Next.js", "React", "Typescript", "Prisma", "Tailwind", "NextAuth", "Shadcn", "zod", "Axios"],

   },

   {
      title: 'Portfolio',
      description: 'My portfolio website, which You can know me a litlle bit better...',
      imageUrl: Portfolio,
      imageUrl_2: Portfolio_2,
      githubIcon: GithubIcon,
      github: 'https://github.com/GogolProjects/portfolio',
      urlIcon: Logo,
      url: '#Start',
      tags: ["Next.js", "React", "Typescipt", "Tailwind", ]

      
   }
] as const

