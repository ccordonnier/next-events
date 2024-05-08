"use client"
import '../globals.css'
import { Provider } from "react-redux";
import { store } from "../../store/redux";
import Sidebar from "../../components/sidebar/adminSidebar";
import Navbar from "../../components/navbar/adminNavbar";

export default function BackboardLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ maxHeight: "100vh", overflow: "scroll" }}>

        <div className='flex bg-slate-100'>
          <div style={{ width: "12vw" }}>
            <Sidebar></Sidebar>
          </div>
          <div style={{ width: "88vw" }}>
            <Navbar></Navbar>
            <div className='mt-20'>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
