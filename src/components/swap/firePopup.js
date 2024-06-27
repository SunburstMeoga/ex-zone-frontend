import React, { useState } from 'react'
import Popup from 'antd-mobile/es/components/popup'
import { fireTypeItems, fireFilterItems, tokenList } from '@/dictionary/trade'
const FirePopup = ({ showFirePopup, onClose }) => {
    let [currentType, setCurrentType] = useState(1)
    let [currentFilter, setCurrentFilter] = useState(1)
    let handleType = ({ id }) => {
        setCurrentType(currentType = id)
    }
    let handleFilter = ({ id }) => {
        setCurrentFilter(currentFilter = id)
    }
    return (

        <div>
            <Popup
                visible={showFirePopup}
                onClose={onClose}
                bodyStyle={{ minHeight: '70vh', background: 'none' }}
            >
                <div className='swap-popup-gradient rounded-t-3xl flex flex-col justify-start items-center text-white' style={{ minHeight: '70vh' }}>
                    <div className='w-22-2 flex justify-end items-center text-swap-second-title pt-1-0'>
                        <div className='icon iconfont icon-close' style={{ fontSize: '1.3rem' }}></div>
                    </div>
                    <div className='w-22-2 flex justify-between items-center pt-1-3 mb-1-0'>
                        {fireTypeItems.map((item, index) => {
                            return <div key={index} onClick={() => handleType(item)} className={`w-10-9 h-3-4 rounded-lg text-white font-semibold text-1-0  flex justify-center items-center  ${currentType === item.id ? 'voting-clicked-button' : 'bg-swap-fire-type'}`}>
                                {item.title}
                            </div>
                        })}
                    </div>
                    <div className='w-22-2 text-1-5 font-semibold mb-1-0'>
                        TOKEN NAME
                    </div>
                    <div className='w-22-2 flex justify-start items-center'>
                        {fireFilterItems.map((item, index) => {
                            return <div key={index} onClick={() => handleFilter(item)} className={`flex justify-center items-center font-semibold text-1-0 w-8-2 h-2-2 rounded-lg ${currentFilter === item.id ? 'bg-primary-purple' : 'bg-swap-fire-type'} ${item.id === 2 ? 'ml-0-8' : ''}`}>
                                <div className='font-bold'>{item.title}</div>
                                <div className={`text-menu-green ml-2-0 icon iconfont icon-exchange rotate-90`}></div>
                            </div>
                        })}
                    </div>
                    <div className='w-22-2 flex flex-col justify-start items-center'>
                        {tokenList.map((item, index) => {
                            return <div className={`border-b border-dashed border-voting-border py-0-6 flex justify-start items-start w-full`} key={index}>
                                <div className='w-1-0 h-1-0 rounded-full bg-gray-500 '></div>
                                <div className='flex-1 ml-0-4 '>
                                    <div className='text-0-9 font-semibold mb-0-2'>{item.title}</div>
                                    <div className='flex justify-between items-center text-0-9 font-light'>
                                        <div className=''>{item.price}</div>
                                        <div className='text-menu-green flex justify-start items-center'>
                                            <div className='icon iconfont icon-up'></div>
                                            <div className='ml-0-2 mt-0-3'>{item.amp}</div>
                                        </div>
                                        <div className=''>
                                            {item.type}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className='text-white flex justify-center items-baseline mt-1-6'>
                        <div className='flex justify-center items-center w-1-7 h-1-7 rounded-full bg-primary-purple'>
                            <div className='icon iconfont icon-left-arrow'></div>
                        </div>
                        <div className='flex justify-center items-center px-1-0 text-1-2'>
                            Page 4 of 4
                        </div>
                        <div className='flex justify-center items-center w-1-7 h-1-7 rounded-full bg-primary-purple'>
                            <div className='icon iconfont icon-left-arrow rotate-180 '></div>
                        </div>
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export default FirePopup
