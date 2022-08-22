import React from 'react'
import { LayoutProps } from './layout'

const Sidebar = ({children}:LayoutProps) => {
  return (
    <div className='flex-row flex'>
    <p>the sidebar</p>
        <div>{children}</div>
    </div>
  )
}

export default Sidebar