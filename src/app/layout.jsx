'use client'
import { Poppins } from 'next/font/google'

import '@/app/globals.css'
import { AppBar, Footer } from '@/components'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AppBar/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
