import React from 'react'
import Footer from './Footer'
import Menu from './Menu'
const Layout = ({ children }) => {
    return (
        <div className='w-full'>
            <div className='bg-black'>
                <Menu></Menu>
            </div>
            <div className='min-h-full'>
                {children}
            </div>
            <div className=''>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Layout
