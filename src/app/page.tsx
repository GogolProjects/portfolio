import About from '@/components/About'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import SectionSeparator from '@/components/Section Separator'
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
    </main>
  )
}
