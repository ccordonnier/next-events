"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { store } from "../store/redux";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}) {
  return (
    <Provider store={store}>
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
    </Provider>
  )
}
