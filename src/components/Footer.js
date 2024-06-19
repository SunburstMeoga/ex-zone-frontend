import React from 'react'
import { socialMediaItems, officialItems } from '@/dictionary/footer'
const Footer = () => {
    return (
        <div className='bg-black w-full h-32-0 '>
            <div className='w-full flex flex-col gradient-footer justify-start items-center'>
                <div className='w-22-0 pt-2-1 mb-2-4'>
                    <div className='w-9-0'>
                        <img src='/images/logo.png' alt=''></img>
                    </div>
                </div>
                <div className='w-22-0 flex flex-col justify-start items-center'>
                    {officialItems.map((item, index) => {
                        return <div key={index} className='flex justify-between items-center w-full mb-1-7 text-purple62 text-1-2'>
                            <div className=''>{item.title}</div>
                            <div className='flex justify-center items-center'>
                                <div className='icon iconfont icon-right' style={{fontSize: '1.4rem'}}></div>
                            </div>
                        </div>
                    })}
                </div>
                <div className='w-22-0 flex justify-between items-center'>
                    {socialMediaItems.map((item, index) => {
                        return <div key={index} className='flex justify-center items-center text-purple62'>
                            <div className={['icon', 'iconfont', item.icon].join(" ")} style={{fontSize: '2rem'}}></div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Footer
