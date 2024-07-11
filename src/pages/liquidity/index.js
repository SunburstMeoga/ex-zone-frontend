import React, { useState } from 'react'
import TradeMenu from '@/components/TradeMenu'
import { liquidityTypeItems } from '@/dictionary/trade'
const Liquidity = () => {
    let [currentType, setCurrentType] = useState(1)
    let handleLiquidityType = ({ id }) => {
        setCurrentType(currentType = id)
    }
    return (
        <>
            <div className='pt-4-8 w-full bg-swap-banner bg-center bg-cover bg-no-repeat'>
                <div className='w-full flex flex-col justify-start items-center'>
                    <div className='w-full h-4-9'>
                        <TradeMenu></TradeMenu>
                    </div>
                    <div className='w-full flex flex-col justify-start items-center gradient-swap-module h-49-7 text-white'>
                        <div className='w-20-0 text-1-5 font-semibold mt-2-6'>Your Liquidity</div>
                        <div className='w-20-0 text-1-0 text-swap-second-title mb-1-1'>List of your liquidity position</div>
                        <div className='w-20-0 bg-swap-tabs rounded-lg p-0-5 flex justify-between items-center'>
                            {liquidityTypeItems.map((item, index) => {
                                return <div key={index} onClick={() => handleLiquidityType(item)} className={`flex justify-center items-center h-1-8 text-1-0 rounded px-1-4 ${currentType === item.id ? 'voting-clicked-button' : 'bg-voting-type'}`}>
                                    {item.title}
                                </div>
                            })}
                        </div>
                        <div className='w-20-0 flex flex-col justify-start items-center mt-1-8 text-white mb-1-5'>
                            <div className='w-full text-1-0 flex justify-start items-center mb-0-4'>
                                <div className='flex justify-center items-center bg-futures-word rounded-lg w-1-6 h-1-6 p-0-2'>
                                    <div className='w-full h-full rounded bg-primary-purple'></div>
                                </div>
                                <div className='ml-0-4'>Hide closed positions </div>
                            </div>
                            <div className='w-full rounded-2xl bg-liquidity-module h-8-9'></div>
                        </div>
                        <div className='w-20-0 h-3-3 bg-primary-purple rounded  text-white flex justify-center items-center'>
                            <div className='icon iconfont '>+</div>
                            <div className='text-1-2 ml-1-0'>Add Liquidity</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Liquidity
