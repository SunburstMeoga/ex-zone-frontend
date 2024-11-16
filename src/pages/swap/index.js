import React, { useEffect, useState } from 'react'
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
import ConnectWalletButton from "@/components/connectWallet";
import Web3 from 'web3';
import { ethers } from 'ethers';
import SwapRouterABI from '@/abi/SwapRouter'
import PositionManagersABI from '@/abi/PositionManager'
import ERC20ABI from '@/abi/ERC20'
import ContractService from '@/services/contract/contractServices'
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
    let [fromTokenInfo, setFromTokenInfo] = useState({ title: 'WHAH', address: process.env.NEXT_PUBLIC_WHAH_ADDRESS, img: 'https://img1.baidu.com/it/u=1346098394,1826979592&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500' })
    let [toTokenInfo, setToTokenInfo] = useState({})
    let [tokenType, setTokenType] = useState('')
    let [toTokenPrice, setToTokenPrice] = useState('')
    let [fromTokenPrice, setFromTokenPrice] = useState('')
    let [showDialogPopup, setShowDialogPopup] = useState(false)

    let [web3, setWeb3] = useState(null)
    let [erc20ContractService, setERC20ContractService] = useState(null)
    let [fromTokenList, setFromTokenList] = useState([ //兑换 from token list
        { title: 'WHAH', address: process.env.NEXT_PUBLIC_WHAH_ADDRESS, img: 'https://img1.baidu.com/it/u=1346098394,1826979592&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500' },
        { title: 'GTC', address: process.env.NEXT_PUBLIC_GTC_ADDRESS, img: 'https://img2.baidu.com/it/u=3012966767,826073604&fm=253&fmt=auto&app=138&f=JPEG?w=253&h=253' },
        { title: 'SHTC', address: process.env.NEXT_PUBLIC_SHTC_ADDRESS, img: 'https://img0.baidu.com/it/u=2664965310,3686497550&fm=253&fmt=auto&app=138&f=JPEG?w=329&h=330' },
        { title: 'HTGC', address: process.env.NEXT_PUBLIC_HTGC_ADDRESS, img: 'https://img1.baidu.com/it/u=1713792594,3651390564&fm=253&fmt=auto?w=800&h=800' }])
    let [toTokenList, setToTokenList] = useState([ //兑换 to token list
        { title: 'WHAH', address: process.env.NEXT_PUBLIC_WHAH_ADDRESS, img: 'https://img1.baidu.com/it/u=1346098394,1826979592&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500' },
        { title: 'GTC', address: process.env.NEXT_PUBLIC_GTC_ADDRESS, img: 'https://img2.baidu.com/it/u=3012966767,826073604&fm=253&fmt=auto&app=138&f=JPEG?w=253&h=253' },
        { title: 'SHTC', address: process.env.NEXT_PUBLIC_SHTC_ADDRESS, img: 'https://img0.baidu.com/it/u=2664965310,3686497550&fm=253&fmt=auto&app=138&f=JPEG?w=329&h=330' },
        { title: 'HTGC', address: process.env.NEXT_PUBLIC_HTGC_ADDRESS, img: 'https://img1.baidu.com/it/u=1713792594,3651390564&fm=253&fmt=auto?w=800&h=800' }])
    const handleWalletConnect = (address) => { //点击连接钱包按钮
        console.log(address)
    };
    const handleApproveAndSwap = async () => { //点击approve and swap
        if (!toTokenInfo.title) { //没有选择to token 起弹窗
            setDialogContent('Select to token')
            toggleDialogPopup()
            return
        }
        // console.log(window.ethereum, PositionManagersABI, process.env.NEXT_PUBLIC_POSITION_MANAGER_ADDRESS)
        try {
            const fromTokenService = new ContractService(window.ethereum, ERC20ABI, fromTokenInfo.address ? fromTokenInfo.address : process.env.NEXT_PUBLIC_WHAH_ADDRESS)
            const toTokenService = new ContractService(window.ethereum, ERC20ABI, toTokenInfo.address)
            const positionManagerService = new ContractService(window.ethereum, PositionManagersABI, process.env.NEXT_PUBLIC_POSITION_MANAGER_ADDRESS)
            const swapRouterService = new ContractService(window.ethereum, SwapRouterABI, process.env.NEXT_PUBLIC_SWAP_ROUTER_ADDRESS);
            console.log('PositionManager', positionManagerService)
            let approveFromToken = await fromTokenService.sendMethod(
                "approve",
                localStorage.getItem('account'),
                [process.env.NEXT_PUBLIC_WHAH_ADDRESS, ethers.MaxUint256]
            );
            let approveToToken = await toTokenService.sendMethod(
                "approve",
                localStorage.getItem('account'),
                [process.env.NEXT_PUBLIC_WHAH_ADDRESS, ethers.MaxUint256]
            );
            const FEE_AMOUNT = 3000; // 设置手续费等级
            const INITIAL_PRICE = '56022770974786139918731938227'; // 初始价格
            let createPoolResult = await positionManagerService.sendMethod('createAndInitializePoolIfNecessary', localStorage.getItem('account'), [fromTokenInfo.address, toTokenInfo.address, FEE_AMOUNT, INITIAL_PRICE])
            const params = {
                tokenIn: fromTokenInfo.address || process.env.NEXT_PUBLIC_WHAH_ADDRESS,
                tokenOut: toTokenInfo.address,
                fee: 3000,
                recipient: localStorage.getItem('account'),
                deadline: Math.floor(Date.now() / 1000) + 60 * 20,
                amountIn: ethers.parseUnits('3', 18),
                amountOutMinimum: ethers.Zero,
                sqrtPriceLimitX96: ethers.Zero,
            };


            const tx = await swapRouterService.sendMethod(
                "exactInputSingle",
                localStorage.getItem('account'),
                [params],
                { value: ethers.Zero }
            );

            console.log("Transaction Success:", tx);

            console.log("流动性添加成功，交易回执：", mintResult);
            console.log('fromToken授权结果', approveFromToken)
            console.log('toToken授权结果', approveToToken)
            console.log('创建交易对结果', createPoolResult)
        } catch (err) {
            console.log(err)
            setDialogContent('ERROR: Swap Error')
            toggleDialogPopup()
        }

    }
    useEffect(() => {
        console.log(SwapRouterABI)
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

    let [dialogContent, setDialogContent] = useState('Network error, please try again') //对话框文本
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
    let toggleFirePopup = () => { //显示隐藏小火苗弹窗
        // setFirePopup(showFirePopup = !showFirePopup)
        setDialogContent('This function is not yet available')
        setShowDialogPopup(true)
    }
    let toggleSettingPopup = () => { //显示隐藏设置弹窗
        setSettingPopup(showSettingPopup = !showSettingPopup)
    }
    let toggleCustomsizePopup = () => { //显示隐藏自定义弹窗
        setCustomsizePopup(showCustomsizePopup = !showCustomsizePopup)
    }
    let toggleRecentTransPopup = () => { //显示隐藏交易记录弹窗
        // setRecentTransPopup(showRecentTransPopup = !showRecentTransPopup)
        setDialogContent('This function is not yet available')
        setShowDialogPopup(true)
    }
    let toggleSelectTokenPopup = (type) => { //显示隐藏选择token弹窗
        console.log('object')
        setTokenType(type)
        setSelectTokenPopup(showSelectTokenPopup = !showSelectTokenPopup)
    }
    const selectTokenItem = (item) => { //选择token
        console.log(item)
        tokenType === 'from' ? setFromTokenInfo(item) : setToTokenInfo(item)
        toggleSelectTokenPopup()
    }
    const toggleDialogPopup = () => { //显示隐藏对话框
        setShowDialogPopup(showDialogPopup = !showDialogPopup)
    }
    const handleConnectWallet = () => { //点击链接钱包按钮
        setDialogContent('Network error, please try again')
        toggleDialogPopup()
    }
    const closeMask = () => { //关闭对话框
        toggleDialogPopup()
    }
    const handleInputFocus = () => { //input框焦点
        // setDialogContent('Unable to redeem')
        // toggleDialogPopup()
    }
    return (
        <>
            <DialogPopup showDialogPopup={showDialogPopup} type='fail' content={dialogContent} closeMask={closeMask}></DialogPopup>
            <StatisticsPopup showStatisticsPopup={showStatisticsPopup} onClose={toggleStatisticsPopup} fromTokenInfo={fromTokenInfo} toTokenInfo={toTokenInfo} ></StatisticsPopup>
            <FirePopup showFirePopup={showFirePopup} onClose={toggleFirePopup}></FirePopup>
            <SettingPopup showSettingPopup={showSettingPopup} onClose={toggleSettingPopup} handleCusRouting={toggleCustomsizePopup}></SettingPopup>
            <CustomsizeRoutingPopup showCustomsizePopup={showCustomsizePopup} onClose={toggleCustomsizePopup}></CustomsizeRoutingPopup>
            <RecentTransPopup showRecentTransPopup={showRecentTransPopup} onClose={toggleRecentTransPopup}></RecentTransPopup>
            <SelectTokenPopup showSelectTokenPopup={showSelectTokenPopup} tokenList={fromTokenList} onClose={toggleSelectTokenPopup} selectTokenItem={selectTokenItem}></SelectTokenPopup>
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
                                return <div key={index} className='flex justify-center items-center px-0-4 rounded-lg transition duration-150 lg:ml-2-4 active:bg-purple62 active:translate-y-0-1' onClick={() => handleSwapOperate(item)}>
                                    <div key={index} className={`icon iconfont ${item.icon} ${operateItems === item.id ? '' : ''}`} style={{ fontSize: '1.5rem' }}></div>
                                </div>
                            })}
                        </div>
                        <div className='w-20-0 mb-2-0 lg:w-35-0 lg:mb-8-0'>
                            <div className='bg-swap-card-module flex flex-col justify-between items-center border-2 border-swap-border rounded-2xl p-0-8 w-20-0 h-8-0 lg:w-35-0'>
                                {fromTokenInfo.title ? <div className='flex justify-between items-center w-full'>
                                    <div className='flex justify-start items-center' onClick={() => toggleSelectTokenPopup('from')}>
                                        <div className='rounded-full w-2-2 h-2-2 bg-white overflow-hidden' >
                                            <img src={fromTokenInfo.img}></img>
                                        </div>
                                        <div className='text-1-5 font-light ml-1-0'>{fromTokenInfo.title}</div>
                                        <div className='ml-2-0 icon iconfont icon-down2' style={{ fontSize: '1rem' }}></div>
                                    </div>
                                    {/* <div className='text-swap-copy-icon icon iconfont icon-copy' style={{ fontSize: '1.4rem' }}></div> */}
                                </div> : <div className='flex justify-between items-center w-full'>
                                    <div className='flex justify-start items-center' onClick={() => toggleSelectTokenPopup('from')}>
                                        <div className='rounded-full w-2-2 h-2-2 bg-white overflow-hidden' >
                                            <img src={fromTokenList[0].img}></img>
                                        </div>
                                        <div className='text-1-5 font-light ml-1-0'>{fromTokenList[0].title}</div>
                                        <div className='ml-2-0 icon iconfont icon-down2' style={{ fontSize: '1rem' }}></div>
                                    </div>
                                    {/* <div className='text-swap-copy-icon icon iconfont icon-copy' style={{ fontSize: '1.4rem' }}></div> */}
                                </div>}
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
                                        {toTokenInfo.title && <div className='rounded-full w-2-2 h-2-2 bg-white overflow-hidden' >
                                            <img className='' src={toTokenInfo.img}></img>
                                        </div>}
                                        <div className='text-1-5 font-light ml-1-0'>{toTokenInfo.title ? toTokenInfo.title : 'Select token'}</div>
                                        <div className='ml-2-0 icon iconfont icon-down2' onClick={() => toggleSelectTokenPopup} style={{ fontSize: '1rem' }}></div>
                                    </div>
                                    {/* <div className='text-swap-copy-icon icon iconfont icon-copy' style={{ fontSize: '1.4rem' }}></div> */}
                                </div>
                                <div className='w-full'>
                                    <input className='bg-transparent  h-3-0 w-full' onFocus={handleInputFocus}></input>
                                </div>
                            </div>
                        </div>
                        {/* <div className='w-20-0 flex justify-between items-center mb-1-0 lg:w-35-0 '>
                            <div className='flex justify-start items-center'>
                                <div className='text-1-0 text-swap-second-title mr-1-0'>Slippage Tolerance</div>
                                <div className='text-menu-green icon iconfont icon-edit' style={{ fontSize: '1.4rem' }}> </div>
                            </div>
                            <div className='font-bold text-1-5 text-menu-green'>0.5%</div>
                        </div> */}
                        <div onClick={handleApproveAndSwap} className='w-20-0 h-4-7 bg-primary-purple flex justify-center items-center text-white font-light text-1-5 rounded-xl lg:w-35-0  transition ease-in duration-100 active:bg-opacity-50 active:translate-y-0-1'>
                            Approve and Swap
                        </div>
                        <ConnectWalletButton onConnect={handleWalletConnect} className="w-20-0 h-4-7 bg-primary-purple flex justify-center items-center text-white font-light text-1-5 rounded-xl lg:w-35-0  transition ease-in duration-100 active:bg-opacity-50 active:translate-y-0-1"></ConnectWalletButton>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Trade
