import React, { useState } from 'react'
import TradeMenu from '@/components/TradeMenu'
import { swapStateItems, swapOperateItems } from '@/dictionary/trade'
const Trade = () => {
    let [currentState, setCurrentState] = useState(1)
    let [operateItems, setOperateItems] = useState(1)
    let handleSwapState = ({ id }) => {
        setCurrentState(currentState = id)
    }
    let handleSwapOperate = ({ id }) => {
        setOperateItems(operateItems = id)
    }
    return (
        <div className='pt-4-8 w-full bg-swap-banner bg-center bg-cover bg-no-repeat'>
            <div className='w-full flex flex-col justify-start items-center'>
                <div className='w-full h-4-9'>
                    <TradeMenu></TradeMenu>
                </div>
                <div className='w-full flex flex-col justify-start items-center gradient-swap-module h-49-7 text-white'>
                    <div className='w-20-0 bg-swap-tabs rounded-lg p-0-5 flex justify-between items-center my-1-5'>
                        {swapStateItems.map((item, index) => {
                            return <div key={index} onClick={() => handleSwapState(item)} className={`flex justify-center items-center  text-1-0 rounded w-5-6 ${currentState === item.id ? 'voting-clicked-button' : 'bg-voting-type'}`}>
                                {item.title}
                            </div>
                        })}
                    </div>
                    <div className='w-20-0 text-1-5 font-semibold'>Swap</div>
                    <div className='w-20-0 text-1-0 text-swap-second-title mb-1-1'>Trade tokens in an instant</div>
                    <div className='w-20-0 flex justify-between items-center text-menu-green mb-1-0'>
                        {swapOperateItems.map((item, index) => {
                            return <div className='flex justify-center items-center' onClick={() => handleSwapOperate(item)}>
                                <div key={index} className={`icon iconfont ${item.icon} ${operateItems === item.id ? 'text-white' : ''}`} style={{ fontSize: '1.5rem' }}></div>
                            </div>
                        })}
                    </div>
                    <div className='w-20-0 mb-2-0'>
                        <div className='bg-swap-card-module flex flex-col justify-between items-center border-2 border-swap-border rounded-2xl p-0-8 w-20-0 h-8-0'>
                            <div className='flex justify-between items-center w-full'>
                                <div className='flex justify-start items-center'>
                                    <div className='rounded-full w-2-2 h-2-2 bg-swap-copy-icon'></div>
                                    <div className='text-1-5 font-light ml-1-0'>HAH</div>
                                    <div className='ml-2-0 icon iconfont icon-down2' style={{ fontSize: '1rem' }}></div>
                                </div>
                                <div className='text-swap-copy-icon icon iconfont icon-copy' style={{ fontSize: '1.4rem' }}></div>
                            </div>
                            <div className='w-full'>
                                <input className='bg-transparent  h-3-0 w-full '></input>
                            </div>
                        </div>
                        <div className='w-full flex justify-center items-center my-0-1'>
                            <div className='text-menu-green font-bold icon iconfont icon-down3' style={{ fontSize: '2rem' }}></div>
                        </div>
                        <div className='bg-swap-card-module flex flex-col justify-between items-center border-2 border-swap-border rounded-2xl p-0-8 w-20-0 h-8-0'>
                            <div className='flex justify-between items-center w-full'>
                                <div className='flex justify-start items-center'>
                                    <div className='rounded-full w-2-2 h-2-2 bg-swap-copy-icon'></div>
                                    <div className='text-1-5 font-light ml-1-0'>HAH</div>
                                    <div className='ml-2-0 icon iconfont icon-down2' style={{ fontSize: '1rem' }}></div>
                                </div>
                                <div className='text-swap-copy-icon icon iconfont icon-copy' style={{ fontSize: '1.4rem' }}></div>
                            </div>
                            <div className='w-full'>
                                <input className='bg-transparent  h-3-0 w-full '></input>
                            </div>
                        </div>
                    </div>
                    <div className='w-20-0 flex justify-between items-center mb-1-0'>
                        <div className='flex justify-start items-center'>
                            <div className='text-1-0 text-swap-second-title mr-1-0'>Slippage Tolerance</div>
                            <div className='text-menu-green icon iconfont icon-edit' style={{ fontSize: '1.4rem' }}> </div>
                        </div>
                        <div className='font-bold text-1-5 text-menu-green'>0.5%</div>
                    </div>
                    <div className='w-20-0 h-4-7 bg-primary-purple flex justify-center items-center text-white font-light text-1-5 rounded-xl'>
                        Connect Wallet
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Trade
