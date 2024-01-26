"use client"
import '../globals.css'
import { Provider } from "react-redux";
import { store } from "../../store/redux";
import Sidebar from "../../components/sidebar/adminSidebar";
import Navbar from "../../components/navbar/adminNavbar";

export default function BackboardLayout({children}) {
  return (
    <html lang="fr">
      <body style={{maxHeight:"100vh", overflow:"scroll"}}>
        <Navbar></Navbar>
        <div className='flex'>
            <div style={{width:"12vw"}}>
                <Sidebar></Sidebar>
            </div>
            <div className='bg-slate-100 mt-16' style={{width:"88vw" }}>
                {children}
            </div>
        </div>
      </body>
    </html>
  )
}
