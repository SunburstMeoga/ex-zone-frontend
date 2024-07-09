import React, { useState } from 'react'
import PageTabs from '@/components/pools/pageTabs';
import { liquidFAQItems } from '@/dictionary/pools'
const LiquidStaking = () => {
    let [liquidFAQItemsList, showItems] = useState(liquidFAQItems)
    let handleShowMore = ({ id }) => {
        showItems(liquidFAQItemsList =>
            liquidFAQItemsList.map(item =>
                item.id === id ? { ...item, showMore: !item.showMore } : item))
    }
    return (
        <>
            <div className='pt-5-0 bg-black' >
                <PageTabs></PageTabs>
                <div className='w-full bg-liquid-staking-module flex flex-col justify-start items-center'>
                    <div className='w-22-0 flex flex-col justify-start items-center text-white '>
                        <div className='w-full my-2-3'>
                            <div className='text-2-0 font-semibold'>Liquid Staking</div>
                            <div className='text-1-0'>Unlock liquidity while earning rewards</div>
                        </div>
                        <div className='w-full rounded-xl border border-swap-copy-icon px-1-0 py-1-2 mb-2-0'>
                            <div className='text-swap-copy-icon text-1-0 font-semibold mb-0-8'>
                                CHOOSE A PAIR TO LIQUID STAKE
                            </div>
                            <div className='rounded-xl border border-liquid-staking-border bg-primary-50 flex justify-between items-center p-1-4 w-full mb-1-2'>
                                <div className='text-1-2 font-semibold'>HAH / USDT</div>
                                <div className='icon iconfont icon-down2 text-1-2'></div>
                            </div>
                            <div className='w-full flex justify-between items-center text-1-0 font-semibold mb-0-8'>
                                <div className='text-voting-border '> Exchange Rate </div>
                                <div className=''>1 HAH = 0.959048 USDT</div>
                            </div>
                            <div className='w-full flex justify-between items-center text-1-0 font-semibold mb-1-8'>
                                <div className='text-voting-border '>  Est.APR </div>
                                <div className=''>-</div>
                            </div>
                            <div className='text-0-9 font-bold w-full h-3-0 flex justify-center items-center bg-primary-purple rounded-xl'>Proceed</div>
                        </div>
                        <div className='w-full rounded-xl border border-swap-copy-icon px-1-0 py-1-2 mb-2-0' >
                            <div className='text-swap-copy-icon text-1-0 font-semibold mb-0-8'>
                                WITHDRAW
                            </div>
                            <div className='w-full flex justify-between items-center text-1-0 font-semibold mb-0-2'>
                                <div className='text-voting-border '>  Staked Amount </div>
                                <div className=''>0.00 HAH</div>
                            </div>
                            <div className='w-full flex justify-end items-center text-1-0 font-semibold mb-0-8'>
                                <div className='text-voting-border text-0-7'> ~0.00 USD </div>
                            </div>
                            <div className='text-0-9 font-bold w-full h-3-0 flex justify-center items-center bg-primary-purple rounded-xl'>Connect Wallet</div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col justify-start items-center pb-2-0'>
                    <div className='w-22-0 flex flex-col justify-start items-center text-white '>
                        <div className='w-18-5 text-2-2 font-semibold my-1-0 '>FAQ</div>
                        <div className='w-full flex flex-col justify-start items-center'>
                            {liquidFAQItemsList.map((item, index) => {
                                return <div key={index} className='text-white w-full p-1-8 text-1-2 bg-swap-copy-icon rounded-xl mb-1-0'>
                                    <div className='font-bold' onClick={() => handleShowMore(item)}>{item.title}</div>
                                    {item.showMore && <div className='font-medium mt-2-5'>{item.content}</div>}
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default LiquidStaking
