import type { Metadata } from 'next'
import { Arima} from 'next/font/google'
import '@/style/globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'

const arima = Arima({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agata Gogół portfolio',
  description: 'This is my portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"
    className={cn ('scroll-smooth', arima.className)}>
      <body className=' text-slate-200 sm:bg-gradient-to-r bg-gradient-to-b  from-[#790643f0]  sm:from-10% sm:via-20% from-10% via-25% via-[#6f9af7]  to-[#0b219d]'>
          
        <span id='Start'/>
        <div className='sticky top-0 z-10'>
          <Navbar />
        </div>
          {children}
        </body>
    </html>
  )
}
