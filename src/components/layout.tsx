import React from 'react'
import Footer from './footer'
import Navbar from './navbar'

export interface LayoutProps {
    children: React.ReactNode
}
const Layout = ({children}:LayoutProps) => {
  return (
    <>
    <Navbar/>
    <main>{children}</main>
    <Footer/>
    </>
  )
}

export default Layout