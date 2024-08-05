import React, { useState } from 'react'
import PageTabs from '@/components/pools/pageTabs';
import { liquidFAQItems } from '@/dictionary/pools'
import SelectTokenPopup from '@/components/swap/selectTokenPopup'
import Toast from 'antd-mobile/es/components/toast'
const LiquidStaking = () => {
    let [liquidFAQItemsList, showItems] = useState(liquidFAQItems)
    let [showSelectTokenPopup, setSelectTokenPopup] = useState(false)
    let handleShowMore = ({ id }) => {
        showItems(liquidFAQItemsList =>
            liquidFAQItemsList.map(item =>
                item.id === id ? { ...item, showMore: !item.showMore } : item))
    }
    let [tokenPair, setTokenPair] = useState({ id: 1, title: 'BTC / USD3', first: 'BTC', second: 'USD3', rate: '0.8223' })
    let toggleSelectTokenPopup = () => {
        console.log('object')
        setSelectTokenPopup(showSelectTokenPopup = !showSelectTokenPopup)
    }
    let selectTokenItem = (item) => {
        console.log('object')
        setTokenPair(item)
        setSelectTokenPopup(showSelectTokenPopup = !showSelectTokenPopup)
    }
    let showToast = () => {
        Toast.show({
            content: 'Network Error',

        })
        console.log(Toast)
    }
    let tokenList = [{ id: 1, title: 'BTC / USD3', first: 'BTC', second: 'USD3', rate: '0.8223' }, { id: 2, title: 'ETH / USD3', first: 'ETH', second: 'USD3', rate: '0.99991' }]
    return (
        <>
            <div className='pt-5-0 bg-black lg:pt-6-3 xl:pt-8-4' >
                <PageTabs defaultIndex={2}></PageTabs>
                <div className='w-full bg-liquid-staking-module flex flex-col justify-start items-center'>
                    <div className='w-22-0 flex flex-col justify-start items-center text-white lg:w-38-8'>
                        <div className='w-full my-2-3'>
                            <div className='text-2-0 font-semibold'>Liquid Staking</div>
                            <div className='text-1-0'>Unlock liquidity while earning rewards</div>
                        </div>
                        <div className='w-full rounded-xl border border-swap-copy-icon px-1-0 py-1-2 mb-2-0'>
                            <div className='text-swap-copy-icon text-1-0 font-semibold mb-0-8'>
                                CHOOSE A PAIR TO LIQUID STAKE
                            </div>
                            <div className='rounded-xl border border-liquid-staking-border bg-primary-50 overflow-hidden w-full mb-1-2 relative transition ease-in duration-100 active:bg-liquid-staking-module '>
                                <div className='flex justify-between items-center p-1-4' onClick={() => toggleSelectTokenPopup()}>
                                    <div className='text-1-2 font-semibold'>{tokenPair.title}</div>
                                    <div className={`icon iconfont icon-down2 text-1-2 duration-100 transition ${showSelectTokenPopup ? 'rotate-180' : 'rotate-0'}`}></div>
                                </div>
                                {showSelectTokenPopup && <div className='w-full '>
                                    {tokenList.map((item, index) => {
                                        return <div key={index} className='p-1-4 border-t-limit-orders-module text-1-2' onClick={() => selectTokenItem(item)}>{item.title}</div>
                                    })}
                                </div>}

                            </div>
                            <div className='w-full flex justify-between items-center text-1-0 font-semibold mb-0-8'>
                                <div className='text-voting-border '> Exchange Rate </div>
                                <div className=''>1 {tokenPair.first} = {tokenPair.rate} {tokenPair.second}</div>
                            </div>
                            <div className='w-full flex justify-between items-center text-1-0 font-semibold mb-1-8'>
                                <div className='text-voting-border '>  Est.APR </div>
                                <div className=''>-</div>
                            </div>
                            <div onClick={() => showToast()} className='text-0-9 font-bold w-full h-3-0 flex justify-center items-center bg-primary-purple rounded-xl transition ease-in duration-100 active:bg-opacity-50  active:translate-y-0-1'>Proceed</div>
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
                            <div onClick={() => showToast()} className='text-0-9 font-bold w-full h-3-0 flex justify-center items-center bg-primary-purple rounded-xl transition ease-in duration-100 active:bg-opacity-50 active:translate-y-0-1'>Connect Wallet</div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col justify-start items-center pb-2-0'>
                    <div className='w-22-0 flex flex-col justify-start items-center text-white lg:w-38-8'>
                        <div className='w-18-5 text-2-2 font-semibold my-1-0 lg:w-38-8'>FAQ</div>

                        <div className='w-full flex flex-col justify-start items-center'>
                            {liquidFAQItemsList.map((item, index) => {
                                return <div className='w-21-7 lg:w-34-9 py-1-1 px-1-8 bg-swap-copy-icon rounded-2xl flex flex-col justify-start items-center text-white mb-1-0' key={index}>
                                    <div className='font-bold text-1-2 flex justify-between items-center w-full'>
                                        <div className='pr-1-0'>
                                            {item.title}
                                        </div>
                                        <div className={`icon iconfont icon-down2 transition ease-in-out duration-150 ${item.showMore ? 'rotate-180' : 'rotate-0'}`} onClick={() => handleShowMore(item)}></div>
                                    </div>
                                    {item.showMore && <div className='text-1-2 font-medium mt-2-5'>
                                        {item.content}
                                    </div>}
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div >
            {/* <SelectTokenPopup showSelectTokenPopup={showSelectTokenPopup} onClose={toggleSelectTokenPopup} isToken={true} selectTokenItem={selectTokenItem}></SelectTokenPopup> */}
        </>
    )
}

export default LiquidStaking
