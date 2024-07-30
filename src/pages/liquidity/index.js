import React, { useState } from 'react'
import TradeMenu from '@/components/TradeMenu'
import { useRouter } from 'next/router';

import { liquidityTypeItems } from '@/dictionary/trade'
const Liquidity = () => {
    let [currentType, setCurrentType] = useState(1)
    const router = useRouter();
    let handleLiquidityType = ({ id }) => {
        setCurrentType(currentType = id)
    }
    return (
        <>
            <div className='pt-4-8 lg:pt-6-9 bg-black'>
                <div className='w-full flex flex-col justify-start items-center relative'>
                    <div className='w-full bg-swap-banner bg-center bg-cover bg-no-repeat absolute top-auto left-auto h-19-3 z-10'></div>
                    <div className='w-full py-1-0 relative z-10'>
                        <TradeMenu defaultIndex={1}></TradeMenu>
                    </div>
                    <div className='w-full flex flex-col justify-start items-center gradient-swap-module h-auto pb-8-0 backdrop-blur-xl text-white lg:min-h-screen relative z-10'>
                        <div className='lg:flex lg:justify-between lg:items-center lg:w-57-3'>
                            <div>
                                <div className='w-20-0 text-1-5 font-semibold mt-2-6'>Your Liquidity</div>
                                <div className='w-20-0 text-1-0 text-swap-second-title mb-1-1'>List of your liquidity position</div>
                            </div>
                            <div className='w-20-0 bg-swap-tabs rounded-lg p-0-5 flex justify-between items-center'>
                                {liquidityTypeItems.map((item, index) => {
                                    return <div key={index} onClick={() => handleLiquidityType(item)} className={`flex justify-center items-center h-1-8 text-1-0 rounded px-1-4 ${currentType === item.id ? 'voting-clicked-button' : 'bg-voting-type'}`}>
                                        {item.title}
                                    </div>
                                })}
                            </div>
                        </div>
                        <div className='w-20-0 flex flex-col justify-start items-center mt-1-8 text-white mb-1-5 lg:w-57-3 lg:mb-10-2'>
                            <div className='w-full text-1-0 flex justify-start items-center mb-0-4 lg:mb-1-0'>
                                <div className='flex justify-center items-center bg-futures-word rounded-lg w-1-6 h-1-6 p-0-2 '>
                                    <div className='w-full h-full rounded bg-primary-purple'></div>
                                </div>
                                <div className='ml-0-4 lg:text-1-0 lg:font-bold'>Hide closed positions </div>
                            </div>
                            <div className='w-full rounded-2xl bg-liquidity-module h-8-9'></div>
                        </div>
                        <div className='w-20-0 h-3-3 bg-primary-purple rounded  text-white flex justify-center items-center lg:mb-8-6'>
                            <div className='icon iconfont text-2-0 -mt-0-6' >+</div>
                            <div className='text-1-2 ml-1-0' onClick={() => { router.push('/add') }}>Add Liquidity</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Liquidity
