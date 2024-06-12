import React from 'react'
import Image from 'next/image'
const Layout = ({ children }) => {
    return (
        <div>
            <div className='w-full p-1-5 flex justify-between items-center sticky top-0-1 bg-black'>
                <div className='w-6-9'>
                    <img src='/images/logo.png' alt='logo' />
                </div>
                <div className='icon iconfont icon-menu text-white' style={{fontSize: '1.3rem'}}></div>
            </div>
            <div className='text min-h-screen w-screen border border-red-500'>
                {children}
            </div>
            <div className=''>this is footer</div>
        </div>
    )
}

export default Layout
