import React, { useEffect, useState } from 'react'
import TradeMenu from '@/components/TradeMenu'
import StatisticsPopup from '@/components/swap/statisticsPopup'
import FirePopup from '@/components/swap/firePopup'
import SettingPopup from '@/components/swap/settingPopup'
import CustomsizeRoutingPopup from '@/components/swap/customsizeRoutingPopup'
import RecentTransPopup from '@/components/swap/recentTransPopup'
import SelectTokenPopup from '@/components/swap/selectTokenPopup'
import { swapStateItems, swapOperateItems } from '@/dictionary/trade'
// import { Toast } from 'antd-mobile';
import { useRouter } from 'next/router'
import DialogPopup from '@/components/DialogPopup'
import ConnectWalletButton from "@/components/ConnectWallet";
import Web3 from 'web3';
import { ethers } from 'ethers';
import SwapRouterABI from '@/abi/SwapRouter'
import PositionManagersABI from '@/abi/PositionManager'
import ERC20ABI from '@/abi/ERC20'
import FactoryABI from '@/abi/Factory'
import PoolABI from '@/abi/Pool'
import ContractService from '@/services/contract/contractServices'
import TransactionModal from "./components/TransactionModal";
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
    let [fromTokenInfo, setFromTokenInfo] = useState({})
    let [toTokenInfo, setToTokenInfo] = useState({})
    let [tokenType, setTokenType] = useState('')
    let [showDialogPopup, setShowDialogPopup] = useState(false)
    let [web3, setWeb3] = useState(null)
    let [fromTokenBalance, setFromTokenBalance] = useState('')
    let [toTokenBalance, setToTokenBalance] = useState('')
    const [feeList, setFeeLit] = useState([{ fee: 0.05, pick: 82, value: 500 }, { fee: 0.3, pick: 6, value: 3000 }, { fee: 1.00, pick: 0, value: 10000 }])
    let [selectFeeInfo, setSelectFeeInfo] = useState({ fee: 0.05, pick: 82, value: 500 }) //选择的Fee信息
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [transactionDetails, setTransactionDetails] = useState({});
    const [isLoadingToPriceForSlot0, setIsLoadingToPriceForSlot0] = useState(false); //加载通过交易比和token0获取token1的数量
    const [isLoadingFromPriceForSlot0, setIsLoadingFromPriceForSlot0] = useState(false); //通过交易比和token1获取token0的数量
    let [token1Received, setToken1Received] = useState('')
    let [perPriceText, setPriceText] = useState('') //当前交易兑文案
    let [fromTokenValue, setFromTokenValue] = useState('')
    let [toTokenValue, setToTokenValue] = useState('')
    let [transPrice, setTransPrice] = useState('')
    const [price, setPrice] = useState(null);
    let [fromTokenList, setFromTokenList] = useState([
        { title: 'ONE', address: '0x584e6a7Eb583eF89c0F70c3540ce88A4cbe56deF', img: 'https://img0.baidu.com/it/u=2664965310,3686497550&fm=253&fmt=auto&app=138&f=JPEG?w=329&h=330' },
        { title: 'TWO', address: '0xdbbe571be652CA17Fb3F6B197977C4FF257d8853', img: 'https://img0.baidu.com/it/u=2664965310,3686497550&fm=253&fmt=auto&app=138&f=JPEG?w=329&h=330' },
        { title: 'CEN', address: '0xF332c5a258b1405D58caA85A95b2678C6a13d819', img: 'https://img0.baidu.com/it/u=2664965310,3686497550&fm=253&fmt=auto&app=138&f=JPEG?w=329&h=330' },
        { title: 'UZI', address: '0x7a6194476EF6a3aCf3678451B53c51f49d43C3A4', img: 'https://img0.baidu.com/it/u=2664965310,3686497550&fm=253&fmt=auto&app=138&f=JPEG?w=329&h=330' },
        { title: 'GALA', address: '0x15C00A366eC35BA9De52FE65098022eD75b7d8bE', img: 'https://img0.baidu.com/it/u=2664965310,3686497550&fm=253&fmt=auto&app=138&f=JPEG?w=329&h=330' },
    ])
    const handleApproveAndSwap = async () => { //点击approve and swap
        if (!toTokenInfo.title) { //没有选择to token 起弹窗
            setDialogContent('Select to token')
            toggleDialogPopup()
            return
        }
        console.log(fromTokenInfo.address || process.env.NEXT_PUBLIC_WHAH_ADDRESS, toTokenInfo.address)
        try {
            const fromTokenService = new ContractService(window.ethereum, ERC20ABI, fromTokenInfo.address ? fromTokenInfo.address : process.env.NEXT_PUBLIC_WHAH_ADDRESS)
            const toTokenService = new ContractService(window.ethereum, ERC20ABI, toTokenInfo.address)
            const positionManagerService = new ContractService(window.ethereum, PositionManagersABI, process.env.NEXT_PUBLIC_POSITION_MANAGER_ADDRESS)
            const swapRouterService = new ContractService(window.ethereum, SwapRouterABI, process.env.NEXT_PUBLIC_SWAP_ROUTER_ADDRESS);
            console.log('PositionManager', positionManagerService)
            const authorizedOne = await fromTokenService.callViewMethod('allowance', localStorage.getItem('account'), process.env.NEXT_PUBLIC_SWAP_ROUTER_ADDRESS)
            const authorizedTwo = await toTokenService.callViewMethod('allowance', localStorage.getItem('account'), process.env.NEXT_PUBLIC_SWAP_ROUTER_ADDRESS)
            const authorizedThree = await fromTokenService.callViewMethod('allowance', localStorage.getItem('account'), process.env.NEXT_PUBLIC_POSITION_MANAGER_ADDRESS)
            const authorizedFour = await toTokenService.callViewMethod('allowance', localStorage.getItem('account'), process.env.NEXT_PUBLIC_POSITION_MANAGER_ADDRESS)
            let approveFromToken, approveToToken, approveFromTokenTwo, approveToTokenTwo
            console.log('from对swap授权状态', authorizedOne)
            console.log('from对swap授权状态', authorizedTwo)
            console.log('from对swap授权状态', authorizedThree)
            console.log('from对swap授权状态', authorizedFour)

            if (authorizedOne === 0) {
                approveFromToken = await fromTokenService.sendMethod(
                    "approve",
                    localStorage.getItem('account'),
                    [process.env.NEXT_PUBLIC_SWAP_ROUTER_ADDRESS, ethers.MaxUint256]
                );
            }
            if (authorizedTwo === 0) {
                approveToToken = await toTokenService.sendMethod(
                    "approve",
                    localStorage.getItem('account'),
                    [process.env.NEXT_PUBLIC_SWAP_ROUTER_ADDRESS, ethers.MaxUint256]
                );
            }
            if (authorizedThree === 0) {
                approveFromTokenTwo = await fromTokenService.sendMethod(
                    "approve",
                    localStorage.getItem('account'),
                    [process.env.NEXT_PUBLIC_POSITION_MANAGER_ADDRESS, ethers.MaxUint256]
                );
            }
            if (authorizedFour === 0) {
                approveToTokenTwo = await toTokenService.sendMethod(
                    "approve",
                    localStorage.getItem('account'),
                    [process.env.NEXT_PUBLIC_POSITION_MANAGER_ADDRESS, ethers.MaxUint256]
                );
            }
            // const params = {
            //     tokenIn: fromTokenInfo.address,
            //     tokenOut: toTokenInfo.address,
            //     fee: selectFeeInfo.value,
            //     recipient: localStorage.getItem('account'),
            //     deadline: BigInt(Math.floor(Date.now() / 1000) + 60 * 20), // 使用 BigInt
            //     amountIn: ethers.utils.parseUnits(fromTokenValue, 18), // 仍然使用 ethers.utils.parseUnits 返回 BigInt
            //     amountOutMinimum: ethers.utils.parseEther('0.95'), // 使用 BigNumber
            //     sqrtPriceLimitX96: ethers.BigNumber.from(0), // 使用 BigNumber
            // };
            // console.log('fromTokenInfo.address', fromTokenInfo.address);
            // console.log('toTokenInfo.address', toTokenInfo.address);
            // console.log('selectFeeInfo.value', selectFeeInfo.value);
            // console.log('Account', localStorage.getItem('account'));
            // console.log('Deadline', BigInt(Math.floor(Date.now() / 1000) + 60 * 20));
            // console.log('Amount In', ethers.utils.parseUnits(fromTokenValue, 18));
            // console.log('Amount Out Minimum', ethers.utils.parseEther('0.95'));


            const tx = await swapRouterService.sendMethod(
                "exactInputSingle",
                localStorage.getItem('account'),
                [
                    // fromTokenInfo.address > toTokenInfo.address ? toTokenInfo.address : fromTokenInfo.address,
                    // fromTokenInfo.address > toTokenInfo.address ? fromTokenInfo.address : toTokenInfo.address,
                    fromTokenInfo.address,
                    toTokenInfo.address,
                    selectFeeInfo.value,
                    localStorage.getItem('account'),
                    BigInt(Math.floor(Date.now() / 1000) + 60 * 20), // 使用 BigInt
                    ethers.utils.parseUnits(fromTokenValue.toString(), 18), // 仍然使用 ethers.utils.parseUnits 返回 BigInt
                    ethers.utils.parseEther('0.95'), // 使用 BigNumber
                    ethers.BigNumber.from(0), // 使用 BigNumber
                ],
                { value: ethers.BigNumber.from(0) } // 使用 ethers.BigNumber.from(0) 替代 ethers.Zero
            );

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const factoryService = new ContractService(window.ethereum, FactoryABI, process.env.NEXT_PUBLIC_FACTORY_ADDRESS)
            const poolAddress = await factoryService.callViewMethod(
                "getPool",
                fromTokenInfo.address,
                toTokenInfo.address,
                selectFeeInfo.value, // fee tier
            );
            const poolService = new ethers.Contract(poolAddress, PoolABI, signer);
            poolService.on("Swap", async (sender, recipient, amount0, amount1, sqrtPriceX96, liquidity, tick) => {
                console.log("Swap Event Received:");
                console.log("Sender:", sender);
                console.log("Recipient:", recipient);
                console.log("Amount0 (token0):", ethers.utils.formatUnits(amount0, 18)); // 格式化为代币的单位
                console.log("Amount1 (token1):", ethers.utils.formatUnits(amount1, 18)); // 格式化为代币的单位
                console.log('object', Math.abs(ethers.utils.formatUnits(amount1, 18)))

                const tokenInBalanceAfter = await fromTokenService.callViewMethod("balanceOf", localStorage.getItem('account'));
                const tokenOutBalanceAfter = await toTokenService.callViewMethod("balanceOf", localStorage.getItem('account'));
                console.log("TokenIn Balance After:", tokenInBalanceAfter.toString());
                console.log("TokenOut Balance After:", tokenOutBalanceAfter.toString());
                let balanceOne = ethers.utils.formatUnits(tokenInBalanceAfter, 18)
                let balanceTwo = ethers.utils.formatUnits(tokenOutBalanceAfter, 18)
                setToken1Received(token1Received = Math.abs(ethers.utils.formatUnits(amount1, 18)))
                console.log('---------', token1Received, Math.abs(ethers.utils.formatUnits(amount1, 18)))
                setTransactionDetails({ token0Used: fromTokenValue, token1Received: token1Received, fee: (selectFeeInfo.value) * 0.01 * 0.01, token0Balance: balanceOne, token1Balance: balanceTwo, token0: fromTokenInfo.title, token1: toTokenInfo.title, perPriceText: perPriceText });
                setIsModalOpen(true); // 显示弹窗
            });
            console.log("Swap 成功", tx);


        } catch (err) {
            console.log(err)
            setDialogContent('Error')
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
        // console.log('object')
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
        // console.log('object')
        setTokenType(type)
        setSelectTokenPopup(showSelectTokenPopup = !showSelectTokenPopup)
    }
    const selectTokenItem = async (item) => { //选择token
        tokenType === 'from' ? setFromTokenInfo(fromTokenInfo = item) : setToTokenInfo(toTokenInfo = item)
        toggleSelectTokenPopup()
        let balance = await fetchBalance(item.address)
        tokenType === 'from' ? setFromTokenBalance(fromTokenBalance = balance) : setToTokenBalance(toTokenBalance = balance)
        console.log(balance)
        console.log(fromTokenInfo, toTokenInfo)
        setToTokenValue(toTokenValue = '')
        setFromTokenValue(fromTokenValue = '')

        //选择token之后需要重新获取当前的两个token的交易兑，获取到的交易兑一定会是小地址：大地址
        if (toTokenInfo.address && fromTokenInfo.address) {
            const factoryService = new ContractService(window.ethereum, FactoryABI, process.env.NEXT_PUBLIC_FACTORY_ADDRESS)
            const poolAddress = await factoryService.callViewMethod(
                "getPool",
                fromTokenInfo.address,
                toTokenInfo.address,
                selectFeeInfo.value, // fee tier
            );
            console.log('池地址', poolAddress)
            if (poolAddress === ethers.constants.AddressZero) return //当前token0、token1没有交易兑
            setIsLoadingToPriceForSlot0(true)
            setIsLoadingFromPriceForSlot0(true)

            const poolService = new ContractService(window.ethereum, PoolABI, poolAddress);
            const slot0Data = await poolService.callViewMethod("slot0");
            const [sqrtPriceX96] = await slot0Data
            // 计算价格
            let price = sqrtPriceX96 ** 2 / (2 ** 192)
            let price2 = 1 / (sqrtPriceX96 ** 2 / (2 ** 192))
            console.log(toTokenInfo.address > fromTokenInfo.address, toTokenInfo.address < fromTokenInfo.address)
            if (fromTokenInfo.address < toTokenInfo.address) { //小地址在大地址前，直接使用交易兑比例
                setToTokenValue(toTokenValue = price)
                setFromTokenValue(fromTokenValue = 1)
                setPriceText(`1 ${fromTokenInfo.title} Per ${price} ${toTokenInfo.title}`)
            } else { //小地址在大地址后，反转使用交易兑比例
                setToTokenValue(toTokenValue = price2)
                setFromTokenValue(fromTokenValue = 1)
                setPriceText(`1 ${fromTokenInfo.title} Per ${price2} ${toTokenInfo.title}`)
            }
            setIsLoadingToPriceForSlot0(false)
            setIsLoadingFromPriceForSlot0(false)
        }

    }
    const fetchBalance = async (address) => { //获取token余额
        const tokenService = new ContractService(window.ethereum, ERC20ABI, address)
        const tokenBalance = await tokenService.callViewMethod("balanceOf", localStorage.getItem('account'));
        return (ethers.utils.formatUnits(tokenBalance, 18))
        // return tokenBalance.toString()
    }
    const toggleDialogPopup = () => { //显示隐藏对话框
        setShowDialogPopup(showDialogPopup = !showDialogPopup)
    }

    const closeMask = () => { //关闭对话框
        toggleDialogPopup()
    }
    const handleInputFocusFromToken = async (e) => { //当token 0输入框发生变化时，通过交易比实时计算需要的token 1数量
        console.log('from发生变化')
        setFromTokenValue(e.target.value)
        console.log(fromTokenValue)
        let token0PerToken1 = await getToken1PriceFromToken0Price()
        let price = token0PerToken1.price
        let price2 = token0PerToken1.price2
        console.log(token0PerToken1)

        console.log(toTokenInfo.address > fromTokenInfo.address, toTokenInfo.address < fromTokenInfo.address)
        if (fromTokenInfo.address < toTokenInfo.address) { //小地址在大地址前，直接使用交易兑比例
            setToTokenValue(price * e.target.value)
            setPriceText(`1 ${fromTokenInfo.title} Per ${price * e.target.value} ${toTokenInfo.title}`)
        } else { //小地址在大地址后，反转使用交易兑比例
            setToTokenValue(price2 * e.target.value)
            setPriceText(`1 ${fromTokenInfo.title} Per ${price2 * e.target.value} ${toTokenInfo.title}`)

        }
    }
    const handleInputFocusToToken = async (e) => { //当token 1输入框发生变化时，通过交易比实时计算需要的token 0数量
        console.log('to发生变化')
        setToTokenValue(e.target.value)
        console.log(toTokenValue)
        let token1PerToken0 = await getToken0PriceFromToken1Price()
        let price = token1PerToken0.price
        let price2 = token1PerToken0.price2
        console.log(token1PerToken0)

        if (fromTokenInfo.address > toTokenInfo.address) { //小地址在大地址前，直接使用交易兑比例
            setPriceText(`1 ${toTokenInfo.title} Per ${price * e.target.value} ${fromTokenInfo.title}`)
            setFromTokenValue(price * e.target.value)
        } else { //小地址在大地址后，反转使用交易兑比例
            setFromTokenValue(price2 * e.target.value)
            setPriceText(`1 ${toTokenInfo.title} Per ${price2 * e.target.value} ${fromTokenInfo.title}`)
        }

    }
    const getToken0PriceFromToken1Price = async () => { //通过输入的token1，由交易比确定token0的价格
        console.log(toTokenInfo, fromTokenValue)
        if (!toTokenInfo.title && !fromTokenValue) return
        try {
            setIsLoadingFromPriceForSlot0(true); // 显示骨架屏
            const factoryService = new ContractService(window.ethereum, FactoryABI, process.env.NEXT_PUBLIC_FACTORY_ADDRESS)
            const poolAddress = await factoryService.callViewMethod(
                "getPool",
                fromTokenInfo.address,
                toTokenInfo.address,
                selectFeeInfo.value, // fee tier
            );
            console.log('池地址', poolAddress)
            if (poolAddress === ethers.constants.AddressZero) return
            const poolService = new ContractService(window.ethereum, PoolABI, poolAddress);
            const slot0Data = await poolService.callViewMethod("slot0");
            const [sqrtPriceX96] = await slot0Data
            // 计算价格
            let price = sqrtPriceX96 ** 2 / (2 ** 192)
            let price2 = 1 / (sqrtPriceX96 ** 2 / (2 ** 192))
            console.log(`Current price (token1 per token0): ${price}`);
            return { price, price2 }
        } catch (error) {
            console.error("Fetch Price Error:", error);
            setIsLoadingFromPriceForSlot0(false); // 隐藏骨架屏
        }
        finally {
            setIsLoadingFromPriceForSlot0(false); // 隐藏骨架屏
        }
    }
    const getToken1PriceFromToken0Price = async () => { //通过输入的token0，由交易比确定token1的价格
        console.log(fromTokenInfo, toTokenValue)
        if (!fromTokenInfo.title && !toTokenValue) return
        try {
            setIsLoadingToPriceForSlot0(true); // 显示骨架屏
            const factoryService = new ContractService(window.ethereum, FactoryABI, process.env.NEXT_PUBLIC_FACTORY_ADDRESS)
            const poolAddress = await factoryService.callViewMethod(
                "getPool",
                fromTokenInfo.address,
                toTokenInfo.address,
                selectFeeInfo.value, // fee tier
            );
            console.log('池地址', poolAddress, poolAddress === ethers.constants.AddressZero)
            if (poolAddress === ethers.constants.AddressZero) return

            const poolService = new ContractService(window.ethereum, PoolABI, poolAddress);
            const slot0Data = await poolService.callViewMethod("slot0");
            const [sqrtPriceX96] = await slot0Data
            // 计算价格
            let price = sqrtPriceX96 ** 2 / (2 ** 192)
            let price2 = 1 / (sqrtPriceX96 ** 2 / (2 ** 192))
            // let obj = {price price2}
            console.log(`Current price (token0 per token1): ${price}`);
            return { price, price2 }
        } catch (error) {
            console.error("Fetch Price Error:", error);
            setIsLoadingToPriceForSlot0(false); // 隐藏骨架屏
        }
        finally {
            setIsLoadingToPriceForSlot0(false); // 隐藏骨架屏
        }
    }
    const handleFeeItem = (item) => { //点击费用选项
        setSelectFeeInfo(item)
        console.log(selectFeeInfo, item)
    }

    return (
        <>
            <TransactionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                details={transactionDetails}
            />
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
                        <div className='w-20-0 flex justify-between items-center my-0-4 lg:w-35-0 lg:mb-2-0' >
                            {feeList.map((item, index) => {
                                return <div key={index} className='' onClick={() => { handleFeeItem(item) }}>
                                    <div className='flex justify-between flex-wrap items-center w-full '>
                                        <div className='token-pair-card w-4-0 border-2 py-0-3 border-swap-border flex rounded-lg flex-col justify-start items-center lg:w-7-0 lg:py-1-0'>
                                            <div className='flex justify-center items-baseline mb-0-2'>
                                                <div className='font-bold text-1-0 lg:text-2-0'>{item.fee}</div>
                                                <div className='text-0-6 lg:text-1-0'>%</div>
                                            </div>
                                            <div className={`bg-primary-purple rounded-full px-0-4 py-0-2 flex justify-center items-baseline`}>
                                                <div className='text-0-6 lg:text-1-0'>{item.pick}% pick</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                        <div className='w-20-0 mb-2-0 lg:w-35-0 lg:mb-8-0'>
                            <div className='bg-swap-card-module flex flex-col justify-between items-center border-2 border-swap-border rounded-2xl p-0-8 w-20-0 h-8-0 lg:w-35-0'>
                                <div className='flex justify-between items-center w-full'>
                                    <div className='flex justify-start items-center' onClick={() => toggleSelectTokenPopup('from')}>
                                        {fromTokenInfo.title && <div className='rounded-full w-2-2 h-2-2 bg-white overflow-hidden' >
                                            <img className='' src={fromTokenInfo.img}></img>
                                        </div>}
                                        <div className='text-1-2 font-light ml-1-0'>{fromTokenInfo.title ? fromTokenInfo.title : 'Select token'}</div>
                                        <div className='ml-2-0 icon iconfont icon-down2' style={{ fontSize: '1rem' }}></div>

                                    </div>
                                    {/* <div className='text-swap-copy-icon icon iconfont icon-copy' style={{ fontSize: '1.4rem' }}></div> */}
                                </div>
                                <div className='w-full flex justify-end'>
                                    {isLoadingFromPriceForSlot0 ? (
                                        <div className="h-1-5 w-1/2 animate-pulse bg-swap-border rounded"></div>
                                    ) : (
                                        <input type="number" disabled={isLoadingFromPriceForSlot0} placeholder='0.00' step="0.01" className='bg-transparent placeholder-swap-border text-right text-1-2 border-none focus:outline-none caret-swap-border h-3-0 w-full' value={fromTokenValue} onChange={handleInputFocusFromToken}></input>
                                    )}

                                </div>
                                {/* <div className='text-swap-second-title text-1-0 w-full text-right'>1 {fromTokenList[0].title} ≈ {price} {toTokenList[0].title} </div> */}
                                <div className='text-gray-400 text-0-8 w-full text-right'> Balance: {fromTokenBalance} {fromTokenInfo.title}</div>

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
                                        <div className='text-1-2 font-light ml-1-0'>{toTokenInfo.title ? toTokenInfo.title : 'Select token'}</div>
                                        <div className='ml-2-0 icon iconfont icon-down2' style={{ fontSize: '1rem' }}></div>
                                    </div>
                                    {/* <div className='text-swap-copy-icon icon iconfont icon-copy' style={{ fontSize: '1.4rem' }}></div> */}
                                </div>
                                <div className='w-full flex justify-end'>
                                    {isLoadingToPriceForSlot0 ? (
                                        <div className="h-1-5 w-1/2 animate-pulse bg-swap-border rounded"></div>
                                    ) : (
                                        <input type="number" disabled={isLoadingToPriceForSlot0} step="0.01" value={toTokenValue} className='bg-transparent placeholder-swap-border text-right text-1-2 border-none focus:outline-none caret-swap-border h-3-0 w-full' onChange={handleInputFocusToToken}></input>
                                    )}
                                    {/* <input disabled type="number" step="0.01" value={toTokenValue} className='bg-transparent placeholder-swap-border text-right text-1-2 border-none focus:outline-none caret-swap-border h-3-0 w-full' onFocus={handleInputFocusFromToken}></input> */}
                                </div>
                                <div className='text-gray-400 text-0-8 w-full text-right'> Balance:{toTokenBalance} {toTokenInfo.title} </div>
                            </div>
                        </div>
                        <div className='w-20-0 mb-2-0 lg:w-35-0 lg:mb-8-0 text-gray-400' >
                            {perPriceText}
                        </div>
                        {/* <div className='w-20-0 flex justify-between items-center mb-1-0 lg:w-35-0 ' onClick={toggleSettingPopup}>
                            <div className='flex justify-start items-center'>
                                <div className='text-1-0 text-swap-second-title mr-1-0'>Slippage Tolerance</div>
                                <div className='text-menu-green icon iconfont icon-edit' style={{ fontSize: '1.4rem' }}> </div>
                            </div>
                            <div className='font-bold text-1-5 text-menu-green'>0.5%</div>
                        </div> */}
                        <div onClick={handleApproveAndSwap} className='w-20-0 h-4-7 bg-primary-purple flex justify-center items-center text-white font-light text-1-5 rounded-xl lg:w-35-0  transition ease-in duration-100 active:bg-opacity-50 active:translate-y-0-1'>
                            Approve and Swap
                        </div>
                        <div className='mt-10-0'>
                            <ConnectWalletButton className="w-15-0 h-3-7 bg-primary-purple flex justify-center items-center text-white font-light text-0-9 rounded-xl lg:w-35-0  transition ease-in duration-100 active:bg-opacity-50 active:translate-y-0-1"></ConnectWalletButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trade
