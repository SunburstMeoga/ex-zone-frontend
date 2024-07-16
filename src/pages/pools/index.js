import React, { useState } from 'react';
import Switch from 'antd-mobile/es/components/switch'
import CalculatorPopup from '@/components/pools/calculatorPopup'
import { stakingStateItems, syrupItems } from '@/dictionary/pools';
import PageTabs from '@/components/pools/pageTabs';
const Pools = () => {
    let [activeState, setActiveState] = useState(1)
    let [syrupListItems, changeSyrupListItems] = useState(syrupItems)
    let [showCalculatorPopup, setCalculatorPopup] = useState(false)
    let handleState = ({ id }) => {
        console.log(id)
        setActiveState(activeState = id)
    }
    let handleShowMore = ({ id }) => {
        console.log(id)
        changeSyrupListItems(syrupListItems =>
            syrupListItems.map(item =>
                item.id === id ? { ...item, showMore: !item.showMore } : item))
    }
    let toggleCalculatorPopup = () => {
        console.log('object')
        setCalculatorPopup(showCalculatorPopup = !showCalculatorPopup)
    }
    return (
        <>
            <div className='pt-5-0 bg-black lg:pt-6-3 xl:pt-8-4' >
                <PageTabs></PageTabs>
                <div className='w-full bg-phone-pools-banner-one bg-bottom bg-no-repeat bg-contain h-auto pt-4-8 lg:bg-pad-pools-banner-one lg:pt-6-0 xl:bg-pc-pools-banner-one xl:bg-cover'>
                    <div className='flex flex-col justify-start items-center lg:bg-pad-spyruo-pools'>
                        <div className='text-white text-3-0 font-bold text-left mb-1-1 w-21-4 lg:w-full lg:text-center lg:text-4-0'>Syrup Pools</div>
                        <div className='text-trading-yellow text-left line-height-point-122 text-2-0 font-semibold w-21-4 mb-6-4 voting-text-shadow lg:w-full lg:text-center lg:mb-1-8'>Just stake some tokens to earn. <br></br> High APR, low risk.</div>
                        <div className='bg-black80 w-21-4 p-2-1 flex flex-col justify-start items-center rounded-xl mb-2-2 backdrop-blur-lg voting-text-shadow lg:bg-transparent lg:backdrop-blur-none lg:w-full '>
                            <div className='hidden lg:block text-white text-1-5 w-full text-center xl:mb-2-0'>
                                Earn HAH while trading your <br className='xl:hidden'></br> favorite tokens on PancakeSwap by <br></br> being the top traders!
                            </div>
                            <div className='text-primary-purple text-center text-1-5 font-semibold mb-1-4 '>HAH Staking <br></br>Up to <span className='text-trading-yellow'>26.09% </span>APR</div>

                            <div className='text-primary-60 text-0-9 text-center'>
                                Satke HAH to get veHAH, earn up to 26.09% APR <br className='hidden lg:block xl:hidden'></br> from veCAKE pool and revenue sharing.<br></br><br className='xl:hidden'></br>
                                Unlock other benefits like voting incentives, yield <br className='hidden lg:block xl:hidden'></br> boosting, IFO, and so much more...
                            </div>

                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-start flex-col items-center bg-pools-module pt-1-7 lg:bg-pad-pools'>
                    <div className='w-22-0 flex flex-col justify-start items-center lg:w-38-8 xl:flex-row xl:w-full xl:px-2-7 xl:mb-2-0'>
                        <div className='w-full flex justify-between items-center xl:order-2 xl:flex-1 xl:justify-end'>
                            <div className='bg-black p-0-5 rounded-full flex justify-start items-center '>
                                {stakingStateItems.map((item, index) => {
                                    return <div key={index} onClick={() => handleState(item)} className={`rounded-full py-0-4 px-1-2 lg:px-3-2 text-1-0 ${item.id === activeState ? 'text-white bg-button-active' : 'bg-transparent text-primary-60'}`}>
                                        {item.title}
                                    </div>
                                })}
                            </div>
                            <div className='flex justify-start items-center xl:ml-4-0'>
                                <div className='text-white text-0-9'>Staked only</div>
                                <div className='ml-0-4'> <Switch
                                    defaultChecked
                                    style={{
                                        '--checked-color': '#29E5AD',
                                    }}
                                /></div>
                            </div>
                        </div>
                        <div className='w-full mt-1-5 xl:flex xl:order-1 xl:justify-start xl:w-auto'>
                            <div className='w-full mb-1-5 xl:flex xl:items-center xl:flex-1'>
                                <div className='text-white text-1-3 mb-0-8 xl:mb-0-1 xl:mr-1-0'>SORT BY</div>
                                <div className='rounded-2xl border border-primary-purple w-full h-3-1 lg:h-4-5 lg:border-liquid-staking-border lg:bg-pad-pools-border xl:w-23-4'>

                                </div>
                            </div>
                            <div className='w-full mb-1-5 xl:flex xl:items-center xl:w-auto xl:ml-2-0'>
                                <div className='text-white text-1-3 mb-0-8 xl:mb-0-1 xl:mr-1-0'>SEARCH</div>
                                <div className='rounded-2xl border border-primary-purple w-full h-3-1 lg:h-4-5 lg:border-liquid-staking-border lg:bg-pad-pools-border xl:w-23-4'>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-2-7 hidden xl:block w-full'>
                        <div className='bg-syrup-module rounded-2xl w-full border border-liquid-staking-border bg-pad-pools-border mb-3-9 h-auto px-1-2'>
                            {syrupListItems.map((item, index) => {
                                return <div key={index} className='py-2-5 border-b border-dashed border-voting-border '>
                                    <div className='flex justify-around items-center'>
                                        <div className='flex justify-start items-center mr-7-5'>
                                            <div className='flex justify-start items-end'>
                                                <div className='w-2-8 h-2-8 rounded-full bg-futures-word'></div>
                                                <div className='w-2-0 h-2-0 rounded-full bg-futures-word border border-black -ml-0-6'></div>
                                            </div>
                                            <div className='flex ml-0-7 flex-col justify-start items'>
                                                <div className='text-white text-1-5 font-semibold'>{item.title}</div>
                                                <div className='text-purple62 text-1-0'>{item.illustrate}</div>
                                            </div>
                                        </div>
                                        <div className='w-0-1 h-1-6 bg-primary-60'></div>
                                        <div className='text-white px-2-9'>
                                            <div className='text-purple62 text-1-0'>
                                                PEPE Earned
                                            </div>
                                            <div className='flex justify-between items-baseline text-1-5 w-15-0'>
                                                <div className=''>0</div>
                                                <div className='text-1-0'>0 USD</div>

                                            </div>
                                        </div>
                                        <div className='w-0-1 h-1-6 bg-primary-60'></div>
                                        <div className='text-white px-2-9'>
                                            <div className='text-purple62 text-1-0'>
                                                {item.totalStaked}
                                            </div>
                                            <div className='flex justify-start items-baseline text-1-5'>
                                                <div className=''>0</div>
                                                <div className='text-1-0 ml-0-3'>HAH</div>

                                            </div>
                                        </div>
                                        <div className='w-0-1 h-1-6 bg-primary-60'></div>
                                        <div className='text-white px-2-9'>
                                            <div className='text-purple62 text-1-0'>
                                                APR
                                            </div>
                                            <div className='flex justify-start items-baseline text-1-5'>
                                                <div className=''>1.48%</div>
                                                <div className='ml-1-0 text-menu-green icon iconfont icon-jisuanqi'></div>

                                            </div>
                                        </div>
                                        <div className='w-0-1 h-1-6 bg-primary-60'></div>
                                        <div className='text-white px-2-9'>
                                            <div className='text-purple62 text-1-0'>
                                                Ends in:
                                            </div>
                                            <div className='flex justify-start items-baseline text-1-5'>
                                                <div className=''>4 days</div>
                                                <div className='ml-1-0 text-menu-green icon iconfont icon-naozhong'></div>

                                            </div>
                                        </div>
                                        <div className='icon iconfont icon-down2 text-white'></div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className='bg-syrup-module rounded-t-3xl w-full h-auto lg:bg-none lg:rounded-3xl lg:w-38-8 lg:px-1-7 lg:border lg:border-liquid-staking-border lg:bg-pad-pools-border lg:mb-3-9 xl:hidden'>
                        <div className='w-full flex flex-col justify-start items-center'>
                            {syrupListItems.map((item, index) => {
                                return <div key={index} className='w-21-8 py-1-0 border-b border-dashed border-voting-border lg:w-36-1'>
                                    <div className='w-full flex justify-between items-center' onClick={() => handleShowMore(item)}>
                                        <div className='flex justify-start items-start'>
                                            <div className='flex justify-start items-end'>
                                                <div className='w-1-7 h-1-7 rounded-full bg-futures-word'></div>
                                                <div className='w-1-1 h-1-1 rounded-full bg-futures-word border border-black -ml-0-6'></div>
                                            </div>
                                            <div className='flex ml-0-7 flex-col justify-start items'>
                                                <div className='text-white text-0-8 font-semibold'>{item.title}</div>
                                                <div className='text-purple62 text-0-7 w-6-4'>{item.illustrate}</div>
                                            </div>
                                        </div>
                                        <div className='flex justify-end items-center text-white'>
                                            <div className='flex flex-col justify-start items-end mr-1-2'>
                                                <div className='text-0-7 font-medium mb-0-2'>{item.totalStaked}</div>
                                                <div className='text-0-8 font-medium'>{item.totalStaked} HAH</div>
                                            </div>
                                            <div className='icon iconfont icon-down2 text-0-6 '></div>
                                        </div>
                                    </div>
                                    {item.showMore && <div>
                                        <div className='mt-1-0 flex justify-between items-center mb-0-7'>
                                            {item.detailsItems.map((_item, _index) => {
                                                return <div key={_index} className='bg-syrup-card border border-pools-border rounded-xl py-0-6 px-0-4 text-white w-7-0 lg:w-10-4' onClick={() => toggleCalculatorPopup()}>
                                                    <div className='text-0-7 mb-0-2'>{_item.title}</div>
                                                    <div className='flex justify-between items-baseline font-medium'>
                                                        <div className='flex justify-start items-baseline'>
                                                            <div className='text-1-2'>{_item.point}</div>
                                                            {_item.unitType === 'icon' && <div className='text-0-7 ml-0-2'>{_item.unit}</div>}
                                                        </div>
                                                        <div className=''>
                                                            {_item.unitType === 'word' && <div className=''>0 {_item.unit}</div>}
                                                            {_item.unitType === 'icon' && <div className={`text-menu-green icon iconfont ${_item.icon}`}></div>}
                                                        </div>
                                                    </div>
                                                </div>
                                            })}
                                        </div>
                                        <div className='w-full'>
                                            {item.viewItems.map((_item, _index) => {
                                                return <div key={_index} className='bg-black rounded-xl flex justify-between items-center py-0-6 px-1-0 text-menu-green mb-0-8'>
                                                    <div className='text-0-8'>{_item.title}</div>
                                                    <div className='icon iconfont icon-right'></div>
                                                </div>
                                            })}
                                        </div>
                                        <div className='w-full'>
                                            {item.statusItems.map((_item, _index) => {
                                                return <div key={_index} className='flex justify-between items-center py-0-6 px-1-0 text-white rounded-xl bg-syrup-card border border-pools-border h-4-0 mb-1-0'>
                                                    <div className='flex flex-col justify-start items-start'>
                                                        <div className='text-0-7'>{_item.title}</div>
                                                        <div className='text-1-2 mt-0-3'>{_item.count}</div>
                                                    </div>
                                                    <div className='px-1-0 font-bold text-0-8 rounded-lg bg-primary-purple flex justify-center items-center h-1-9'>Connect Wallet</div>
                                                </div>
                                            })}
                                        </div>
                                    </div>}
                                </div>
                            })}
                        </div>
                        <div className='text-white flex justify-center items-baseline my-1-6'>
                            <div className='flex justify-center items-center w-1-7 h-1-7 rounded-full bg-primary-purple'>
                                <div className='icon iconfont icon-left-arrow'></div>
                            </div>
                            <div className='flex justify-center items-center px-1-0 text-1-2'>
                                Page 4 of 4
                            </div>
                            <div className='flex justify-center items-center w-1-7 h-1-7 rounded-full bg-primary-purple'>
                                <div className='icon iconfont icon-left-arrow rotate-180 '></div>
                            </div>
                        </div>
                    </div>
                </div>
                <CalculatorPopup showCalculatorPopup={showCalculatorPopup} onClose={toggleCalculatorPopup}></CalculatorPopup>
            </div>

        </>
    );
};

export default Pools;
