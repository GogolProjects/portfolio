import About from '@/components/About'
import ContactForm from '@/components/ContactForm'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import SectionSeparator from '@/components/SectionSeparator'
import Skils from '@/components/Skils'
import Start from '@/components/Start'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-14 ">   
      <Header/>
      <Start/>
      <SectionSeparator/>
      <About />
      <SectionSeparator />
      <Skils />
      <SectionSeparator />
      <Projects />
      <SectionSeparator />
      <ContactForm />
      <SectionSeparator/>
      
    </main>
  )
}
