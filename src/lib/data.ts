
import Portfolio from '@/images/Portfolio.png'
import Travelit from '@/images/Travelit.png'
import GithubIcon  from '@/images/GitHubIcon.png'
import LinkedinIcon from '@/images/LinkedinIcon.png'
import TravelitLogo from '@/images/TravelitLogo.jpg'
import Logo from '@/images/Logo.png'

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
      githubIcon: GithubIcon,
      github: 'https://github.com/GogolProjects/travelit',
      urlIcon: TravelitLogo,
      url: 'https://travelit.vercel.app/',

   },

   {
      title: 'Portfolio',
      description: 'My portfolio website, which show You who I am',
      imageUrl: Portfolio,
      githubIcon: GithubIcon,
      github: 'https://github.com/GogolProjects/portfolio',
      urlIcon: Logo,
      url: '',

      
   }
] as const

