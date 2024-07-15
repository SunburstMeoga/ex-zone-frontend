import React, { useState } from 'react'
import { pageMenuItems } from '@/dictionary/menu'
const Menu = () => {
    let [showMenu, changeShowMenu] = useState(false)
    let handleMenu = () => {
        changeShowMenu(showMenu = !showMenu)
    }
    return (
        <div className='w-full  flex flex-col justify-center items-center fixed -top-0-1 z-30'>
            <div className='w-22-0 flex justify-between items-center h-4-3 relative z-20 lg:w-58-2 lg:py-2-6 xl:w-full xl:py-2-6'>
                <div className='flex justify-start items-center'>
                    <div className='w-6-9 lg:w-12-4 xl:ml-2-9'>
                        <img src='/images/logo.png' alt='logo' />
                    </div>
                    <div className='xl:ml-3-5 hidden xl:flex justify-start items-center '>
                        {pageMenuItems.map((item, index) => {
                            return <div key={index} className='text-white text-1-2 ml-4-2'>{item.title} </div>
                        })}
                    </div>
                </div>
                <div className='icon iconfont icon-menu text-white text-1-6 lg:hidden' onClick={() => { handleMenu() }}></div>
            </div>
            {showMenu && <div className={`w-full min-h-screen flex flex-col justify-start items-center mt-1-0 relative z-10 `} >
                <div className={`w-22-0 ${showMenu ? 'animate__animated animate__slideInDown' : 'animate__slideOutUp'}`}>
                    {pageMenuItems.map((item, index) => {
                        return <div key={index} className='w-full  rounded-xl bg-primary-purple text-white text-1-3  mb-0-8 overflow-hidden'>
                            <div className='flex justify-between items-center h-3-3'>
                                <div className='flex justify-start items-center'>
                                    <div className='ml-1-5 w-0-3 h-0-3 bg-white'></div>
                                    <div className='ml-1-0'>{item.title}</div>
                                </div>
                                {item.hasChild && <div className='flex justify-center items-center mr-1-5'>
                                    <div className='icon iconfont icon-down'></div>
                                </div>}
                            </div>
                            {item.hasChild && item.showChild && <div className='w-22-0 gradient-menu-item flex flex-col justify-start items-center '>
                                {item.children.map((_item, _index) => {
                                    return <div key={_index} className='flex justify-center items-center bg-menu-green w-full h-3-5'>
                                        <div className='w-12-6 text-white font-light text-1-0'>{_item.title}</div>
                                    </div>
                                })}
                            </div>}
                        </div>
                    })}
                </div>
            </div>}
        </div>
    )
}

export default Menu
