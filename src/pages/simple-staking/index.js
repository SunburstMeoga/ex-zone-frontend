import React, { useState } from 'react'
import PageTabs from '@/components/pools/pageTabs';

import { simpleStakingItems } from '@/dictionary/pools'
const SimpleStaking = () => {
    let [activeState, setActiveState] = useState(1)
    let [simpleStakingItemsList, toggleItemShow] = useState(simpleStakingItems)
    let handleState = ({ id }) => {
        console.log(id)
        setActiveState(activeState = id)
    }
    let handleShowMore = ({ id }) => {
        console.log(id)
        toggleItemShow(simpleStakingItemsList =>
            simpleStakingItemsList.map(item =>
                item.id === id ? { ...item, showMore: !item.showMore } : item))
    }
    return (
        <>
            <div className='pt-5-0 bg-black' >
                <PageTabs></PageTabs>
                <div className='w-full bg-phone-simple-staking-one bg-center bg-no-repeat bg-contain h-auto pt-4-8'>
                    <div className='flex flex-col justify-start items-center'>
                        <div className='text-white text-3-0 font-bold text-left mb-0-7 w-21-4'>Simple Staking</div>
                        <div className='text-trading-yellow text-left line-height-point-122 text-2-0 font-semibold mb-6-4 voting-text-shadow'> Single-Sided Simple  <br></br> Earn Staking</div>

                    </div>
                </div>
                <div className='w-full flex justify-start flex-col items-center -mt-1-0'>

                    <div className='bg-syrup-module rounded-t-3xl w-full h-auto'>
                        <div className='w-full flex flex-col justify-start items-center pt-0-6'>
                            {simpleStakingItemsList.map((item, index) => {
                                return <div key={index} className='border-b border-voting-border py-1-0 border-dashed w-21-8' onClick={() => handleShowMore(item)}>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex justify-start items-start'>
                                            <div className='flex justify-start items-start'>
                                                <div className='w-1-7 h-1-7 rounded-full bg-gray-500'></div>
                                            </div>
                                            <div className='ml-0-7 text-white h-2-6'>
                                                <div className='text-0-7 font-semibold'>{item.title}</div>
                                                <div className='font-semibold text-1-2'>HAH</div>
                                            </div>
                                        </div>
                                        <div className='flex justify-start items-start'>
                                            <div className='ml-0-7 text-white h-2-6'>
                                                <div className='text-0-7 font-semibold'>APR</div>
                                                <div className='font-bold  text-menu-green flex justify-start items-center'>
                                                    <div className='text-0-9'>{item.aprPoint}</div>
                                                    <div className='icon iconfont icon-jisuanqi ml-0-5'></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='icon iconfont icon-down2 text-0-6 text-white'></div>
                                    </div>
                                    {item.showMore && <div className='text-white mt-1-0'>
                                        <div className='font-semibold text-0-9 mb-0-2'>
                                            Total Staked:
                                        </div>
                                        <div className='flex justify-between items-baseline mb-1-5'>
                                            <div className='text-1-5 font-semibold'>{item.totalStaked} HAH</div>
                                            <div className='text-0-9'>{item.totalUSD} USD</div>
                                        </div>
                                        <div className='w-full flex justify-between items-center text-white'>
                                            {item.detailsItems.map((_item, _index) => {
                                                return <div key={_index} className='border border-swap-copy-icon rounded-xl p-0-4 w-6-7'>
                                                    <div className='text-0-7'>{_item.title}</div>
                                                    <div className='text-0-9 text-menu-green'>Up to</div>
                                                    <div className='text-1-3 font-bold'>{_item.upto}</div>
                                                    <div className='text-0-7 line-through'>{_item.preUpto}</div>
                                                    <div className='w-full flex justify-end items-center'>
                                                        <div className='flex justify-center items-center w-1-7 h-1-7 rounded-full bg-purple31'>
                                                            <div className='text-menu-green icon iconfont icon-jisuanqi text-0-9'></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            })}
                                        </div>
                                        <div className='font-semibold text-0-9 mt-1-5 mb-1-0'>
                                            START HAH
                                        </div>
                                        <div className='text-0-9 font-bold w-full h-3-0 flex justify-center items-center bg-primary-purple rounded-xl'>Connect Wallet</div>
                                    </div>
                                    }
                                </div>
                            })}
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}

export default SimpleStaking
