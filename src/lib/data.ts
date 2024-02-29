
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

   },

   {
      title: 'Portfolio',
      description: 'My portfolio website, which show You who I am',
      imageUrl: Portfolio,
   }
] as const


export const icons = [
{
   name: 'GitHub',
   hash: 'https://github.com/GogolProjects?tab=repositories',
   icon: GithubIcon,
},
{
   name: 'Travelit',
   hash: 'https://travelit.vercel.app/',
   icon: TravelitLogo,
},
{
   name: 'Portfolio',
   hash: '',
   icon: Logo,
},
{
   name: 'TravelitGitHub',
   hash: 'https://github.com/GogolProjects/travelit',
   icon: GithubIcon,
},
{
   name: 'PortfolioGitHub',
   hash: 'https://github.com/GogolProjects/portfolio',
   icon: GithubIcon
},
{
   name: 'Linkedin',
   hash: 'https://www.linkedin.com/in/agata-gog%C3%B3%C5%82-403976213/',
   icon: LinkedinIcon,
}
] as const
