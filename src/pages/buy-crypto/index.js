import React, { useState } from 'react'
import TradeMenu from '@/components/TradeMenu'
import { liquidityOperateItems, tokenPair, providerItems, FAQItems } from '@/dictionary/trade'
const BuyCrypto = () => {
    let [FAQItemsList, setFAQItems] = useState(FAQItems)

    let handleShowMore = ({ id }) => {
        console.log(id)
        setFAQItems(FAQItemsList =>
            FAQItemsList.map(item =>
                item.id === id ? { ...item, showMore: !item.showMore } : item))
    }
    return (
        <>
            <div className='pt-4-8 lg:pt-6-9 bg-buy-module'>
                <div className='w-full flex flex-col justify-start items-center relative'>
                    <div className='w-full bg-swap-banner bg-center bg-cover bg-no-repeat absolute top-auto left-auto h-19-3 z-10'></div>
                    <div className='w-full py-1-0 relative z-10'>
                        <TradeMenu defaultIndex={4}></TradeMenu>
                    </div>
                    <div className='w-full flex flex-col justify-start items-center gradient-swap-module h-auto pb-8-0 backdrop-blur-xl text-white lg:min-h-screen relative z-10'>
                        <div className='w-20-0 lg:w-34-9  text-1-5 font-semibold mt-2-6 flex justify-between items-center'>
                            <div className=''>
                                Buy Crypto
                            </div>
                            <div className='flex justify-center items-center'>
                                <div className='icon iconfont icon-shuaxin text-menu-green' style={{ fontSize: '2rem' }}></div>
                            </div>
                        </div>
                        <div className='w-20-0 lg:w-34-9 text-1-0  mb-1-5 flex justify-start items-center'>
                            <div className=''>Buy crypto in just a few clicks</div>
                        </div>
                        <div className='w-20-0 lg:w-34-9  flex flex-col justify-start items-center'>
                            <div className='w-full border rounded-2xl px-0-9 py-1-2  border-liquid-staking-border bg-primary-50 flex justify-between  items-center'>
                                <div className='text-1-2'>150</div>
                                <div className='flex justify-end items-center'>
                                    <div className='w-1-5 h-1-5 rounded-full bg-white overflow-hidden'>
                                        <img src='https://www.3at.org/images/logo.png' className='text object-cover'></img>
                                    </div>
                                    <div className='ml-0-4 text-1-0 font-medium'>HAH</div>
                                    <div className='flex justify-center items-center ml-0-6'>
                                        <div className='icon iconfont icon-down2'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex justify-center items-center my-0-7'>
                                <div className='w-2-2 h-2-2 rounded-full bg-menu-green flex justify-center items-center'>
                                    <div className='icon iconfont icon-exchange text-white rotate-90 font-bold' style={{ fontSize: '1.2rem' }}></div>
                                </div>
                            </div> <div className='w-full border rounded-2xl px-0-9 py-1-2  border-liquid-staking-border bg-primary-50 flex justify-between  items-center mb-2-4'>
                                <div className='text-1-2'>0.2342</div>
                                <div className='flex justify-end items-center'>
                                    <div className='w-1-5 h-1-5 rounded-full bg-white overflow-hidden'>
                                        <img src='https://www.3at.org/images/logo.png' className='text object-cover'></img>
                                    </div>
                                    <div className='ml-0-4 text-1-0 font-medium'>HAH</div>
                                    <div className='flex justify-center items-center ml-0-6'>
                                        <div className='icon iconfont icon-down2'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full border rounded-2xl px-0-9 py-1-2 border-liquid-staking-border bg-primary-50 flex justify-between  items-center'>
                                <div className='flex justify-start items-center'>
                                    <div className='w-2-5 h-2-5 rounded-full bg-futures-word overflow-hidden'>
                                        <img className='object-cover' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAA/klEQVR4AcXQEXTDABAG4M9lXIfQOFqXvleulyujYblQDMSC0cAoGJtVwtFYKHDbXpK85a2+T+/d/XfnHyW37Jp6rhnKrOr7qye6Auw/hz1IB6tbbXaIDI5hcRquB4tHg2sk4OXRN33Vju2SV7V8xDsYLy4fONZRAuXDGA24cM+BPO6gbiNiZ5JlZk2fQHyrTW6FxTneKOPHCUyZi744xyQB+xarNmZjAkZWeaxG0KVrZhe/eEWRweu56GNDjn2H+MsA03nHrIsN9Tvupcmh3RSTEcLittm2KlDmFqeYDTtEirA6z307OA7IK7Z/OADFJ8bU6ufcyqwpOfXbwfAFLNz2XLy7Vj8AAAAASUVORK5CYII='></img>
                                    </div>
                                    <div className='flex flex-col justify-start items-start ml-0-4'>
                                        <div className='text-1-2 font-extrabold'>Mercuryo</div>
                                        <div className='text-voting-border text-0-8 font-semibold'>1 HAH = $596.89</div>
                                    </div>
                                </div>
                                <div className='flex justify-end items-center'>
                                    <div className='py-0-2 px-0-4 voting-clicked-button rounded-lg text-1-0 font-medium'>Best quate</div>
                                    <div className='flex justify-center items-center ml-0-4'>
                                        <div className='icon iconfont icon-down2'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full justify-center items-center flex'>
                            <div className='w-1-6 h-1-6 rounded-full bg-futures-word overflow-hidden'>
                                <img src='https://scan.hashahead.org/img/logo.c55c29e5.jpg'></img>
                            </div>
                            <div className='text-white text-1-0 font-medium ml-0-4 my-2-2'>HashAhead Smart Chain</div>
                        </div>
                        <div className='w-20-0 lg:w-34-9  border border-dashed rounded-xl border-voting-border p-1-2 flex flex-col justify-start items-center'>
                            <div className='w-full flex justify-between items-center mb-2-0'>
                                <div className='text-white text-0-9 flex justify-start items-center'>
                                    <div className='font-medium h-1-0'>
                                        Est total fees : $3.05
                                    </div>
                                    <div className='bg-primary-red rounded-full w-1-0 h-1-0 flex justify-center items-center ml-0-4 text-0-8'>!</div>
                                </div>
                                <div className='flex justify-end items-center text-menu-green'>
                                    <div className=''>Show details</div>
                                    <div className='flex justify-center items-center ml-0-2'>
                                        <div className='icon iconfont icon-down2'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between items-center text-0-7 w-full mb-2-0'>
                                <div className='text-voting-border font-bold '>Provider Fees</div>
                                <div className=''>US ￥2.89</div>
                            </div>
                            <div className='flex justify-between items-center text-0-7 w-full'>
                                <div className='text-voting-border font-bold '>HAH Rate</div>
                                <div className=''>US ￥2.89</div>
                            </div>
                        </div>
                        <div className='w-21-7 lg:w-34-9 h-4-7 rounded-lg bg-primary-purple border-2 border-primary-purple flex justify-center items-center font-medium text-1-5 mt-2-0'>Connect Wallet </div>

                        <div className='flex justify-between items-center text-0-7 font-bold w-21-7 my-1-8 lg:w-34-9'>
                            <div className='text-voting-border'>By continuing you agree to our</div>
                            <div className='text-menu-green underline'> terms of service</div>
                        </div>
                        <div className='w-full bg-limit-choose rounded-b-3xl flex flex-col justify-start items-center lg:rounded-t-3xl'>
                            <div className='w-20-6 border-b border-limit-border h-5-0 text-1-5 font-medium flex items-center lg:w-34-9'>
                                Choose a provider
                            </div>
                            <div className='flex flex-col justify-start items-center w-20-6 lg:w-34-9'>
                                {providerItems.map((item, index) => {
                                    return <div key={index} className='flex justify-between items-center w-full h-6-9'>
                                        <div className='flex justify-start items-center'>
                                            <div className='w-2-4 h-2-4 bg-gray-600 rounded-full overflow-hidden'>
                                                <img className='object-cover' src={item.imgUrl}></img>
                                            </div>
                                            <div className='ml-0-4 flex flex-col justify-start items-start'>
                                                <div className='text-1-2 font-extrabold'>{item.title}</div>
                                                <div className='text-voting-border'>≈ {item.price} HAH</div>
                                            </div>
                                        </div>
                                        <div className={`py-0-2 rounded w-6-9 text-0-9 flex justify-center items-center ${item.id === 1 ? 'voting-clicked-button' : 'bg-primary-purple'}`}>
                                            {item.id === 1 && 'Best quate'}
                                            {item.id !== 1 && <div className='flex justify-center items-center rounded-lg'>
                                                <div className=''>{item.amp}</div>
                                                <div className='flex justify-center items-center'>
                                                    <div className='icon iconfont icon-down3 ml-0-6'></div>
                                                </div>
                                            </div>}
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                        <div className='w-full flex flex-col justify-start items-center mt-2-8 mb-1-5'>
                            <div className='w-18-0 text-2-2 font-semibold lg:w-34-9'>FAQ</div>
                        </div>
                        <div className='w-full flex flex-col justify-start items-center lg:w-34-9'>
                            {FAQItemsList.map((item, index) => {
                                return <div onClick={() => handleShowMore(item)} className='w-21-7 lg:w-34-9 py-1-1 px-1-8 bg-swap-copy-icon rounded-2xl flex flex-col justify-start items-center text-white mb-1-0' key={index}>
                                    <div className='font-bold text-1-2 flex justify-between items-center'>
                                        <div className='pr-1-0'>
                                            {item.title}
                                        </div>
                                        <div className={`icon iconfont icon-down2 transition ease-in-out duration-150 ${item.showMore ? 'rotate-180' : 'rotate-0'}`}></div>
                                    </div>
                                    {item.showMore && <div className='text-1-2 font-medium mt-2-5'>
                                        {item.content}
                                    </div>}
                                </div>
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default BuyCrypto
