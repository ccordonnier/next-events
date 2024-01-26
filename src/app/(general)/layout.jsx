
"use client"
import { Inter } from 'next/font/google'
import '../globals.css'
import Navbar from '../../components/navbar/navbar';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}) {
  return (
      <html lang="fr">
        <body>
          <Navbar></Navbar>
          {children}
        </body>
      </html>
  )
}
