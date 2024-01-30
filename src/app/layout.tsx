import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/style/globals.css'
import { cn } from '../lib/utlis'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

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
    className={cn ('scroll-smooth', inter.className)}>
      <body className=' text-slate-200 sm:bg-gradient-to-r bg-gradient-to-b  from-[#790643f0]  sm:from-10% sm:via-20% from-10% via-25% via-blue-300  to-[#051468]'>
          
        <span id='Start'/>
        <div className='sticky top-0 z-10'>
          <Navbar />
        </div>
        {children}
        </body>
    </html>
  )
}
