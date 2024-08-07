import React, { useEffect, useState } from 'react'
import Popup from 'antd-mobile/es/components/popup'
import { statisticsTimeItems } from '@/dictionary/trade'
import TradingViewChart from '@/pages/futures/components/tradingViewWidget'

const StatisticsPopup = ({ showStatisticsPopup, onClose, fromTokenInfo, toTokenInfo }) => {
    let [currentTime, setCurrentTime] = useState(1)
    let [symbol, setSymbol] = useState('BINANCE:BTCUSDT')
    let [tokenToUSDT, setTokenToUSDT] = useState('')
    let handleTime = ({ id }) => {
        setCurrentTime(currentTime = id)
    }
    useEffect(() => {
        const getTokenType = () => {
            return Number(Number(localStorage.getItem(`${toTokenInfo.value}`) / localStorage.getItem(`${fromTokenInfo.value}`)))
        }
        setTokenToUSDT(() => getTokenType())
        console.log(tokenToUSDT)
    }, [toTokenInfo, fromTokenInfo])
    return (

        <div>
            <Popup
                visible={showStatisticsPopup}
                onClose={onClose}
                bodyStyle={{ minHeight: '70vh', background: 'none' }}
            >
                <div className='swap-popup-gradient rounded-t-3xl flex flex-col justify-start items-center text-white' style={{ minHeight: '70vh' }}>
                    <div className='flex flex-col justify-start items-center w-21-3 lg:w-full lg:px-1-6'>
                        <div className='flex justify-between items-center w-full pt-1-7 mb-2-0'>
                            <div className='flex justify-start items-center'>
                                <div className='bg-futures-word w-2-2 h-2-2 rounded-full overflow-hidden'>
                                    <img src={fromTokenInfo.img}></img>
                                </div>
                                <div className='bg-white w-2-2 h-2-2 rounded-full ml-0-3 overflow-hidden'>
                                    <img src={toTokenInfo.img}></img>
                                </div>
                                <div className='text-1-5 ml-0-4'>{fromTokenInfo.title} / {toTokenInfo.title}</div>
                            </div>
                            <div className='flex justify-end items-center'>
                                {/* <div className='flex justify-center items-center w-3-3 h-3-3 rounded-full bg-voting-type'>
                                    <div className='icon iconfont icon-exchange text-menu-green font-bold' style={{ fontSize: '1.8rem' }}></div>
                                </div> */}
                                <div className='flex justify-center items-center ml-1-0' onClick={() => onClose()}>
                                    <div className='icon iconfont icon-close text-swap-second-title text-1-4' ></div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex justify-between items-baseline'>
                            <div className='flex justify-start items-baseline'>
                                <div className='text-2-0'>{Number(tokenToUSDT).toFixed(4)}</div>
                                <div className='text-1-0 ml-0-8'>{fromTokenInfo.title} / {toTokenInfo.title}</div>
                            </div>
                            {/* <div className='text-menu-green tex-1-0'>
                                +0.357 (0.17%)
                            </div> */}
                        </div>
                        {/* <div className='w-full text-swap-second-title text-1-0 mb-1-0'>May  30 ,  2024 ,  03:11  PM</div> */}
                    </div>
                    {/* <div className='w-22-6 flex justify-between items-center mb-2-0 lg:w-full lg:justify-end lg:pr-1-6'>
                        {statisticsTimeItems.map((item, index) => {
                            return <div key={index} onClick={() => handleTime(item)} className={`w-5-0  h-1-9 rounded-lg text-white text-0-9 flex justify-center items-center lg:ml-1-0 ${currentTime === item.id ? 'voting-clicked-button' : 'bg-voting-type'}`}>
                                {item.title}
                            </div>
                        })}
                    </div> */}
                    <div className='w-21-3 h-20-2 bg-swap-second-title rounded-lg flex justify-center items-center lg:w-51-6'>
                        {/* this is statistics line */}
                        <TradingViewChart symbol={symbol}></TradingViewChart>
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export default StatisticsPopup
