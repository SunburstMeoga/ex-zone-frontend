import React, { useState } from 'react'
import { strykeInfoItems, transTypeItems, strykeDateItems, dataList } from '@/dictionary/pools'
import Switch from 'antd-mobile/es/components/switch'
import TradeMenu from '@/components/TradeMenu'
import TradingViewChart from '../futures/components/tradingViewWidget'
import DialogPopup from '@/components/DialogPopup'

const Stryke = () => {
    let [transType, setTransType] = useState(1)
    let [dataType, setDataType] = useState(1)
    let [filterDate, setFilterDate] = useState(1)
    let dataItems = dataList
    let strikesList = [{ type: 'up' }, { type: 'up' }, { type: 'down' }, { type: 'down' }]
    let dataTypeItems = [{ id: 1, title: 'Trade' }, { id: 2, title: 'Liquidity Provision' }]
    let [fromTokenInfo, setFromTokenInfo] = useState({ title: 'BTC', token: 'BINANCE:BTCUSDT', img: 'https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC--big.svg', content: 'Binance Chain Native Token', value: 'binancecoin', balance: 234.20 })
    let [toTokenInfo, setToTokenInfo] = useState({ title: 'USD3', token: 'BINANCE:BNBUSDT', img: 'https://www.3at.org/images/logo.png', content: 'Binance Chain Native Token', value: 'ethereum', balance: 100023.23 })
    let [showDialogPopup, setShowDialogPopup] = useState(false)
    let [dialogContent, setDialogContent] = useState('Network error, please try again')
    let handleTransTypeItem = ({ id }) => {
        setTransType(transType = id)
    }
    let handleTypeItem = ({ id }) => {
        setDataType(dataType = id)
    }
    let handleDateItem = ({ id }) => {
        setFilterDate(filterDate = id)
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
    return (
        <>
            <DialogPopup showDialogPopup={showDialogPopup} type='fail' content={dialogContent} closeMask={closeMask}></DialogPopup>

            <div className='pt-4-8 lg:pt-6-9 bg-black'>
                <div className='w-full py-1-0 relative z-10'>
                    <TradeMenu defaultIndex={3}></TradeMenu>
                </div>
                <div className='flex flex-col justify-start items-center w-full'>
                    <div className='w-22-0 flex justify-between items-center mb-1-0'>
                        <div className='flex justify-start items-center'>
                            <div className='flex justify-start items-center'>
                                <div className='w-1-6 h-1-6 rounded-full bg-white overflow-hidden'>
                                    <img src={fromTokenInfo.img}></img>
                                </div>
                                <div className='w-1-7 h-1-7 rounded-full bg-white overflow-hidden -ml-0-7 border border-black'>
                                    <img src={toTokenInfo.img}></img>
                                </div>
                            </div>
                            <div className='text-1-2 font-medium ml-1-0'>USD3</div>
                            {/* <div className='icon iconfont icon-down ml-0-8'></div> */}
                        </div>
                    </div>
                    <div className='w-22-0 flex flex-col justify-start items-center pb-1-0'>
                        {strykeInfoItems.map((item, index) => {
                            return <div key={index} className='flex justify-between items-center text-voting-border text-0-9 py-0-4 border-b border-dashed border-voting-border w-full'>
                                <div >{item.title}</div>
                                <div >{item.content}</div>
                            </div>
                        })}
                    </div>
                    <div className='w-full mt-0-7 bg-syrup-module flex flex-col justify-start items-center h-22-0'>
                        {/* this is chart */}
                        <TradingViewChart symbol={'BINANCE:BTCUSDT'}></TradingViewChart>
                    </div>
                    <div className='w-full flex flex-col justify-start items-center bg-white text-swap-border'>
                        <div className='px-1-0 w-full my-1-0 flex justify-between items-center'>
                            <div className='flex justify-start items-center rounded-lg overflow-hidden bg-futures-tabs text-futures-word'>
                                {transTypeItems.map((item, index) => {
                                    return (
                                        <div
                                            onClick={() => handleTransTypeItem(item)}
                                            className={`w-4-2 h-2-2 text-0-9 flex justify-center items-center ${item.id === transType ? 'bg-primary-purple text-white' : ''}`}
                                            key={index}
                                        >
                                            {item.title}
                                        </div>
                                    );
                                })}
                            </div>
                            <div className='text-swap-border text-0-7'>Powered by</div>
                        </div>
                        {transType === 1 ? <div className='w-full overflow-x-scroll'>
                            <div className='min-w-max flex justify-start items-center text-swap-border text-0-7 pl-1-0 py-0-8 bg-setting-button font-medium'>
                                <div className='w-7-5 shrink-0'>Strike</div>
                                <div className='w-7-5 shrink-0'>Liquidity</div>
                                <div className='w-7-5 shrink-0'>Options Available</div>
                                <div className='w-7-5 shrink-0'>Utilization</div>
                                <div className='w-7-5 shrink-0'>Fees APR</div>
                                <div className='w-3-0 shrink-0'></div>
                            </div>

                            {dataItems.map((item, index) => {
                                return (
                                    <div key={index} className='min-w-max flex justify-start items-center text-swap-border text-0-7 py-1-0 border-b border-dashed border-voting-border pl-1-0 flex-1'>
                                        <div className='w-7-5 shrink-0 font-semibold'>{item.strike}</div>
                                        <div className='w-7-5 shrink-0'>
                                            <div className='font-semibold'>$ {item.liqidity}</div>
                                            <div>{item.weht} WETH</div>
                                        </div>
                                        <div className='w-7-5 shrink-0'>
                                            <div className='font-semibold'>{item.options}</div>
                                            <div>$ {item.optionsDollaer}</div>
                                        </div>
                                        <div className='w-7-5 shrink-0 font-semibold'>{item.apr}</div>
                                        <div className='w-7-5 shrink-0 font-semibold'>{item.ut}</div>
                                        <div className='w-3-0 shrink-0'>
                                            <div onClick={handleConnectWallet} className='flex justify-center items-center rounded-full border border-menu-green text-menu-green h-2-0 w-2-0'>
                                                <div className='icon iconfont icon-Add'></div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                        </div> : <div>
                            <img src='/images/phone/empty.png'></img>
                        </div>}
                        <div className='text-white flex justify-center items-baseline my-1-0'>
                            <div className='flex justify-center items-center w-1-7 h-1-7 rounded-full bg-primary-purple'>
                                <div className='icon iconfont icon-left-arrow'></div>
                            </div>
                            <div className='flex justify-center items-center px-1-0 text-0-8 text-swap-border'>
                                Page 1 of 1
                            </div>
                            <div className='flex justify-center items-center w-1-7 h-1-7 rounded-full bg-primary-purple'>
                                <div className='icon iconfont icon-left-arrow rotate-180'></div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-syrup-module w-full pt-1-7 flex flex-col justify-start items-center'>
                        <div className='border-b border-voting-border flex justify-start items-center text-0-9 mb-1-0 w-full'>
                            {dataTypeItems.map((item, index) => {
                                return <div onClick={() => handleTypeItem(item)} key={index} className={`py-1-2 ml-3-2 border-b-2 ${dataType === item.id ? 'font-semibold text-menu-green border-menu-green' : 'border-transparent'}`}>{item.title}</div>
                            })}
                        </div>
                        <div className='w-22-0'>
                            <div className='w-full text-0-7 text-futures-word font-semibold mb-1-0'>Expiry</div>
                            <div className='w-full bg-futures-tabs rounded-lg flex justify-between items-center text-voting-type text-1-0 font-semibold mb-1-0'>
                                {strykeDateItems.map((item, index) => {
                                    return <div onClick={() => handleDateItem(item)} key={index} className={`flex-1 py-0-4 flex justify-center items-center  rounded-lg ${item.id === filterDate ? 'bg-primary-purple text-white' : ''}`}>{item.title}</div>
                                })}
                            </div>
                            <div className='w-full border-b border-dashed border-voting-border mb-1-0'></div>
                            <div className='w-full flex justify-between items-center text-futures-word mb-1-0'>
                                <div className='text-0-7 font-semibold'>Strikes</div>
                                <div className='flex justify-end items-center'>
                                    <div className='text-0-7 font-semibold mr-1-0'>Edit amounts for all</div>
                                    <div>
                                        <Switch
                                            defaultChecked
                                            style={{
                                                '--checked-color': '#29E5AD',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full mb-1-0'>
                                <div className='px-2-0'>
                                    <img src='/images/phone/empty.png'></img>
                                </div>
                                {/* {strikesList.map((item, index) => {
                                    return <div key={index} className='flex justify-between items-center mb-0-6'>
                                        <div className='icon iconfont text-futures-word icon-close'></div>
                                        <div className={`border rounded-lg px-0-4 flex justify-start items-center h-1-7 ${item.type === 'up' ? 'bg-green20 border-menu-green text-menu-green ' : 'bg-red20 border-primary-red text-primary-red'}`}>
                                            <div className='text-0-7 mr-2-0'>$ 3446.05234</div>
                                            <div className={`text-0-8 icon iconfont icon-a-28Dshubiaojiantou ${item.type === 'up' ? 'rotate-45' : 'rotate-180'}`}></div>
                                        </div>
                                        <div className='flex justify-between items-center w-11-5 px-0-4  h-1-7 border border-pools-border rounded-lg text-futures-word bg-futures-input-module text-0-7 font-medium'>
                                            <div className=''>0.0HAH</div>
                                            <div className=''>MAX</div>
                                        </div>
                                    </div>
                                })} */}
                            </div>
                            <div className='w-full'>
                                <div className='flex justify-between items-center'>
                                    <div onClick={handleConnectWallet} className='w-10-7 h-2-4 flex justify-center items-center text-white font-semibold text-0-8 rounded-lg bg-menu-green duration-100 ease-linear transition active:translate-y-0-1'>
                                        <div>0 Call strikes</div>
                                        <div className='icon iconfont icon-down1 text-1-4 ml-1-6'></div>
                                    </div>

                                    <div onClick={handleConnectWallet} className='w-10-7 h-2-4 flex justify-center items-center text-white font-semibold text-0-8 rounded-lg bg-primary-red duration-100 ease-linear transition active:translate-y-0-1'>
                                        <div>0 Put strikes</div>
                                        <div className='icon iconfont icon-down1 text-1-4 ml-1-6'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full border-b border-dashed border-voting-border my-1-0'></div>
                            <div className='w-full flex justify-between items-center text-futures-word'>
                                <div className='text-0-7 font-semibold'>Balance</div>
                                <div className='flex justify-end items-center'>
                                    <div className='text-0-7 font-semibold'>
                                        <span className='text-white'>0</span> HAH <span className='text-white'>0</span> USDT
                                    </div>

                                </div>
                            </div>
                            <div className='w-full border-b border-dashed border-voting-border my-1-0'></div>
                            <div className='w-full text-0-7 text-futures-word font-semibold mb-1-0'>Auto Exercisers</div>
                            <div className='w-full flex justify-between items-center text-futures-word mb-1-0'>
                                <div className='text-0-7 font-semibold text-purple62'>
                                    <div className=''>Time Based</div>
                                    <div className='w-13-7'>Options are automatically exercised 5 minutes before expiry.</div>
                                </div>
                                <div className='flex justify-end items-center'>
                                    <div>
                                        <Switch
                                            defaultChecked
                                            style={{
                                                '--checked-color': '#29E5AD',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div onClick={handleConnectWallet} className='w-full py-1-0 bg-bridge-disable-button text-bridge-disable-word my-1-0 rounded-xl flex justify-center items-center mb-2-0'>Purchase</div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Stryke
