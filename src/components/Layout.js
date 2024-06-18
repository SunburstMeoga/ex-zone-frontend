import React from 'react'
import Footer from './Footer'
import Menu from './Menu'
const Layout = ({ children }) => {
    return (
        <div>
            <div className=''>
                <Menu></Menu>
            </div>
            <div className='text min-h-screen w-screen '>
                {children}
            </div>
            <div className=''>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Layout
