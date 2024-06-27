import React, { useState } from 'react'
import TradeMenu from '@/components/TradeMenu'
import { liquidityOperateItems, tokenPair } from '@/dictionary/trade'
const Add = () => {
    let [tokenPairList, setTokenPairList] = useState(tokenPair)
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
                        <div className='w-20-0 text-1-5 font-semibold mt-2-6'>Your Liquidity</div>
                        <div className='w-20-0 text-1-0 text-swap-second-title mb-1-1 flex justify-start items-center'>
                            <div className=''>APR (with farming)</div>
                            <div className='text-menu-green underline ml-1-6'>10.03%</div>
                        </div>
                        <div className='flex flex-col justify-start items-center w-full mb-1-6'>
                            <div className='flex justify-around items-center w-20-0  pb-1-3 border-b border-voting-border'>
                                {liquidityOperateItems.map((item, index) => {
                                    return <div key={index} className={`icon iconfont ${item.icon}`} style={{ fontSize: '1.4rem' }} />
                                })}
                            </div>
                        </div>
                        <div className='w-20-0 text-white text-1-0 mb-0-9'>
                            CHOOSE TOKEN PAIR
                        </div>
                        <div className='w-21-7 flex flex-col justify-start items-center text-white'>
                            <div className='w-full flex flex-col justify-start items-center'>
                                {tokenPairList.map((item, index) => {
                                    return <div key={index} className='w-full  px-2-3 py-1-1 bg-swap-card-module  border-2 border-swap-border rounded-2xl mb-0-7'>
                                        {!item.showMore && <div className='flex justify-between items-center'>
                                            <div className='flex justify-start items-center'>
                                                <div className='w-2-2 h-2-2 rounded-full bg-gray-500'></div>
                                                <div className='ml-1-0 text-1-5 font-bold'>{item.title}</div>
                                            </div>
                                            <div className='icon iconfont icon-down2' onClick={() => handleShowMore(item)}></div>
                                        </div>}
                                        {item.showMore && <div className='w-full flex flex-col justify-start items-center'>
                                            <div className='flex justify-between items-center mb-0-4 w-full'>
                                                <div className='text-1-2 font-semibold'> V3 LP - {item.feeTier} fee tier</div>
                                                <div className='icon iconfont icon-down2' onClick={() => handleShowMore(item)}></div>
                                            </div>
                                            <div className='flex justify-start items-center w-full'>
                                                <div className='bg-primary-red rounded-full px-0-5 h-1-5 flex justify-center items-center mb-2-7'>
                                                    {item.pick} pick
                                                </div>
                                            </div>
                                            <div className='flex justify-between flex-wrap items-center w-full'>
                                                {item.pointItems.map((_item, _index) => {
                                                    return <div key={_index} className='w-8-0 token-pair-card border-2 py-0-9 mb-1-0 border-swap-border flex rounded-3xl flex-col justify-start items-center'>
                                                        <div className='flex justify-center items-baseline mb-0-8'>
                                                            <div className='font-bold text-2-0'>{_item.point}</div>
                                                            <div className='text-2-0'>%</div>
                                                        </div>
                                                        <div className={`bg-primary-purple rounded-full px-0-5 h-1-5 flex justify-center items-baseline`}>
                                                            <div className='font-bold text-1-0'>{_item.point} %</div>
                                                            <div className='text-0-7 ml-0-2'>pick</div>
                                                        </div>
                                                    </div>
                                                })}
                                            </div>
                                        </div>}
                                        {item.showMore && <div className='text-menu-green underline font-semibold text-1-5 text-center my-0-8'>
                                            Add V2 Liquidity
                                        </div>}
                                    </div>
                                })}
                            </div>
                        </div>
                        <div className='w-20-0 text-white text-1-5 mb-0-9'>
                            DEPOSIT AMOUNT
                        </div>
                        <div className='w-21-7 flex flex-col justify-start items-center'>
                            <div className='w-full mb-1-0'>
                                <div className='bg-swap-card-module mb-1-0 flex flex-col justify-between items-center border-2 border-swap-border rounded-2xl px-2-2 py-0-7 w-full h-6-9'>
                                    <div className='flex justify-between items-center w-full'>
                                        <div className='flex justify-start items-center'>
                                            <div className='rounded-full w-1-5 h-1-5 bg-swap-copy-icon'></div>
                                            <div className='text-1-2 font-medium ml-1-0'>HAH</div>
                                            {/* <div className='ml-2-0 icon iconfont icon-down2' style={{ fontSize: '1rem' }}></div> */}
                                        </div>
                                        {/* <div className='text-swap-copy-icon icon iconfont icon-copy' style={{ fontSize: '1.4rem' }}></div> */}
                                    </div>
                                    <div className='w-full'>
                                        <input className='bg-transparent  h-3-0 w-full '></input>
                                    </div>
                                </div>
                                <div className='text-white font-bold text-1-5 w-full flex justify-end'>21.3</div>
                                <div className='text-white text-1-0 flex justify-end'>~1,260.08 USD</div>
                            </div>
                            <div className='w-full'>
                                <div className='bg-swap-card-module mb-1-0 flex flex-col justify-between items-center border-2 border-swap-border rounded-2xl px-2-2 py-0-7 w-full h-6-9'>
                                    <div className='flex justify-between items-center w-full'>
                                        <div className='flex justify-start items-center'>
                                            <div className='rounded-full w-1-5 h-1-5 bg-swap-copy-icon'></div>
                                            <div className='text-1-2 font-medium ml-1-0'>HAH</div>
                                            {/* <div className='ml-2-0 icon iconfont icon-down2' style={{ fontSize: '1rem' }}></div> */}
                                        </div>
                                        <div className='text-swap-copy-icon icon iconfont icon-copy' style={{ fontSize: '1.4rem' }}></div>
                                    </div>
                                    <div className='w-full'>
                                        <input className='bg-transparent  h-3-0 w-full '></input>
                                    </div>
                                </div>
                                <div className='text-white font-bold text-1-5 w-full flex justify-end'>21.3</div>
                                <div className='text-white text-1-0 flex justify-end'>~1,260.08 USD</div>
                            </div>
                        </div>
                        <div className='w-20-0 text-white text-1-5 mb-0-2'>
                            SET PRICE RANGE
                        </div>
                        <div className='text-white text-1-0 w-20-0 mb-0-6'>
                            View prices in
                        </div>
                        <div className='view-prices-in w-19-7 py-0-7 rounded-xl border-2 border-swap-border flex justify-center items-center text-white mb-1-4'>
                            <div className='text-1-0 font-bold'>$BABYDOGEINU</div>
                            <div className='text-menu-green icon iconfont icon-exchange mx-0-8 font-bold'></div>
                            <div className='text-1-0'>HAH</div>
                        </div>
                        <div className='w-21-7 text-rank-title text-1-5'>
                            Current Price:
                        </div>
                        <div className='w-21-7 text-rank-title text-3-0 flex justify-start items-baseline'>
                            <div className=''>235.172</div>
                            <div className='text-1-2'>HAH per USDT</div>
                        </div>
                        <div className='bg-primary-purple rounded-lg w-21-7 h-20-0'></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Add
