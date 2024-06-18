import React from 'react'
import Image from 'next/image'
import Footer from './Footer'
const Layout = ({ children }) => {
    return (
        <div>
            <div className='w-full py-1-5 flex justify-center items-center fixed top-0-1 bg-black z-10'>
                <div className='w-22-0 flex justify-between items-center'>
                <div className='w-6-9'>
                    <img src='/images/logo.png' alt='logo' />
                </div>
                <div className='icon iconfont icon-menu text-white' style={{fontSize: '1.3rem'}}></div>
                </div>
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
