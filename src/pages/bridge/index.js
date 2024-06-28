import React, { useState } from 'react'
import TradeMenu from '@/components/TradeMenu'
import { liquidityTokenInfoItems } from '@/dictionary/trade'
const Bridge = () => {

    let handleShowMore = ({ id }) => {
        console.log(id)
        setTokenPairList(tokenPairList =>
            tokenPairList.map(item =>
                item.id === id ? { ...item, showMore: !item.showMore } : item))
    }
    return (
        <>
            <div className='pt-4-8 w-full bg-swap-banner bg-center bg-cover bg-no-repeat'>
                <div className='w-full flex flex-col justify-start items-center'>
                    <div className='w-full h-4-9'>
                        <TradeMenu></TradeMenu>
                    </div>
                    <div className='w-full flex flex-col justify-start items-center gradient-swap-module h-auto text-white min-h-screen'>
                        <div className='flex w-full justify-center items-center'>
                            <div className='w-22-0 px-1-2 py-1-0 border-warning-border bg-warning-module text-warning-word flex justify-start items-center mt-2-3 mb-2-3'>
                                <div className='w-2-6'>
                                    <img className='' src='/images/phone/warning.png'></img>
                                </div>
                                <div className='ml-1-0'>Outbound transfers from Polygon zkEVM are subject to a 7 days delay for block confirmations.</div>
                            </div>
                        </div>
                        <div className='w-22-0 text-right text-0-7 mb-0-8'>Connect</div>
                        <div className='flex justify-start items-center flex-col text-white w-full bg-bridge-token-middle'>
                            <div className='w-full bridge-exchange-top px-1-4 py-1-5'>
                                <div className='flex justify-between items-center border-b border-swap-border mb-1-5'>
                                    <div className='flex justify-start items-center'>
                                        <div className='w-1-6 h-1-6 rounded-full bg-primary-purple'></div>
                                        <div className='ml-0-4 flex flex-col justify-start items-start'>
                                            <div className='text-0-7 mb-0-1'>Token</div>
                                            <div className='text-1-0 font-bold mb-0-1'> HAH</div>
                                        </div>
                                        <div className='ml-0-4 icon iconfont icon-down text-swap-copy-icon'></div>
                                    </div>
                                    <div className='flex justify-start items-center'>
                                        <div className='w-1-6 h-1-6 rounded-full bg-primary-purple'></div>
                                        <div className='ml-0-4 flex flex-col justify-start items-start'>
                                            <div className='text-0-7 mb-0-1'>Token</div>
                                            <div className='text-1-0 font-bold mb-0-1'> HAH</div>
                                        </div>
                                        <div className='ml-0-4 icon iconfont icon-down text-swap-copy-icon'></div>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex justify-start items-center'>
                                        <div className='text-white text-1-5 font-semibold'>21.3</div>
                                        <div className='bg-primary-purple text-white rounded-full font-semibold text-0-7 w-2-7 h-1-1 ml-1-0 flex justify-center items-center'>Max</div>
                                    </div>
                                    <div className='flex justify-start items-center'>
                                        <div className='flex flex-col justify-start items-start'>
                                            <div className='text-0-7 mb-0-1'>Balance</div>
                                            <div className='text-1-0 font-bold mb-0-1'> --</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='h-6-0 flex justify-center items-center'>
                                <div className='icon iconfont icon-exchange  text-menu-green rotate-90' style={{ fontSize: '1.8rem' }}></div>
                            </div>

                            <div className='w-full bridge-exchange-bottom px-1-4 py-1-5'>
                                <div className='flex justify-between items-center border-b border-swap-border mb-1-5'>
                                    <div className='flex justify-start items-center'>
                                        <div className='w-1-6 h-1-6 rounded-full bg-primary-purple'></div>
                                        <div className='ml-0-4 flex flex-col justify-start items-start'>
                                            <div className='text-0-7 mb-0-1'>Token</div>
                                            <div className='text-1-0 font-bold mb-0-1'> HAH</div>
                                        </div>
                                        <div className='ml-0-4 icon iconfont icon-down text-swap-copy-icon'></div>
                                    </div>
                                    <div className='flex justify-start items-center'>
                                        <div className='w-1-6 h-1-6 rounded-full bg-primary-purple'></div>
                                        <div className='ml-0-4 flex flex-col justify-start items-start'>
                                            <div className='text-0-7 mb-0-1'>Token</div>
                                            <div className='text-1-0 font-bold mb-0-1'> HAH</div>
                                        </div>
                                        <div className='ml-0-4 icon iconfont icon-down text-swap-copy-icon'></div>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex justify-start items-center'>
                                        <div className='text-white text-1-5 font-semibold'>21.3</div>
                                        <div className='bg-primary-purple text-white rounded-full font-semibold text-0-7 w-2-7 h-1-1 ml-1-0 flex justify-center items-center'>Max</div>
                                    </div>
                                    <div className='flex justify-start items-center'>
                                        <div className='flex flex-col justify-start items-start'>
                                            <div className='text-0-7 mb-0-1'>Balance</div>
                                            <div className='text-1-0 font-bold mb-0-1'> --</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-21-8 flex flex-col justify-start items-center py-1-7'>
                            {liquidityTokenInfoItems.map((item, index) => {
                                return <div key={index} className='w-full h-2-4 flex justify-between items-center text-voting-border'>
                                    <div className='text-0-9'>{item.title}</div>
                                    <div className={`${item.id === 2 || item.id === 4 ? 'text-menu-green' : ''}`}>{item.content}</div>
                                </div>
                            })}
                        </div>
                        <div className='w-21-8 h-4-7 bg-bridge-disable-button text-bridge-disable-word flex justify-center items-center text-1-5 font-medium mb-2-0 rounded-xl'>
                            Select network
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Bridge
