import { Poppins } from 'next/font/google'
import './globals.css'
import AppBar from '@/components/AppBar'
import Footer from '@/components/Footer'

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
