import React, { useState } from 'react'
import TradeMenu from '@/components/TradeMenu'
import StatisticsPopup from '@/components/swap/statisticsPopup'
import FirePopup from '@/components/swap/firePopup'
import SettingPopup from '@/components/swap/settingPopup'
import CustomsizeRoutingPopup from '@/components/swap/customsizeRoutingPopup'
import RecentTransPopup from '@/components/swap/recentTransPopup'
import SelectTokenPopup from '@/components/swap/selectTokenPopup'
import { swapStateItems, swapOperateItems } from '@/dictionary/trade'
import { useRouter } from 'next/router'
import DialogPopup from '@/components/DialogPopup'

const Trade = () => {
    const router = useRouter()
    let [currentState, setCurrentState] = useState(1)
    let [operateItems, setOperateItems] = useState(1)
    let [showStatisticsPopup, setStatisticsPopup] = useState(false)
    let [showFirePopup, setFirePopup] = useState(false)
    let [showSettingPopup, setSettingPopup] = useState(false)
    let [showCustomsizePopup, setCustomsizePopup] = useState(false)
    let [showRecentTransPopup, setRecentTransPopup] = useState(false)
    let [showSelectTokenPopup, setSelectTokenPopup] = useState(false)
    let [fromTokenInfo, setFromTokenInfo] = useState({ title: 'ETH', token: 'BINANCE:ETHUSDT', img: 'https://s3-symbol-logo.tradingview.com/crypto/XTVCETH--big.svg', content: 'Binance Chain Native Token', value: 'ethereum', balance: 89238.28 })
    let [toTokenInfo, setToTokenInfo] = useState({ title: 'USD3', token: 'BINANCE:BNBUSDT', img: 'https://www.3at.org/images/logo.png', content: 'Binance Chain Native Token', value: 'usd3', balance: 100023.23 })
    let [tokenType, setTokenType] = useState('')
    let [toTokenPrice, setToTokenPrice] = useState('')
    let [fromTokenPrice, setFromTokenPrice] = useState('')
    let [showDialogPopup, setShowDialogPopup] = useState(false)
    let [dialogContent, setDialogContent] = useState('Network error, please try again')
    let handleSwapState = ({ id, link }) => {
        setCurrentState(currentState = id)
        router.push(link)
    }
    let handleSwapOperate = ({ id }) => {
        setOperateItems(operateItems = id)
        switch (id) {
            case 1: router.push('/buy-crypto')
                break;
            case 2: toggleStatisticsPopup()
                break;
            case 3: toggleFirePopup()
                break;
            case 4: toggleSettingPopup()
                break;
            case 5: toggleRecentTransPopup()
                break;
        }
    }
    let toggleStatisticsPopup = () => {
        console.log('object')
        setStatisticsPopup(showStatisticsPopup = !showStatisticsPopup)
        console.log(showStatisticsPopup)
    }
    let toggleFirePopup = () => {
        setFirePopup(showFirePopup = !showFirePopup)
    }
    let toggleSettingPopup = () => {
        setSettingPopup(showSettingPopup = !showSettingPopup)
    }
    let toggleCustomsizePopup = () => {
        setCustomsizePopup(showCustomsizePopup = !showCustomsizePopup)
    }
    let toggleRecentTransPopup = () => {
        setRecentTransPopup(showRecentTransPopup = !showRecentTransPopup)
    }
    let toggleSelectTokenPopup = (type) => {
        console.log('object')
        setTokenType(type)
        setSelectTokenPopup(showSelectTokenPopup = !showSelectTokenPopup)
    }
    const selectTokenItem = (item) => {
        console.log(item)
        tokenType === 'from' ? setFromTokenInfo(item) : setToTokenInfo(item)
        toggleSelectTokenPopup()
    }
    const toggleDialogPopup = () => {
        setShowDialogPopup(showDialogPopup = !showDialogPopup)
    }
    const handleConnectWallet = () => {
        setDialogContent('Network error, please try again')
        toggleDialogPopup()
    }
    const closeMask = () => {
        toggleDialogPopup()
    }
    const handleInputFocus = () => {
        setDialogContent('Unable to redeem')
        toggleDialogPopup()
    }
    return (
        <>
            <DialogPopup showDialogPopup={showDialogPopup} type='fail' content={dialogContent} closeMask={closeMask}></DialogPopup>
            <div className='pt-4-8 lg:pt-6-9 bg-black'>
                <div className='w-full flex flex-col justify-start items-center relative'>
                    <div className='w-full bg-swap-banner bg-center bg-cover bg-no-repeat absolute top-auto left-auto h-19-3 z-10'></div>
                    <div className='w-full py-1-0 relative z-10'>
                        <TradeMenu></TradeMenu>
                    </div>
                    <div className='w-full flex flex-col justify-start items-center gradient-swap-module h-auto pb-8-0 backdrop-blur-xl text-white lg:min-h-screen relative z-10'>
                        <div className='w-20-0 bg-swap-tabs rounded-lg p-0-5 flex justify-between items-center my-1-5 lg:w-35-0' >
                            {swapStateItems.map((item, index) => {
                                return <div key={index} onClick={() => handleSwapState(item)} className={`flex justify-center items-center  text-1-0 rounded w-5-6  lg:w-10-4 ${currentState === item.id ? 'voting-clicked-button' : 'bg-voting-type'}`}>
                                    {item.title}
                                </div>
                            })}
                        </div>
                        <div className='w-20-0 text-1-5 font-semibold lg:w-35-0'>Swap</div>
                        <div className='w-20-0 text-1-0 text-swap-second-title mb-1-1 lg:w-35-0'>Trade tokens in an instant</div>
                        <div className='w-20-0 flex justify-between items-center text-menu-green mb-1-0 lg:w-35-0 lg:justify-end'>
                            {swapOperateItems.map((item, index) => {
                                return <div key={index} className='flex justify-center items-center lg:ml-2-4' onClick={() => handleSwapOperate(item)}>
                                    <div key={index} className={`icon iconfont ${item.icon} ${operateItems === item.id ? '' : ''}`} style={{ fontSize: '1.5rem' }}></div>
                                </div>
                            })}
                        </div>
                        <div className='w-20-0 mb-2-0 lg:w-35-0 lg:mb-8-0'>
                            <div className='bg-swap-card-module flex flex-col justify-between items-center border-2 border-swap-border rounded-2xl p-0-8 w-20-0 h-8-0 lg:w-35-0'>
                                <div className='flex justify-between items-center w-full'>
                                    <div className='flex justify-start items-center' onClick={() => toggleSelectTokenPopup('from')}>
                                        <div className='rounded-full w-2-2 h-2-2 bg-white overflow-hidden' >
                                            <img src={fromTokenInfo.img}></img>
                                        </div>
                                        <div className='text-1-5 font-light ml-1-0'>{fromTokenInfo.title}</div>
                                        <div className='ml-2-0 icon iconfont icon-down2' style={{ fontSize: '1rem' }}></div>
                                    </div>
                                    {/* <div className='text-swap-copy-icon icon iconfont icon-copy' style={{ fontSize: '1.4rem' }}></div> */}
                                </div>
                                <div className='w-full'>
                                    <input className='bg-transparent  h-3-0 w-full ' onFocus={handleInputFocus}></input>
                                </div>
                            </div>
                            <div className='w-full flex justify-center items-center my-0-1'>
                                <div className='text-menu-green font-bold icon iconfont icon-down3' style={{ fontSize: '2rem' }}></div>
                            </div>
                            <div className='bg-swap-card-module flex flex-col justify-between items-center border-2 border-swap-border rounded-2xl p-0-8 w-20-0 h-8-0 lg:w-35-0'>
                                <div className='flex justify-between items-center w-full'>
                                    <div className='flex justify-start items-center' onClick={() => toggleSelectTokenPopup('to')}>
                                        <div className='rounded-full w-2-2 h-2-2 bg-white overflow-hidden' >
                                            <img className='' src={toTokenInfo.img}></img>
                                        </div>
                                        <div className='text-1-5 font-light ml-1-0'>{toTokenInfo.title}</div>
                                        <div className='ml-2-0 icon iconfont icon-down2' onClick={() => toggleSelectTokenPopup} style={{ fontSize: '1rem' }}></div>
                                    </div>
                                    {/* <div className='text-swap-copy-icon icon iconfont icon-copy' style={{ fontSize: '1.4rem' }}></div> */}
                                </div>
                                <div className='w-full'>
                                    <input className='bg-transparent  h-3-0 w-full' onFocus={handleInputFocus}></input>
                                </div>
                            </div>
                        </div>
                        <div className='w-20-0 flex justify-between items-center mb-1-0 lg:w-35-0 '>
                            <div className='flex justify-start items-center'>
                                <div className='text-1-0 text-swap-second-title mr-1-0'>Slippage Tolerance</div>
                                {/* <div className='text-menu-green icon iconfont icon-edit' style={{ fontSize: '1.4rem' }}> </div> */}
                            </div>
                            <div className='font-bold text-1-5 text-menu-green'>0.5%</div>
                        </div>
                        <div onClick={handleConnectWallet} className='w-20-0 h-4-7 bg-primary-purple flex justify-center items-center text-white font-light text-1-5 rounded-xl lg:w-35-0  transition ease-in duration-100 active:bg-opacity-50 active:translate-y-0-1'>
                            Connect Wallet
                        </div>
                    </div>
                </div>

            </div>
            <StatisticsPopup showStatisticsPopup={showStatisticsPopup} onClose={toggleStatisticsPopup}></StatisticsPopup>
            <FirePopup showFirePopup={showFirePopup} onClose={toggleFirePopup}></FirePopup>
            <SettingPopup showSettingPopup={showSettingPopup} onClose={toggleSettingPopup} handleCusRouting={toggleCustomsizePopup}></SettingPopup>
            <CustomsizeRoutingPopup showCustomsizePopup={showCustomsizePopup} onClose={toggleCustomsizePopup}></CustomsizeRoutingPopup>
            <RecentTransPopup showRecentTransPopup={showRecentTransPopup} onClose={toggleRecentTransPopup}></RecentTransPopup>
            <SelectTokenPopup showSelectTokenPopup={showSelectTokenPopup} onClose={toggleSelectTokenPopup} selectTokenItem={selectTokenItem}></SelectTokenPopup>
        </>
    )
}

export default Trade
