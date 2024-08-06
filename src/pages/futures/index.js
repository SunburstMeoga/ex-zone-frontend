import React, { useEffect, useState } from 'react'
import Slider from 'react-slider';
import { perpDetailsItems, pricePointItems, futuresOrderTypeItems, slPointItems } from '@/dictionary/pools'
import TradingViewChart from './components/tradingViewWidget';
import SelectTokenPopup from '@/components/swap/selectTokenPopup'
import axios from 'axios'
import AnimatedNumber from "@/components/AnimatedNumber";
import TradeMenu from '@/components/TradeMenu';
const Futures = () => {
    let [displayType, setDisplayType] = useState(1)
    let [contractType, setContractType] = useState(1)
    let [operatingType, setOperatingType] = useState(1)
    let [pricePoint, setPricePoint] = useState(1)
    let [slPoint, setSLPoint] = useState(1)

    let [orderType, setOrderType] = useState(1)
    let [prices, setPrices] = useState([]);
    let displayTypeItems = [{ id: 1, title: 'Chart' }, { id: 2, title: 'Info' }]
    let contractTypeItems = [{ id: 1, title: 'Perp' }, { id: 2, title: 'Dumb' }]
    let operatingTypeItems = [{ id: 1, title: 'Long' }, { id: 2, title: 'Short' }]
    let [symbol, setSymbol] = useState('BINANCE:BTCUSDT')
    let [symbolImg, setSymbolImg] = useState('https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC--big.svg')
    let [showSelectTokenPopup, setSelectTokenPopup] = useState(false)
    let [loading, setLoading] = useState(true);
    let [tokenValue, setTokenValue] = useState('binancecoin')
    let [value, setValue] = useState(0);
    let [showIntervalTime, setShowIntervalTime] = useState(false)
    let [tpPrice, setTPPrice] = useState('+100%')
    let [slPrice, setSLPrice] = useState('None')
    // let [changePrice, isChangePrice] = useState(false)
    let handleDisplayItems = ({ id }) => {
        setDisplayType(displayType = id)
    }
    let handleContractItems = ({ id }) => {
        setContractType(contractType = id)
    }
    let handleOperatingItems = ({ id }) => {
        setOperatingType(operatingType = id)
    }
    let handlePricePointItems = ({ id, title }) => {
        setPricePoint(pricePoint = id)
        setTPPrice(tpPrice = title)
        // isChangePrice(true)
    }
    let handleSLPointItems = ({ id, title }) => {
        setSLPoint(slPoint = id)
        setSLPrice(slPrice = title)
        // isChangePrice(true)
    }
    let handleOrderTypeItems = ({ id }) => {
        setOrderType(orderType = id)
    }
    let toggleSelectTokenPopup = () => {
        console.log('object')
        setSelectTokenPopup(showSelectTokenPopup = !showSelectTokenPopup)
    }
    let stepChange = (newValue) => {
        console.log(newValue)
        setValue(value = newValue)
    }
    let selectTokenItem = ({ token, img, value }) => {
        console.log('object')
        setSymbol(symbol = token)
        setSymbolImg(symbolImg = img)
        setTokenValue(tokenValue = value)
        setSelectTokenPopup(showSelectTokenPopup = !showSelectTokenPopup)
    }
    let toggleInterValTime = () => {
        setShowIntervalTime(showIntervalTime = !showIntervalTime)
    }
    const intervalNumber = () => {
        setInterval(() => {
            return 2000 + Math.floor(Math.random() * 10);
            // console.log(2000 + Math.floor(Math.random() * 10))
        }, 2000);
    }
    useEffect(() => {
        const fetchPrices = async () => {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin&vs_currencies=usd&include_24hr_change=true');
                const data = await response.json();
                console.log('API Response:', data); // 打印完整的 API 响应
                setPrices(data);
                setLoading(false);
                // setLoading(false);
            } catch (error) {
                console.error('Error fetching prices:', error);
                // setError(error);
                // setLoading(false);
                setLoading(false);
            }
        };

        fetchPrices();
    }, [])
    return (
        <>
            <div className='pt-4-8 lg:pt-6-9 bg-black'>
                <div className='w-full py-1-0 relative z-10'>
                    <TradeMenu defaultIndex={2}></TradeMenu>
                </div>
                <div className='flex flex-col justify-start items-center w-full'>
                    <div className='xl:flex justify-between items-start w-full xl:px-3-8 '>
                        <div className='xl:order-2 flex flex-col items-center xl:min-h-full xl:flex-1 xl:flex-grow'>
                            <div className='w-22-0 flex justify-between items-center lg:w-38-7 xl:w-79-9 '>
                                <div className='flex justify-start items-center rounded-lg transition ease-linear duration-100 active:translate-y-0-1 active:opacity-70' onClick={() => { toggleSelectTokenPopup() }}>
                                    <div className='w-1-6 h-1-6 rounded-full bg-futures-word overflow-hidden'>
                                        <img src={symbolImg}></img>
                                    </div>
                                    <div className='text-1-2 font-medium ml-0-2 text-white mt-0-3'>{symbol}</div>
                                    <div className='icon iconfont icon-down ml-0-8 lg:text-white'></div>
                                </div>
                                {!loading && <div className='flex justify-end items-baseline text-menu-green'>
                                    <div className='text-1-0 font-medium'>
                                        {`${prices[tokenValue].usd.toFixed(2)}`}
                                    </div>
                                    <div className={`text-0-7 font-medium ml-0-4 ${prices.binancecoin.usd_24h_change < 0 ? 'text-primary-red' : ''}`}>
                                        {`${prices[tokenValue].usd_24h_change > 0 ? '+' : ''}`}{`${prices[tokenValue].usd_24h_change.toFixed(2)} %`}
                                    </div>
                                </div>}
                            </div>
                            <div className='w-full mt-0-7 bg-syrup-module pt-1-0 flex flex-col justify-start items-center lg:bg-none xl:border border-liquid-staking-border xl:rounded-xl xl:p-1-3  xl:bg-pad-pools-border xl:flex-grow'>
                                {/* <div className='w-22-0 flex justify-start items-center lg:w-38-7 xl:w-79-9'>
                                    {displayTypeItems.map((item, index) => {
                                        return <div key={index} onClick={() => handleDisplayItems(item)} className={`text-white text-1-0 ${item.id !== 1 ? 'ml-2-0' : ''} ${item.id === displayType ? 'font-bold' : ''}`}>
                                            {item.title}
                                        </div>
                                    })}
                                </div> */}
                                {/* <div className='w-22-0 flex justify-between items-center mt-1-2 lg:w-38-7 text-white xl:w-79-9 '>
                                    <div className='flex justify-start items-center'>
                                        <div className='rounded-xl border border-liquid-staking-border bg-primary-50 px-0-8 py-0-2 flex justify-start items-center'>
                                            <div className='text-0-9 mr-1-0'>1s</div>
                                            <div className='icon iconfont icon-down1 text-1-0'></div>

                                        </div>
                                        <div className='rounded-xl border border-liquid-staking-border bg-primary-50 px-0-8 py-0-2 flex justify-start items-center ml-1-0'>
                                            <div className='text-0-9 mr-1-0 text-primary-60 icon iconfont icon-zhuzhuangtu'></div>
                                            <div className='icon iconfont icon-down1 text-1-0'></div>
                                        </div>
                                    </div>
                                    <div className='flex justify-end items-center text-1-3'>
                                        <div className='icon iconfont icon-setting '></div>
                                        <div className='icon iconfont icon-fangda ml-1-4'></div>
                                        <div className='icon iconfont icon-xiangji1 ml-1-4'></div>
                                    </div>
                                </div> */}
                                <div className='w-11/12 rounded-xl overflow-hidden border border-liquid-staking-border h-22-0 flex justify-center items-center mt-1-0 mb-2-0 lg:w-38-8 xl:w-full xl:flex-grow xl:border-none'>
                                    {/* this is chart */}
                                    <TradingViewChart symbol={symbol}></TradingViewChart>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex flex-col justify-start items-center bg-syrup-module pt-2-0 lg:bg-none xl:pt-0-1 xl:order-1 xl:items-start'>
                            <div className='w-22-0 rounded-xl border border-swap-copy-icon py-1-2 mb-2-0 lg:w-38-7 xl:w-30-5 xl:mb-0-1  xl:bg-pad-pools-border'>
                                <div className='flex w-full flex-col justify-start items-center px-1-0'>
                                    <div className='w-full flex justify-around items-center mb-1-0'>
                                        {contractTypeItems.map((item, index) => {
                                            return <div onClick={() => handleContractItems(item)} key={index} className={`text-1-0 ${item.id === contractType ? 'text-menu-green text-bold' : 'text-futures-word'}`}>
                                                {item.title}
                                            </div>
                                        })}
                                    </div>
                                    {contractType === 1 && <div className='w-full flex justify-between items-center rounded-xl overflow-hidden bg-futures-tabs text-futures-word mb-0-7'>
                                        {operatingTypeItems.map((item, index) => {
                                            return <div onClick={() => handleOperatingItems(item)} key={index} className={`flex-1 flex justify-center h-2-3 items-center border  ${item.id === operatingType ? 'bg-primary-purple text-white border-primary-purple' : 'border-futures-word'}`}>{item.title}</div>
                                        })}
                                    </div>}
                                    {contractType === 1 && <div className='w-full flex justify-between items-center font-semibold text-1-0 mb-0-7'>
                                        <div className='text-futures-word'>
                                            Market Limit
                                        </div>
                                        <div className='text-white'>50x</div>
                                    </div>}

                                    <div className='w-full bg-futures-input-module border border-pools-border rounded-xl h-2-2 flex justify-between items-center px-1-1 mb-1-5'>
                                        <div className='text-futures-word text-0-8'>collateral</div>
                                        <div className='flex justify-end items-center text-white'>
                                            <div className='text-0-8 font-medium'>USDT</div>
                                            {/* <div className='icon iconfont icon-down1 text-1-0 ml-0-4'></div> */}
                                        </div>
                                    </div>
                                    <div className='w-full mb-1-4'>
                                        {/* <Slider ticks step={10} style={{ '--fill-color': '#29E5AD' }} /> */}
                                        <Slider
                                            value={value}
                                            onChange={stepChange}
                                            min={0}
                                            max={100}
                                            step={1}
                                            thumbClassName="thumb"
                                            trackClassName="track"
                                            railClassName="rail"
                                            markClassName="mark"
                                        />
                                    </div>
                                    {!loading && <div className='w-full flex justify-between items-center font-semibold text-0-7 mb-0-7'>
                                        <div className='text-futures-word'>
                                            {value}% ≈ ${`${value === 0 ? 0 : (prices[tokenValue].usd * value * 0.01).toFixed(2)}`}
                                        </div>
                                        <div className='text-white'>
                                            <span className='text-futures-word'>MAX</span> {`${prices[tokenValue].usd.toFixed(2)}`}
                                        </div>
                                    </div>}
                                    <div className='w-full bg-futures-input-module border border-pools-border rounded-xl h-2-2 flex justify-between items-center px-1-1 mb-0-7' onClick={() => toggleInterValTime()}>
                                        <div className='text-futures-word text-0-8'>TP / SL</div>
                                        <div className='flex justify-end items-center'>
                                            <div className={`text-0-8 font-medium text-white `} >{tpPrice} | {slPrice}</div>
                                        </div>
                                    </div>
                                    <div className='w-full bg-futures-input-module border border-pools-border rounded-xl h-2-2 flex justify-between items-center px-1-1 mb-1-6'>
                                        <div className='text-futures-word text-0-8'>Slippage </div>
                                        <div className='flex justify-end items-center flex-1 '>
                                            <div className='text-0-8 font-medium text-white flex justify-start items-center '>
                                                <input className='w-full h-full border-none bg-transparent text-white text-right mr-0-2' type='number' placeholder="0" value={value} disabled></input> %
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-0-9 font-bold w-full h-2-2 flex justify-center items-center bg-primary-purple rounded-xl mb-1-6 active:bg-opacity-90 text-white'>Connect</div>
                                </div>
                                {showIntervalTime && <div className='mb-1-6 w-full bg-futures-price rounded-t-3xl flex flex-col justify-start items-center py-1-4 text-swap-copy-icon px-1-0'>
                                    <div className='w-full flex justify-between items-center px-1-0 h-2-4 rounded-xl text-1-0 font-medium border border-setting-button bg-white mb-0-5'>
                                        <div className=''>TP Price</div>
                                        <div> ${`${value === 0 ? 0 : (prices[tokenValue].usd * value * 0.01).toFixed(2)}`} {tpPrice}</div>
                                    </div>
                                    <div className='w-full flex justify-between items-center mb-0-5'>
                                        {pricePointItems.map((item, index) => {
                                            return <div onClick={() => handlePricePointItems(item)} key={index} className={`flex justify-center items-center px-1-0 h-2-4 rounded-xl text-0-7 font-medium border  bg-white ${item.id === pricePoint ? 'border-menu-green' : 'border-setting-button'}`}>{item.title}</div>
                                        })}
                                    </div>
                                    <div className='w-full flex justify-between items-center px-1-0 h-2-4 rounded-xl text-1-0 font-medium border border-setting-button bg-white mb-0-5'>
                                        <div className=''>LP Price</div>
                                        <div> ${`${value === 0 ? 0 : (prices[tokenValue].usd * value * 0.01).toFixed(2)}`} {slPrice}</div>
                                    </div>
                                    <div className='w-full flex justify-between items-center mb-0-5'>
                                        {slPointItems.map((item, index) => {
                                            return <div onClick={() => handleSLPointItems(item)} key={index} className={`flex justify-center items-center px-1-0 h-2-4 rounded-xl text-0-7 font-medium border bg-white ${item.id === slPoint ? 'border-menu-green' : 'border-setting-button'}`}>{item.title}</div>
                                        })}
                                    </div>
                                </div>}
                                <div className='w-full flex flex-col justify-start items-center px-1-0'>
                                    {perpDetailsItems.map((item, index) => {
                                        return <div key={index} className='flex justify-between items-center w-full py-0-6 text-primary-60 text-0-7'>
                                            <div className=''>{item.title}</div>
                                            {/* <div className=''>{item.content}</div> */}
                                            <div className='flex justify-end'>
                                                {<AnimatedNumber number={item.amount} />} <div className='ml-0-2'>USD</div>
                                            </div>

                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col justify-start items-center bg-syrup-module py-2-0 xl:py-0-1 xl:my-2-0 xl:bg-none xl:px-3-7'>
                        <div className='flex flex-col justify-start items-center w-full px-1-0 xl:p-0-1'>
                            <div className='w-22-0 rounded-xl border border-swap-copy-icon py-1-2 px-1-0  flex flex-col justify-start items-center lg:w-38-7 xl:w-full xl:bg-pad-pools-border'>
                                <div className='w-full flex justify-between items-center rounded-xl overflow-hidden bg-futures-tabs text-futures-word mb-1-7 '>
                                    {futuresOrderTypeItems.map((item, index) => {
                                        return <div onClick={() => handleOrderTypeItems(item)} key={index} className={`flex-1 flex justify-center h-2-3 items-center   ${item.id === orderType ? 'bg-primary-purple text-white' : ''}`}>{item.title}</div>
                                    })}
                                </div>
                                <div className='flex w-full justify-between items-center mb-2-0'>
                                    <div className='flex justify-start items-center rounded-lg border border-pools-border'>
                                        {contractTypeItems.map((item, index) => {
                                            return <div onClick={() => handleContractItems(item)} key={index} className={` text-1-0 px-0-7 py-0-3 rounded-lg ${contractType === item.id ? 'text-white font-bold bg-menu-green' : 'text-swap-copy-icon'}`}>
                                                {item.title}
                                            </div>
                                        })}
                                    </div>
                                    <div className='text-menu-green'>Close</div>

                                </div>
                                <div className='w-12-8 mb-1-0'>
                                    <img src='/images/phone/empty.png'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SelectTokenPopup showSelectTokenPopup={showSelectTokenPopup} onClose={toggleSelectTokenPopup} isToken={true} selectTokenItem={selectTokenItem}></SelectTokenPopup>
        </>
    )
}

export default Futures
