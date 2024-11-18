import React, { useState } from 'react'
import TradeMenu from '@/components/TradeMenu'
import { swapStateItems, swapOperateItems } from '@/dictionary/trade'
import { useRouter } from 'next/router'
import SelectTOkenPopup from '@/components/swap/selectTokenPopup'
import Switch from 'antd-mobile/es/components/switch'
import DialogPopup from '@/components/DialogPopup'

const Limit = () => {
    const router = useRouter()
    let [showSelectTokenPopup, setSelectTokenPopup] = useState(false)
    let [fromTokenInfo, setFromTokenInfo] = useState({ title: 'BTC', token: 'BINANCE:BTCUSDT', img: 'https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC--big.svg', content: 'Binance Chain Native Token', value: 'binancecoin', balance: 234.20 })
    let [toTokenInfo, setToTokenInfo] = useState({ title: 'USD3', token: 'BINANCE:BNBUSDT', img: 'https://www.3at.org/images/logo.png', content: 'Binance Chain Native Token', value: 'usd3', balance: 100023.23 })
    let [tokenType, setTokenType] = useState('from')
    let priceStep = [{ id: 1, point: 25, title: '25%' }, { id: 2, point: 50, title: '50%' }, { id: 3, point: 75, title: '75%' }, { id: 4, point: 100, title: 'MAX' }]
    let [fromPrice, setFromPrice] = useState('')
    let [toPrice, setToPrice] = useState('')
    let [showDialogPopup, setShowDialogPopup] = useState(false)
    let [dialogContent, setDialogContent] = useState('Network error, please try again')
    let currentState = 3
    let toggleSelectTokenPopup = (type) => {
        setTokenType(type)
        setSelectTokenPopup(showSelectTokenPopup = !showSelectTokenPopup)
    }
    let selectTokenItem = (item) => {
        console.log(item)
        tokenType === 'from' ? setFromTokenInfo(item) : setToTokenInfo(item)
        setFromPrice(0)
        setToPrice(0)

        toggleSelectTokenPopup()
    }
    let handlePricePointItem = (item) => {
        console.log(fromTokenInfo.value)
        setFromPrice(item.point * fromTokenInfo.balance * 0.01)
        let price
        if (fromTokenInfo.value === "binancecoin") {
            price = Number(Number(localStorage.getItem('bitcoin')) * Number(fromPrice))
        }
        if (fromTokenInfo.value === "ethereum") {
            price = Number(Number(localStorage.getItem('ethereum')) * Number(fromPrice))
        }
        if (fromTokenInfo.value === "usd3") {
            price = Number(Number(fromPrice) * 1)
        }
        setToPrice(price)
        console.log(toPrice)
    }
    const closeMask = () => {
        toggleDialogPopup()
    }
    const handleConnectWallet = () => {
        console.log('click')
        setDialogContent('Network error, please try again')
        toggleDialogPopup()
    }
    const toggleDialogPopup = () => {
        setShowDialogPopup(showDialogPopup = !showDialogPopup)
    }
    const fromPriceChange = (event) => {
        // localStorage.setItem('bitcoin', data.bitcoin.usd)
        // localStorage.setItem('ethereum', data.ethereum.usd)
        // localStorage.setItem('usd3', 1)
        console.log(fromTokenInfo)
        let price
        if (fromTokenInfo.value === "binancecoin") {
            price = Number(Number(localStorage.getItem('bitcoin')) * event.target.value)
        }
        if (fromTokenInfo.value === "ethereum") {
            price = Number(Number(localStorage.getItem('ethereum')) * event.target.value)
        }
        if (fromTokenInfo.value === "usd3") {
            price = Number(event.target.value * 1)
        }
        setFromPrice(event.target.value)
        setToPrice(price)
        console.log(event)
    }
    const toPriceChange = () => {
        console.log(toPrice)
    }
    return (
        <>
            <DialogPopup showDialogPopup={showDialogPopup} type='fail' content={dialogContent} closeMask={closeMask}></DialogPopup>
            <SelectTOkenPopup showSelectTokenPopup={showSelectTokenPopup} selectTokenItem={selectTokenItem} onClose={toggleSelectTokenPopup}></SelectTOkenPopup>
            <div className='pt-4-8 lg:pt-6-9 bg-black'>
                <div className='w-full flex flex-col justify-start items-center relative'>
                    <div className='w-full bg-swap-banner bg-center bg-cover bg-no-repeat absolute top-auto left-auto h-19-3 z-10'></div>
                    <div className='w-full py-1-0 relative z-10'>
                        <TradeMenu></TradeMenu>
                    </div>
                    <div className='w-full flex flex-col justify-start items-center gradient-swap-module h-auto pb-2-0 lg:pb-8-0 backdrop-blur-xl text-white lg:min-h-screen relative z-10'>
                        <div className='w-20-0 bg-swap-tabs rounded-lg p-0-5 flex justify-between items-center my-1-5 lg:w-35-0' >
                            {swapStateItems.map((item, index) => {
                                return <div key={index} onClick={() => { router.push(item.link) }} className={`flex justify-center items-center  text-1-0 rounded w-5-6  lg:w-10-4 ${currentState === item.id ? 'voting-clicked-button' : 'bg-voting-type'}`}>
                                    {item.title}
                                </div>
                            })}
                        </div>
                        <div className='w-20-0 text-1-5 font-semibold lg:w-35-0 mb-2-0'>LIMIT</div>
                        <div className='w-20-0 mb-2-0 lg:w-35-0 lg:mb-8-0'>
                            <div className='bg-swap-card-module flex flex-col justify-between items-center border-2 border-swap-border rounded-2xl p-0-8 w-20-0 lg:w-35-0'>
                                <div className='flex justify-between items-center w-full'>
                                    <div className='flex justify-start items-center' onClick={() => toggleSelectTokenPopup('from')}>
                                        <div className='rounded-full w-2-2 h-2-2 bg-white overflow-hidden' >
                                            <img src={fromTokenInfo.img} className='object-cover'></img>
                                        </div>
                                        <div className='text-1-5 font-light ml-1-0'>{fromTokenInfo.title}</div>
                                        <div className='ml-2-0 icon iconfont icon-down2' style={{ fontSize: '1rem' }}></div>
                                    </div>
                                </div>
                                <div className='w-full mt-0-6'>
                                    <input className='bg-transparent h-1-4 w-full text-right text-1-5' type='number' value={Number(fromPrice).toFixed(2)} onChange={fromPriceChange} placeholder='0.00'></input>
                                </div>
                                <div className='w-full text-0-8 text-right'>Balance: {fromTokenInfo.balance}</div>
                                <div className='w-full flex justify-between items-center mt-1-0'>
                                    {priceStep.map((item, index) => {
                                        return <div onClick={() => handlePricePointItem(item)} key={index} className='w-4-0 h-2-1 flex justify-center items-center bg-menu-green  text-black text-1-0 rounded-xl transition ease-in duration-100 active:bg-opacity-50 active:translate-y-0-1'>{item.title}</div>
                                    })}
                                </div>
                            </div>
                            <div className='w-full flex justify-center items-center my-0-1'>
                                <div className='text-menu-green font-bold icon iconfont icon-down3' style={{ fontSize: '2rem' }}></div>
                            </div>
                            <div className='bg-swap-card-module flex flex-col justify-between items-center border-2 border-swap-border rounded-2xl p-0-8 w-20-0  lg:w-35-0'>
                                <div className='flex justify-between items-center w-full'>
                                    <div className='flex justify-start items-center' onClick={() => toggleSelectTokenPopup('to')}>
                                        <div className='rounded-full w-2-2 h-2-2 bg-white overflow-hidden' >
                                            <img src={toTokenInfo.img} className='object-cover'></img>
                                        </div>
                                        <div className='text-1-5 font-light ml-1-0'>{toTokenInfo.title}</div>
                                        <div className='ml-2-0 icon iconfont icon-down2' style={{ fontSize: '1rem' }}></div>
                                    </div>
                                    {/* <div className='text-swap-copy-icon icon iconfont icon-copy' style={{ fontSize: '1.4rem' }}></div> */}
                                </div>
                                <div className='w-full mt-0-6'>
                                    <input className='bg-transparent h-1-4 w-full text-right text-1-5' disabled value={Number(toPrice).toFixed(2)} placeholder='0.00'></input>
                                </div>
                                <div className='w-full text-0-8 text-right'>Balance: {toTokenInfo.balance}</div>
                            </div>
                        </div>
                        <div className='w-20-0 flex flex-col justify-start items-center mb-1-0'>
                            <div className='w-full flex justify-between items-center mb-1-0'>
                                <div className='text-1-0 text-purple62'>Limit Price</div>
                                <div className='rounded-full px-0-5 flex justify-between items-center text-menu-green border border-menu-green'>
                                    <div className='icon iconfont icon-shuaxin  text-1-5 transition ease-in duration-100 active:-rotate-180'></div>
                                    <div className='text-1-0 ml-1-0'>Reset</div>
                                </div>
                            </div>
                            <div className='w-full flex justify-end items-center'>
                                <div className='rounded-full flex justify-between items-center text-menu-green '>
                                    <div className='icon iconfont icon-shuaxin  text-1-5 transition ease-in duration-100 active:-rotate-180'></div>
                                    <div className='ml-1-0'>
                                        <Switch
                                            defaultChecked
                                            style={{
                                                '--checked-color': '#29E5AD',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='bg-swap-card-module flex flex-col justify-between items-center border-2 border-swap-border rounded-2xl p-0-8 w-20-0 mb-2-0'>
                            <input className='bg-transparent text-1-5 text-right text-purple62 w-full h-1-2 placeholder:text-purple62' placeholder='0.0'></input>
                        </div>
                        <div className='text-1-0 text-purple62 w-20-0 mb-1-0'>
                            <div className=''>Trade interval</div>
                            <div className='w-full flex justify-between items-center'>
                                <div className='bg-swap-card-module flex flex-col justify-between items-center border-2 border-swap-border rounded-2xl p-0-4 px-0-8 w-10-8'>
                                    <input className='bg-transparent text-1-5 text-right text-white w-full h-1-2 placeholder:text-white' placeholder='2'></input>
                                </div>
                                <div className='text-1-5 text-white'>MINUTES</div>
                            </div>
                        </div>
                        <div className='text-1-0 text-purple62 w-20-0 mb-2-0'>
                            <div className=''>Max duration</div>
                            <div className='w-full flex justify-between items-center'>
                                <div className='bg-swap-card-module flex flex-col justify-between items-center border-2 border-swap-border rounded-2xl p-0-4 px-0-8 w-10-8'>
                                    <input className='bg-transparent text-1-5 text-right text-white w-full h-1-2 placeholder:text-white' placeholder='2'></input>
                                </div>
                                <div className='text-1-5 text-white'>MINUTES</div>
                            </div>
                        </div> */}
                        <div onClick={handleConnectWallet} className='w-20-0 h-4-7 bg-primary-purple flex justify-center items-center text-white font-light text-1-5 rounded-xl lg:w-35-0  transition ease-in duration-100 active:bg-opacity-50 active:translate-y-0-1'>
                            Connect Wallet
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Limit
