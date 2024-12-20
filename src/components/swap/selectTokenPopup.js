import React, { useState } from 'react'
import Popup from 'antd-mobile/es/components/popup'
import { fireTypeItems, fireFilterItems } from '@/dictionary/trade'
const SelectTokenPopup = ({ showSelectTokenPopup, onClose, selectTokenItem, isToken = false, tokenList = [] }) => {

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
                            return <div key={index} onClick={() => selectTokenItem(item)} className='flex justify-between items-center w-full mb-1-0'>
                                <div className='flex justify-start items-center'>
                                    <div className='w-1-7 h-1-7 overflow-hidden rounded-full border border-primary-purple'>
                                        <img src={item.img}></img>
                                    </div>
                                    {!isToken && <div className='ml-1-0'>
                                        <div className='text-white'>{item.title}</div>
                                        {/* <div className='text-primary-60'>{item.content}</div> */}
                                    </div>}
                                    {isToken && <div className='text-white text-1-3 ml-1-3'>{item.title}</div>}
                                </div>
                                {
                                    !isToken && <div className='icon iconfont icon-right1 text-1-0'></div>
                                }
                            </div>
                        })}
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export default SelectTokenPopup
