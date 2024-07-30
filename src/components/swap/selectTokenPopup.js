import React, { useState } from 'react'
import Popup from 'antd-mobile/es/components/popup'
import { fireTypeItems, fireFilterItems, tokenList } from '@/dictionary/trade'
const FirePopup = ({ showSelectTokenPopup, onClose }) => {
    let tokenList = [{ title: 'BNB', content: 'Binance Chain Native Token' }, { title: 'BNB', content: 'Binance Chain Native Token' }, { title: 'BNB', content: 'Binance Chain Native Token' }, { title: 'BNB', content: 'Binance Chain Native Token' }]
    return (

        <div>
            <Popup
                visible={showSelectTokenPopup}
                onClose={onClose}
                bodyStyle={{ minHeight: '70vh', background: 'none' }}
            >
                <div className='swap-popup-gradient rounded-t-3xl flex flex-col justify-start items-center text-white' style={{ minHeight: '70vh' }}>
                    <div className='w-22-2 flex justify-between items-center text-white pt-1-0 lg:w-32-6 mb-2-0'>
                        <div className='text-1-5'>Select a Token</div>
                        <div className='icon iconfont icon-close text-2-0' onClick={() => onClose()} ></div>
                    </div>
                    {/* <div className='w-22-0 flex justify-start items-center'>
                        <div className='w-0-4 h-0-4 bg-white'></div>
                        <div className='text-1-0 ml-0-4'>Common Token</div>
                    </div> */}
                    <div className='w-22-2 overflow-y-scroll'>
                        {tokenList.map((item, index) => {
                            return <div key={index} className='flex justify-between items-center w-full mb-1-0'>
                                <div className='flex justify-start items-center'>
                                    <div className='w-1-7 h-1-7 overflow-hidden rounded-full'>
                                        <img className='https://assets.coingecko.com/coins/images/36402/thumb/1000080738.png'></img>
                                    </div>
                                    <div className='ml-1-0'>
                                        <div className='text-white'>{item.title}</div>
                                        <div className='text-primary-60'>{item.content}</div>
                                    </div>
                                </div>
                                <div className='icon iconfont icon-right1 text-1-0'></div>
                            </div>
                        })}
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export default FirePopup
