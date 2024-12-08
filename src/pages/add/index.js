import React, { useEffect, useState } from 'react'
import { TickMath } from '@uniswap/v3-sdk';
import TradeMenu from '@/components/TradeMenu'
import { liquidityOperateItems, tokenPair } from '@/dictionary/trade'
import SelectTokenPopup from '@/components/swap/selectTokenPopup'
import DialogPopup from '@/components/DialogPopup'
import ConnectWalletButton from "@/components/ConnectWallet";

import Web3 from 'web3';
import { ethers, BigNumber } from 'ethers';
import SwapRouterABI from '@/abi/SwapRouter'
import PositionManagersABI from '@/abi/PositionManager'
import ERC20ABI from '@/abi/ERC20'
import FactoryABI from '@/abi/Factory'
import PoolABI from '@/abi/Pool'
import ContractService from '@/services/contract/contractServices'
const Add = () => {
    //组件变量
    let [web3, setWeb3] = useState(null) //web3实例
    let [dialogType, setDialogType] = useState('fail')
    let [tokenList, setTokenList] = useState([ //兑换 from token list
        { title: 'SAN', address: '0xC67B6C1a5a9f1C0e69fa28094c03E88CAbe86c86', img: 'https://img0.baidu.com/it/u=2664965310,3686497550&fm=253&fmt=auto&app=138&f=JPEG?w=329&h=330' }])
    // let [tokenPairList, setTokenPairList] = useState(tokenPair)
    let pointList = ['10%', '20%', '50%', 'Full Range'] //手续费等级
    let [showSelectTokenPopup, setSelectTokenPopup] = useState(false) //显示隐藏token列表popup
    const [selectFromTokenInfo, changeSelectFromTokenInfo] = useState({}) //选择的tokenA信息
    const [selectToTokenInfo, changeSelectToTokenInfo] = useState({}) //选择的tokenB信息
    const [selectTokenType, setSelectTokenType] = useState('') //当前操作的token类型，From or to
    let [showFeeList, changeShowFeeList] = useState(false)
    const [feeList, setFeeLit] = useState([{ fee: 0.05, pick: 82, value: 500 }, { fee: 0.3, pick: 6, value: 3000 }, { fee: 1.00, pick: 0, value: 10000 }])
    let [selectFeeInfo, setSelectFeeInfo] = useState({ fee: 0.05, pick: 82, value: 500 }) //选择的Fee信息
    let [minPrice, setMinPrice] = useState(1) //最低价
    let [maxPrice, setMaxPrice] = useState(1) //最高价
    let [showDialogPopup, setShowDialogPopup] = useState(false) //显示隐藏对话框
    let [dialogContent, setDialogContent] = useState('Network error, please try again') //对话框内容
    let [amount0Desired, setAmount0Desired] = useState('') //存入的token0数量
    let [amount1Desired, setAmount1Desired] = useState('') //存入的token1数量
    let [isLoading, changeIsLoading] = useState(false)
    let [buttonText, setButtonText] = useState('Add Liquidity')
    let [fromTokenBalance, setFromTokenBalance] = useState('')
    let [toTokenBalance, setToTokenBalance] = useState('')
    //组件函数
    let toggleSelectTokenPopup = (type) => { //操作token列表显示隐藏
        setSelectTokenType(type)
        setSelectTokenPopup(showSelectTokenPopup = !showSelectTokenPopup)
    }
    const handleAmountAChange = (event) => { //存入的token0发生变化
        setAmount0Desired(event.target.value);
    };

    const handleAmountBChange = (event) => { //存入的token1发生变化
        setAmount1Desired(event.target.value);
    };
    const handleFeeItem = (item) => { //点击费用选项
        setSelectFeeInfo(item)
        console.log(selectFeeInfo, item)
    }
    const selectTokenItem = async (item) => { //点击token列表的某个代币
        console.log(item)
        selectTokenType === 'from' ? changeSelectFromTokenInfo(item) : changeSelectToTokenInfo(item)
        let balance = await fetchBalance(item.address)
        console.log(balance)
        console.log(item, selectTokenType)
        selectTokenType === 'from' ? setFromTokenBalance(balance) : setToTokenBalance(balance)
        setSelectTokenPopup(false)
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
        // setDialogContent('Unable to redeem')
        // toggleDialogPopup()
    }

    const handleAddLiquidity = async () => { //点击添加流动性按钮
        console.log('点击添加流动性')
        if (isLoading) return
        const factoryService = new ContractService(window.ethereum, FactoryABI, process.env.NEXT_PUBLIC_FACTORY_ADDRESS)
        const fromTokenService = new ContractService(window.ethereum, ERC20ABI, selectFromTokenInfo.address)
        const toTokenService = new ContractService(window.ethereum, ERC20ABI, selectToTokenInfo.address)
        const positionManagerService = new ContractService(window.ethereum, PositionManagersABI, process.env.NEXT_PUBLIC_POSITION_MANAGER_ADDRESS)
        try { //检查token对Manager合约的授权状态
            changeIsLoading(true)
            setButtonText('Checking authorization')
            let authorizedOne = await fromTokenService.callViewMethod('allowance', localStorage.getItem('account'), process.env.NEXT_PUBLIC_SWAP_ROUTER_ADDRESS)
            let authorizedTwo = await toTokenService.callViewMethod('allowance', localStorage.getItem('account'), process.env.NEXT_PUBLIC_SWAP_ROUTER_ADDRESS)

            let authorizedThree = await fromTokenService.callViewMethod('allowance', localStorage.getItem('account'), process.env.NEXT_PUBLIC_POSITION_MANAGER_ADDRESS)
            let authorizedFour = await toTokenService.callViewMethod('allowance', localStorage.getItem('account'), process.env.NEXT_PUBLIC_POSITION_MANAGER_ADDRESS)
            let approveFromToken, approveToToken, approveFromTokenTwo, approveToTokenTwo
            if (authorizedThree == 0) {
                console.log('three没授权')
                approveFromTokenTwo = await fromTokenService.sendMethod(
                    "approve",
                    localStorage.getItem('account'),
                    process.env.NEXT_PUBLIC_POSITION_MANAGER_ADDRESS,
                    ethers.constants.MaxUint256
                );
            }
            if (authorizedFour == 0) {
                console.log('four没授权')
                approveToTokenTwo = await toTokenService.sendMethod(
                    "approve",
                    localStorage.getItem('account'),
                    process.env.NEXT_PUBLIC_POSITION_MANAGER_ADDRESS,
                    ethers.constants.MaxUint256  // 单独传递 `MaxUint256`
                );
            }
            if (authorizedOne == 0) {
                console.log('one没授权')
                approveFromToken = await fromTokenService.sendMethod(
                    "approve",
                    localStorage.getItem('account'),
                    process.env.NEXT_PUBLIC_SWAP_ROUTER_ADDRESS,
                    ethers.constants.MaxUint256
                );
            }
            if (authorizedTwo == 0) {
                console.log('two没授权')
                approveToToken = await toTokenService.sendMethod(
                    "approve",
                    localStorage.getItem('account'),
                    process.env.NEXT_PUBLIC_SWAP_ROUTER_ADDRESS,
                    ethers.constants.MaxUint256
                );
            }
            console.log('是否授权', authorizedOne)
            console.log('是否授权', authorizedTwo)
            console.log('是否授权', authorizedThree)
            console.log('是否授权', authorizedFour)
            changeIsLoading(false)
            setButtonText('Add Liquidity')
        } catch (err) {
            console.log('检查授权错误', err)
            changeIsLoading(false)
            setButtonText('检查授权错误', err)
        }
        try { //检查池子是否存在
            const poolAddress = await factoryService.callViewMethod(
                "getPool",
                selectFromTokenInfo.address,
                selectToTokenInfo.address,
                selectFeeInfo.value // fee tier
            );
            changeIsLoading(true)
            setButtonText('Checking Pool')
            console.log('池地址', poolAddress)
            if (poolAddress === '0x0000000000000000000000000000000000000000') { //当前不存在池子，则需要创建池子并初始化该池子
                console.log('池不存在 去创建池', ethers)
                const priceRatio = 2; // 1 tokenA = 2 tokenB
                const sqrtPrice = Math.sqrt(priceRatio);  // 计算平方根

                // 使用 parseUnits 来处理大数，指定 18 个小数位
                const sqrtPriceX96 = ethers.utils.parseUnits(sqrtPrice.toString(), 18).mul(ethers.utils.parseUnits('1', 0).pow(96));
                // const sqrtPriceX96 = ethers.utils.parseUnits('56022770974786139918731938227', 0);

                console.log(sqrtPriceX96.toString());

                // 调用 positionManagerService 创建池子
                console.log(
                    selectFromTokenInfo.address,
                    selectToTokenInfo.address,
                    selectFeeInfo.value,
                    sqrtPriceX96)
                let createPoolResult = await positionManagerService.sendMethod(
                    'createAndInitializePoolIfNecessary',
                    localStorage.getItem('account'),
                    selectFromTokenInfo.address,
                    selectToTokenInfo.address,
                    selectFeeInfo.value,
                    sqrtPriceX96
                );
                changeIsLoading(false)
                setButtonText('Add Liquidity')
                console.log('初始化池子', createPoolResult);
            } else { //池子存在，添加流动性
                // const minPricePoint = 0.5;  // 1 token0 = 2 token1
                // const maxPricePoint = 2;    // 1 token0 = 0.5 token1

                // 使用 TickMath 来计算 tick 值
                // const tickLower = TickMath.getTickAtSqrtPrice(TickMath.sqrtPriceFromAmount0Delta(minPricePoint, 18));
                // const tickUpper = TickMath.getTickAtSqrtPrice(TickMath.sqrtPriceFromAmount0Delta(maxPricePoint, 18));
                changeIsLoading(true)
                setButtonText('Checking Pool')
                const mintParams = {
                    token0: selectFromTokenInfo.address,
                    token1: selectToTokenInfo.address,
                    fee: selectFeeInfo.value,
                    tickLower: -887220, // 最低 tick 值，表示最宽范围
                    tickUpper: 887220,  // 最高 tick 值，表示最宽范围
                    amount0Desired: ethers.utils.parseUnits(amount0Desired, 18), // 初始添加的 token0 数量
                    amount1Desired: ethers.utils.parseUnits(amount1Desired, 18), // 初始添加的 token1 数量
                    amount0Min: 0,
                    amount1Min: 0,
                    recipient: localStorage.getItem('account'),
                    deadline: Math.floor(Date.now() / 1000) + 60 * 20,
                };
                console.log(mintParams)
                const mintTx = await positionManagerService.sendMethod(
                    "mint",
                    localStorage.getItem('account'),
                    mintParams
                );
                setDialogContent('Liquidity added successfully')
                setShowDialogPopup(true)
                setDialogType('success')
                changeIsLoading(false)

                setButtonText('Add Liquidity')
                console.log('添加流动性成功', mintTx)
            }
        } catch (err) {
            console.log(err)
            changeIsLoading(false)
            setButtonText('添加流动性出错', err)
        }
    }
    const fetchBalance = async (address) => { //获取token余额
        const tokenService = new ContractService(window.ethereum, ERC20ABI, address)
        const tokenBalance = await tokenService.callViewMethod("balanceOf", localStorage.getItem('account'));
        return (ethers.utils.formatUnits(tokenBalance, 18))
        // return tokenBalance.toString()
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
            <DialogPopup showDialogPopup={showDialogPopup} type={dialogType} content={dialogContent} closeMask={closeMask}></DialogPopup>
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
                                <div className='w-20-0 text-2-0 font-bold mt-2-6 lg:mt-auto text-menu-green'>Add Liquidity</div>
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
                                    <div className='bg-swap-border rounded-lg text-0-8 px-0-6 py-0-2' onClick={() => { toggleSelectFeeList() }}>Edit</div>
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
                                            <input type="number" placeholder='0.00' step="0.01" onFocus={handleInputFocus} onChange={handleAmountAChange} value={amount0Desired} className='bg-transparent text-right h-3-0 w-full text-1-2'></input>
                                        </div>
                                        <div className='text-gray-400 text-0-8 w-full text-right pb-4-0'> Balance: {fromTokenBalance} {selectFromTokenInfo.title}</div>

                                    </div>
                                </div>
                                <div className='w-full'>
                                    <div className='bg-swap-card-module mb-1-0 flex flex-col justify-between items-center border-2 border-swap-border rounded-2xl px-1-0 py-0-7 w-full h-6-9'>
                                        <div className='flex justify-between items-center w-full'>
                                            <div className='flex justify-start items-center'>
                                                <div className='rounded-full w-1-5 h-1-5 bg-white overflow-hidden'>
                                                    <img src={selectToTokenInfo.img}></img>
                                                </div>
                                                <div className='text-1-2 font-medium ml-1-0'>{selectToTokenInfo.title}</div>
                                            </div>
                                        </div>
                                        <div className='w-full'>
                                            <input type="number" placeholder='0.00' step="0.01" onFocus={handleInputFocus} onChange={handleAmountBChange} value={amount1Desired} className='bg-transparent text-right h-3-0 w-full text-1-2'></input>
                                        </div>
                                        <div className='text-gray-400 text-0-8 w-full text-right pb-4-0'> Balance: {toTokenBalance} {selectToTokenInfo.title}</div>
                                    </div>
                                    {/* <div className='text-white font-bold text-1-5 w-full flex justify-end'>43.3</div>
                                    <div className='text-white text-1-0 flex justify-end'>~2,140.76 USD</div> */}
                                </div>
                            </div>
                            {/* <div className='w-19-0 lg:w-34-9 text-white text-1-5 mb-0-2'>
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
                            </div> */}
                            {/* <div onClick={handleConnectWallet} className='w-21-7 lg:w-34-9 h-4-7 rounded-lg bg-swap-card-module  border-2 border-primary-purple flex justify-center items-center font-medium text-1-2 mb-1-8'>Full Range </div> */}
                            <div onClick={handleAddLiquidity} className={`${isLoading ? 'opacity-80' : ''} w-21-7 lg:w-34-9 h-4-7 rounded-lg bg-swap-card-module  border-2 border-primary-purple flex justify-center items-center font-medium text-1-2 mb-1-8`}>
                                {isLoading && <div className='w-4-0'> <img src='https://gd-hbimg.huaban.com/2c853da3b26094baa50ac91caac7a4ae0d306ccccbdb5-tERjYn_fw658' /> </div>}
                                {buttonText}
                            </div>

                            <div className='mt-10-0'>
                                <ConnectWalletButton className="w-15-0 h-3-7 bg-primary-purple flex justify-center items-center text-white font-light text-0-9 rounded-xl lg:w-35-0  transition ease-in duration-100 active:bg-opacity-50 active:translate-y-0-1"></ConnectWalletButton>
                            </div>
                        </div>}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Add
