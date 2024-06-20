import React, { useState } from 'react'
import { ifoState, ifoSaleAttributes, publicSaleItems } from '@/dictionary/more'
const Ifo = () => {
    let [currentIFOState, changeIFOState] = useState(1)
    let handleIFOState = (id) => {
        changeIFOState(currentIFOState = id)
        console.log(id)
    }
    return (
        <div className='bg-page-black'>
            <div className='flex flex-col justify-start items-center pt-6-3'>
                <div className='w-22-0 text-white text-1-2 mb-2-7 flex justify-around items-center'>
                    {ifoState.map((item, index) => {
                        return <div key={index} className={`text-1-2 ${currentIFOState === item.id ? 'text-menu-green' : 'text-voting-border'}`} onClick={() => handleIFOState(item.id)}>{item.title}</div>
                    })}
                </div>
                <div className='gradient-voting-banner w-22-0 h-21-1 rounded-xl flex flex-col justify-start items-center mb-3-0 relative'>
                    <div className='absolute right-0-1 w-18-6 h-21-1 bg-cover bg-right bg-no-repeat bg-how-to-work-rocket'></div>
                    <div className='flex flex-col w-full h-full justify-end items-center relative z-10'>
                        <div className='text-primary-yellow text-1-0 font-bold line-height-point-160 w-20-5 text-center voting-text-shadow '>
                            <div className='text-1-6'>IFO: Initial Farm Offerings</div>
                            Buy new tokens launching on EX.zone using HAH
                        </div>
                        <div className='text-white bg-primary-purple w-17-3 h-3-4 rounded-xl flex justify-center items-center text-1-5 font-bold mb-1-0 mt-1-0'>How does it work?</div>
                    </div>
                </div>
                <div className='w-full flex flex-col justify-start items-center gradient-voting-banner '>
                    <div className='w-full rounded-t-3xl overflow-hidden'>
                        <img className='' src='/images/phone/ifo-tiger.png' alt=''></img>
                    </div>
                    <div className='w-22-0 text-white text-2-0 font-bold line-height-point-133 mt-2-2 mb-0-8'>
                        Public Sale
                    </div>
                    <div>
                        <div className='rounded-3xl ifo-card-gradient py-1-1 px-1-4 flex flex-col justify-start items-center mb-1-5'>
                            <div className='w-5-9 h-5-9 rounded-full mb-1-2 overflow-hidden'>
                                <img src='https://pic1.zhimg.com/50/9b2a11a46cb0d1740e90b0f4f35e8a49_l.jpg?source=b6762063' alt=''></img>
                            </div>
                            <div className='text-white text-1-2 line-height-point-133 mb-1-0'>
                                ON SALE
                            </div>
                            <div className='title-gradient font-semibold text-2-0'>
                                4,500,000 LISTA
                            </div>
                            <div className='text-white line-height-point-133 text-1-2 mb-1-2'>90% of total sale</div>
                            <div className='w-19-0 h-4-7 flex justify-center items-center text-1-5 bg-primary-purple text-white rounded-xl'>Connect Wallet</div>
                            <div className=''>
                                {ifoSaleAttributes.map((item, index) => {
                                    return <div className={`flex justify-between items-center text-1-0 text-white w-19-0 h-2-5 ${index !== ifoSaleAttributes.length - 1 ? 'border-b border-dashed border-voting-border' : ''}`} key={index}>
                                        <div className={`${index === 0 ? 'text-menu-green' : ''}`}>{item.title}</div>
                                        <div className={`${index === 0 ? 'text-primary-red' : ''}`}>{item.content}</div>
                                    </div>
                                })}
                            </div>
                        </div>
                        <div className='border-b border-voting-border border-dashed pb-2-5'>
                            <div className='flex justify-start items-start'>
                                <div className='w-3-9 h-3-9 rounded-2xl mt-0-2 bg-gray-500'></div>
                                <div className='ml-1-3 text-white'>
                                    <div className='text-1-2 font-semibold line-height-point-193'>Achievement:</div>
                                    <div className='text-1-2 font-semibold line-height-point-193'>IFO Shopper: LISTA  100</div>
                                    <div className='text-0-8 font-semibold mb-1-2'>Commit ~3.706 HAH in total to earn!</div>
                                    <div className='flex justify-start items-center'>
                                        <div className='bg-gray-500 w-1-7 h-1-7 rounded-lg mr-0-8'></div>
                                        <div className='bg-gray-500 w-1-7 h-1-7 rounded-lg mr-0-8'></div>
                                        <div className='bg-gray-500 w-1-7 h-1-7 rounded-lg mr-0-8'></div>
                                        <div className='bg-gray-500 w-1-7 h-1-7 rounded-lg'></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='w-22-0 text-white text-2-0 font-bold line-height-point-133 mt-2-2 mb-0-8'>
                        Private Sale
                    </div>
                    <div className='w-22-0 mb-7-6'>
                        <div className='rounded-3xl w-22-0  ifo-private-card-gradient py-1-1 px-1-4 flex flex-col justify-start items-center mb-1-5'>
                            <div className='w-5-9 h-5-9 rounded-full mb-1-2 overflow-hidden'>
                                <img src='https://pic1.zhimg.com/50/9b2a11a46cb0d1740e90b0f4f35e8a49_l.jpg?source=b6762063' alt=''></img>
                            </div>
                            <div className='text-white text-1-2 line-height-point-133 mb-1-0'>
                                ON SALE
                            </div>
                            <div className='private-card-text font-semibold text-2-0'>
                                4,500,000 LISTA
                            </div>
                            <div className='text-white line-height-point-133 text-1-2 mb-1-2'>90% of total sale</div>
                            <div className='w-19-0 h-4-7 flex justify-center items-center text-1-5 bg-private-button text-white rounded-xl'>Connect Wallet</div>
                            <div className=''>
                                {ifoSaleAttributes.map((item, index) => {
                                    return <div className={`flex justify-between items-center text-1-0 text-white w-19-0 h-2-5 ${index !== ifoSaleAttributes.length - 1 ? 'border-b border-dashed border-card-border' : ''}`} key={index}>
                                        <div className={`${index === 0 ? 'text-menu-green' : ''}`}>{item.title}</div>
                                        <div className={`${index === 0 ? 'text-primary-yellow' : ''}`}>{item.content}</div>
                                    </div>
                                })}
                            </div>
                        </div>
                        <div className='text-white font-semibold line-height-point-156'>
                            <span className='text-menu-green text-1-2 '>Lista DAO</span> is a liquid staking and decentralized stablecoin protocol. Users can liquid stake their BNB to receive slisBNB, and borrow lisUSD against accepted collateral assets.
                        </div>
                    </div>
                    <div className='w-full h-3-5 bg-primary-purple flex justify-center items-center rounded-b-3xl text-menu-green'>
                        <div className='text-1-5 font-semibold mr-1-0'>Details</div>
                        <div className='flex justify-center items-center'>
                            <div className='icon iconfont icon-down'></div>
                        </div>
                    </div>
                </div>

                <div className='gradient-voting-banner w-22-0 h-21-1 rounded-xl mt-1-5 flex flex-col justify-start items-center py-2-1 mb-1-5'>
                    <div className='w-19-0 flex justify-between items-center mb-2-7'>
                        <div className='text-white text-1-5'>My HAH</div>
                        <div className='flex justify-end items-center'>
                            <div className='text-bold text-2-0 mr-1-0 text-white'>20</div>
                            <div className='flex justify-center -mt-0-2'>
                                <div className='text-menu-green icon iconfont icon-wenhaoxiao' style={{ fontSize: '1.4rem' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-19-0 flex justify-between items-center mb-2-0'>
                        <div className='flex justify-start items-center'>
                            <div className='w-1-8 h-1-9 rounded-lg bg-gray-500 mr-1-0'>

                            </div>
                            <div className='text-bold text-2-0  text-primary-yellow mt-0-1'>HAH</div>

                        </div>
                        <div className='text-primary-yellow text-2-0'>20</div>
                    </div>
                    <div className='text-white bg-primary-purple w-19-0 h-4-7 rounded-xl flex justify-center items-center text-1-5 font-bold mb-1-0 mt-1-0'>Connect Wallet</div>
                </div>

                <div className='w-22-0 flex justify-between items-center text-1-5 mb-2-8'>
                    <div className='text-menu-green underline'>My HAH</div>
                    <div className='text-white'>1x</div>
                </div>

                <div className='gradient-voting-banner w-22-0  rounded-3xl flex flex-col justify-start items-center mb-1-7 relative py-2-0'>
                    <div className='w-19-0 flex flex-col justify-start items-center text-white'>
                        <div className='text-2-0 text-white font-bold mb-0-5 w-full'>
                            Token Vesting
                        </div>
                        <div className='text-1-2 font-medium line-height-point-133 w-full mb-3-4 text-white'>
                            You have no tokens <br></br> available for claiming
                        </div>
                        <div className='w-12-8 mb-2-2'>
                            <img src='/images/phone/empty.png'></img>
                        </div>
                        <div className='font-bold text-1-2 w-full mb-1-0'>
                            You have no tokens <br></br> available for claiming
                        </div>
                        <div className='w-full text-1-0 mb-3-1'>
                            Participate in our next IFO. and remember to lock your HAH to increase your allocation!
                        </div>
                        <div className='text-white bg-primary-purple w-full h-4-7 rounded-xl flex justify-center items-center text-1-5 font-bold mb-1-0 mt-1-0'>Connect Wallet</div>
                        <div className='text-menu-green underline text-1-5 font-bold'>How does it work?</div>
                    </div>
                </div>

                <div className='bg-cover bg-center bg-no-repeat bg-ifo-banner-one w-22-0 h-83-6 rounded-3xl flex flex-col justify-start items-center mb-3-0 py-2-7'>
                    <div className='font-bold text-2-0 line-height-point-133 text-white w-19-0 mb-3-7'>
                        How to Take Part <br></br> in the Public Sale
                    </div>
                    <div className='flex flex-col justify-start items-center'>
                        {publicSaleItems.map((item, index) => {
                            return <div key={index} className='mb-1-8'>
                                <div className='flex justify-start items-center w-19-0 text-white mb-0-5'>
                                    <div className='w-5-1 h-5-1 rounded-full bg-ifo-border flex justify-center items-center shadow-2xl'>
                                        <div className='bg-ifo-round flex justify-center items-center text-white text-2-2 w-4-1 h-4-1 rounded-full font-medium'>{ item.id}</div>
                                    </div>
                                    <div className='text-1-5 w-11-8 ml-2-1 font-bold'>{ item.title}</div>
                                </div>
                                <div className='flex justify-between items-center w-19-0 text-white '>
                                    <div className={`w-1-4 ml-1-9 bg-ifo-round mt-0-4 ${item.height}` }></div>
                                    <div className='line-height-point-133 text-0-9 w-11-8'>{ item.content}</div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Ifo
