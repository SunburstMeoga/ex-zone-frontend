import React, { useState } from 'react'
import { strykeInfoItems, transTypeItems } from '@/dictionary/pools'
const Stryke = () => {
    let [transType, setTransType] = useState(1)
    let handleTransTypeItem = ({ id }) => {
        setTransType(transType = id)
    }
    return (
        <>
            <div className='pt-5-0 bg-black text-white'>
                <div className='flex flex-col justify-start items-center w-full'>
                    <div className='w-22-0 flex justify-between items-center mb-1-0'>
                        <div className='flex justify-start items-center'>
                            <div className='flex justify-start items-center'>
                                <div className='w-1-6 h-1-6 rounded-full bg-gray-700'></div>
                                <div className='w-1-7 h-1-7 rounded-full bg-gray-700 -ml-0-7 border border-black'></div>
                            </div>
                            <div className='text-1-2 font-medium ml-1-0'>USDT</div>
                            <div className='icon iconfont icon-down ml-0-8'></div>
                        </div>
                    </div>
                    <div className='w-22-0 flex flex-col justify-start items-center pb-2-0'>
                        {strykeInfoItems.map((item, index) => {
                            return <div key={index} className='flex justify-between items-center text-voting-border text-0-9 py-0-4 border-b border-dashed border-voting-border w-full'>
                                <div >{item.title}</div>
                                <div >{item.content}</div>
                            </div>
                        })}
                    </div>
                    <div className='w-full mt-0-7 bg-syrup-module pt-1-0 flex flex-col justify-start items-center h-22-0'>
                        this is chart
                    </div>
                    <div className='w-full flex flex-col justify-start items-center bg-white text-swap-border'>
                        <div className='px-1-0 w-full my-1-0 flex justify-between items-center'>
                            <div className='flex justify-start items-center rounded-lg overflow-hidden bg-futures-tabs text-gray-500'>
                                {transTypeItems.map((item, index) => {
                                    return <div onClick={() => handleTransTypeItem(item)} className={`w-4-2 h-2-2 text-0-9 flex justify-center items-center ${item.id === transType ? 'bg-primary-purple text-white' : ''}`} key={index}>{item.title}</div>
                                })}
                            </div>
                            <div className='text-swap-border text-0-7'>Powered by</div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Stryke
