import React, { useEffect, useState } from 'react'
import TradeMenu from '@/components/TradeMenu'
import { liquidityOperateItems, tokenPair } from '@/dictionary/trade'
import SelectTokenPopup from '@/components/swap/selectTokenPopup'
import DialogPopup from '@/components/DialogPopup'

import Web3 from 'web3';
import { ethers } from 'ethers';
const Add = () => {
    //组件变量
    let [web3, setWeb3] = useState(null) //web3实例
    let [tokenList, setTokenList] = useState([ //兑换 from token list
        { title: 'WHAH', address: process.env.NEXT_PUBLIC_WHAH_ADDRESS, img: 'https://img1.baidu.com/it/u=1346098394,1826979592&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500' },
        { title: 'USD3', address: process.env.NEXT_PUBLIC_USD3_ADDRESS, img: 'https://www.3at.org/images/logo.png' },
        { title: 'GTC', address: process.env.NEXT_PUBLIC_GTC_ADDRESS, img: 'https://img2.baidu.com/it/u=3012966767,826073604&fm=253&fmt=auto&app=138&f=JPEG?w=253&h=253' },
        { title: 'SHTC', address: process.env.NEXT_PUBLIC_SHTC_ADDRESS, img: 'https://img0.baidu.com/it/u=2664965310,3686497550&fm=253&fmt=auto&app=138&f=JPEG?w=329&h=330' },
        { title: 'HTGC', address: process.env.NEXT_PUBLIC_HTGC_ADDRESS, img: 'https://img1.baidu.com/it/u=1713792594,3651390564&fm=253&fmt=auto?w=800&h=800' }])
    // let [tokenPairList, setTokenPairList] = useState(tokenPair)
    let pointList = ['10%', '20%', '50%', 'Full Range'] //手续费等级
    let [showSelectTokenPopup, setSelectTokenPopup] = useState(false) //显示隐藏token列表popup
    const [selectFromTokenInfo, changeSelectFromTokenInfo] = useState({}) //选择的tokenA信息
    const [selectToTokenInfo, changeSelectToTokenInfo] = useState({}) //选择的tokenB信息
    const [selectTokenType, setSelectTokenType] = useState('') //当前操作的token类型，From or to
    let [showFeeList, changeShowFeeList] = useState(false)
    const [feeList, setFeeLit] = useState([{ fee: 0.01, pick: 13 }, { fee: 0.05, pick: 82 }, { fee: 0.3, pick: 6 }, { fee: 1.00, pick: 0 }])
    let [selectFeeInfo, setSelectFeeInfo] = useState({ fee: 0.01, pick: 80 }) //选择的Fee信息
    let [minPrice, setMinPrice] = useState(1) //最低价
    let [maxPrice, setMaxPrice] = useState(1) //最高价
    let [showDialogPopup, setShowDialogPopup] = useState(false) //显示隐藏对话框
    let [dialogContent, setDialogContent] = useState('Network error, please try again') //对话框内容

    //组件函数
    let toggleSelectTokenPopup = (type) => { //操作token列表显示隐藏
        setSelectTokenType(type)
        setSelectTokenPopup(showSelectTokenPopup = !showSelectTokenPopup)
    }
    const handleFeeItem = (item) => { //点击费用选项
        setSelectFeeInfo(item)
        console.log(selectFeeInfo, item)
    }
    const selectTokenItem = (item) => { //点击token列表的某个代币
        console.log(item, selectTokenType)
        selectTokenType === 'from' ? changeSelectFromTokenInfo(item) : changeSelectToTokenInfo(item)
        toggleSelectTokenPopup()
    }
    const toggleSelectFeeList = () => { //显示隐藏
        changeShowFeeList(showFeeList = !showFeeList)
    }
    const handleAdd = (type) => { //点击增加价格按钮
        type === 'min' ? setMinPrice(++minPrice) : setMaxPrice(++maxPrice)
    }

    const handleReduce = (type) => { //点击减少价格按钮
        if (type === 'min' && minPrice <= 0) return
        if (type === 'max' && maxPrice <= 0) return
        type === 'min' ? setMinPrice(--minPrice) : setMaxPrice(--maxPrice)
        console.log(maxPrice)
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
    useEffect(() => {
        const initWeb3 = async () => { //初始化web3
            if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
                let web3Service = new Web3(window.ethereum)
                setWeb3(web3 = web3Service)
            } else {
                console.log('没安装metamask')
            }
        }
        initWeb3()
    }, [])
    return (
        <>
            <DialogPopup showDialogPopup={showDialogPopup} type='fail' content={dialogContent} closeMask={closeMask}></DialogPopup>
            <SelectTokenPopup showSelectTokenPopup={showSelectTokenPopup} tokenList={tokenList} onClose={toggleSelectTokenPopup} selectTokenItem={selectTokenItem}></SelectTokenPopup>
            <div className='pt-4-8 lg:pt-6-9 bg-black'>
                <div className='w-full flex flex-col justify-start items-center relative'>
                    <div className='w-full bg-swap-banner bg-center bg-cover bg-no-repeat absolute top-auto left-auto h-19-3 z-10'></div>
                    <div className='w-full py-1-0 relative z-10'>
                        <TradeMenu defaultIndex={1}></TradeMenu>
                    </div>
                    <div className='w-full flex flex-col justify-start items-center gradient-swap-module h-auto pb-8-0 backdrop-blur-xl text-white lg:min-h-screen relative z-10'>
                        <div className='lg:flex lg:justify-between lg:items-end lg:py-1-0 lg:border-b lg:border-voting-border lg:w-57-1 lg:mb-2-0'>
                            <div className='lg:flex lg:flex-col lg:justify-between mb-2-0'>
                                <div className='w-20-0 text-1-5 font-bold mt-2-6 lg:mt-auto text-menu-green'>Add V3 Liquidity</div>
                            </div>
                        </div>
                        <div className='w-20-0 lg:w-30-0 text-white text-1-0 mb-0-9'>
                            CHOOSE TOKEN PAIR
                        </div>
                        <div className='w-21-7 lg:w-34-9 flex flex-col justify-start items-center text-white'>
                            <div className='w-full flex flex-col justify-start items-center'>
                                <div className='w-full  px-2-3 py-1-1 bg-swap-card-module  border-2 border-swap-border rounded-2xl mb-0-7'>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex justify-start items-center'>
                                            <div className='w-2-2 h-2-2 rounded-full bg-white overflow-hidden'>
                                                <img src={selectFromTokenInfo.img}></img>
                                            </div>
                                            <div className='ml-1-0 text-1-2'>{selectFromTokenInfo.title || 'Select Token'}</div>
                                        </div>
                                        <div className='icon iconfont icon-down2' onClick={() => toggleSelectTokenPopup('from')}></div>
                                    </div>
                                </div>
                                <div className='w-full  px-2-3 py-1-1 bg-swap-card-module  border-2 border-swap-border rounded-2xl mb-0-7'>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex justify-start items-center'>
                                            <div className='w-2-2 h-2-2 rounded-full bg-white overflow-hidden'>
                                                <img src={selectToTokenInfo.img}></img>
                                            </div>
                                            <div className='ml-1-0 text-1-2'>{selectToTokenInfo.title || 'Select Token'}</div>
                                        </div>
                                        <div className='icon iconfont icon-down2' onClick={() => toggleSelectTokenPopup('to')}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {selectFromTokenInfo.title && selectToTokenInfo.title && <div className='w-full flex flex-col items-center justify-start' >
                            <div className='w-20-0 lg:w-30-0 text-white text-1-0 mb-0-9 mt-2-0 '>
                                FEE TIER
                            </div>
                            <div className=' bg-swap-card-module mb-1-0 flex flex-col justify-between items-center border-2 border-swap-border rounded-2xl px-1-0 py-0-7 w-21-7 lg:w-34-9 h-auto'>
                                <div className='flex justify-between items-center  w-full'>
                                    <div className='flex justify-start items-center'>
                                        <div className='text-1-2 font-semibold'> {selectFeeInfo.fee}% FEE TIER</div>
                                        <div className='bg-primary-red rounded-full px-0-8 py-0-1 text-0-8 flex justify-center items-center ml-0-4'>
                                            {selectFeeInfo.pick}% pick
                                        </div>
                                    </div>
                                    <div className='text-1-2 icon iconfont icon-down2 tex-1-0' onClick={() => { toggleSelectFeeList() }}></div>
                                </div>
                                {showFeeList && <div className='flex w-full justify-between items-center mt-0-4' >
                                    {feeList.map((item, index) => {
                                        return <div key={index} className='' onClick={() => { handleFeeItem(item) }}>
                                            <div className='flex justify-between flex-wrap items-center w-full'>
                                                <div className='token-pair-card w-4-0 border-2 py-0-3 border-swap-border flex rounded-lg flex-col justify-start items-center'>
                                                    <div className='flex justify-center items-baseline mb-0-2'>
                                                        <div className='font-bold text-1-0'>{item.fee}</div>
                                                        <div className='text-0-6'>%</div>
                                                    </div>
                                                    <div className={`bg-primary-purple rounded-full px-0-4 py-0-2 flex justify-center items-baseline`}>
                                                        <div className='text-0-6'>{item.pick}% pick</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })}
                                </div>}
                            </div>
                            <div className='w-20-0 lg:w-30-0 text-white text-1-0 mb-0-9 mt-2-0'>
                                DEPOSIT AMOUNT
                            </div>
                            <div className='w-21-7  lg:w-34-9 flex flex-col justify-start items-center mb-2-0'>
                                <div className='w-full mb-1-0'>
                                    <div className='bg-swap-card-module mb-1-0 flex flex-col justify-between items-center border-2 border-swap-border rounded-2xl px-1-0 py-0-7 w-full h-6-9'>
                                        <div className='flex justify-between items-center w-full'>
                                            <div className='flex justify-start items-center'>
                                                <div className='rounded-full w-1-5 h-1-5 bg-white overflow-hidden'>
                                                    <img src={selectFromTokenInfo.img}></img>
                                                </div>
                                                <div className='text-1-2 font-medium ml-1-0'>{selectFromTokenInfo.title}</div>
                                            </div>
                                        </div>
                                        <div className='w-full'>
                                            <input onFocus={handleInputFocus} className='bg-transparent  h-3-0 w-full '></input>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <div className='bg-swap-card-module mb-1-0 flex flex-col justify-between items-center border-2 border-swap-border rounded-2xl px-1-0 py-0-7 w-full h-6-9'>
                                        <div className='flex justify-between items-center w-full'>
                                            <div className='flex justify-start items-center'>
                                                <div className='rounded-full w-1-5 h-1-5 bg-white overflow-hidden'>
                                                    <img src=""></img>
                                                </div>
                                                <div className='text-1-2 font-medium ml-1-0'>{selectToTokenInfo.title}</div>
                                            </div>
                                        </div>
                                        <div className='w-full'>
                                            <input onFocus={handleInputFocus} className='bg-transparent  h-3-0 w-full '></input>
                                        </div>
                                    </div>
                                    <div className='text-white font-bold text-1-5 w-full flex justify-end'>43.3</div>
                                    <div className='text-white text-1-0 flex justify-end'>~2,140.76 USD</div>
                                </div>
                            </div>
                            <div className='w-19-0 lg:w-34-9 text-white text-1-5 mb-0-2'>
                                SET PRICE RANGE
                            </div>
                            <div className='text-white text-1-0 w-19-0 mb-0-6 lg:w-34-9'>
                                View prices in
                            </div>
                            <div className='view-prices-in w-21-7 py-0-7 rounded-xl border-2 border-swap-border flex justify-center items-center text-white mb-1-4 lg:w-34-9 lg:justify-between lg:px-2-0'>
                                <div className='text-1-0 font-bold'>{selectFromTokenInfo.title}</div>
                                <div className='text-menu-green icon iconfont icon-exchange mx-0-8 font-bold'></div>
                                <div className='text-1-0'>{selectToTokenInfo.title}</div>
                            </div>
                            <div className='my-1-0'>
                                <img src='/images/phone/empty.png'></img>
                            </div>
                            <div className='text-white text-1-2 mb-1-0'>
                                Your position will appear here.
                            </div>
                            <div className='w-21-7 lg:w-34-9 flex flex-col justify-start items-center'>
                                <div className='w-full py-1-2 px-1-0 bg-swap-card-module  border-2 border-swap-border rounded-2xl text-white mb-1-0'>
                                    <div className='font-bold text-1-5'>Min Price</div>
                                    <div className='text-white flex justify-between w-full items-baseline my-1-6'>
                                        <div onClick={() => handleReduce('min')} className='flex justify-center items-center w-3-0 h-3-0 rounded-full bg-menu-green transition duration-150 active:scale-105'>
                                            <div className='icon iconfont icon-jian'></div>
                                        </div>
                                        <div className='flex justify-center items-center text-1-2'>
                                            23
                                        </div>
                                        <div onClick={() => handleAdd('min')} className='flex justify-center items-center w-3-0 h-3-0 rounded-full bg-menu-green transition duration-150 active:scale-105'>
                                            <div className='icon iconfont icon-Add'></div>
                                        </div>
                                    </div>
                                    <div className='text-rank-title text-1-0 w-full text-right'>{selectToTokenInfo.title} per {selectFromTokenInfo.title}</div>
                                </div>
                                <div className='w-full py-1-2 px-1-0 bg-swap-card-module  border-2 border-swap-border rounded-2xl text-white mb-2-0'>
                                    <div className='font-bold text-1-5'>Max Price</div>
                                    <div className='text-white flex justify-between w-full items-baseline my-1-6'>
                                        <div onClick={() => handleReduce('max')} className='flex justify-center items-center w-3-0 h-3-0 rounded-full bg-menu-green transition duration-150 active:scale-105'>
                                            <div className='icon iconfont icon-jian'></div>
                                        </div>
                                        <div className='flex justify-center items-center text-1-2'>
                                            23
                                        </div>
                                        <div onClick={() => handleAdd('max')} className='flex justify-center items-center w-3-0 h-3-0 rounded-full bg-menu-green transition duration-150 active:scale-105'>
                                            <div className='icon iconfont icon-Add'></div>
                                        </div>
                                    </div>
                                    <div className='text-rank-title text-1-0 w-full text-right'>{selectToTokenInfo.title} per {selectFromTokenInfo.title}</div>
                                </div>
                            </div>
                            <div onClick={handleConnectWallet} className='w-21-7 lg:w-34-9 h-4-7 rounded-lg bg-swap-card-module  border-2 border-primary-purple flex justify-center items-center font-medium text-1-5 mb-1-8'>Full Range </div>
                            <div onClick={handleConnectWallet} className='w-21-7 lg:w-34-9 h-4-7 rounded-lg bg-primary-purple border-2 border-primary-purple flex justify-center items-center font-medium text-1-5 mb-2-0'>Connect Wallet </div>
                        </div>}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Add
