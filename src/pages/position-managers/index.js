import React, { useState } from 'react'
import PageTabs from '@/components/pools/pageTabs';
import Switch from 'antd-mobile/es/components/switch'

import { stakingStateItems, positionManagersItems } from '@/dictionary/pools'
const PositionManagers = () => {
    let [activeState, setActiveState] = useState(1)
    let [positionManagersItemsList, toggleItemShow] = useState(positionManagersItems)
    let handleState = ({ id }) => {
        console.log(id)
        setActiveState(activeState = id)
    }
    let handleShowMore = ({ id }) => {
        console.log(id)
        toggleItemShow(positionManagersItemsList =>
            positionManagersItemsList.map(item =>
                item.id === id ? { ...item, showMore: !item.showMore } : item))
    }
    return (
        <>
            <div className='pt-5-0 bg-black lg:pt-6-3 xl:pt-8-4' >
                <PageTabs defaultIndex={3}></PageTabs>
                <div className='w-full bg-phone-position-managers-one bg-center bg-no-repeat bg-contain h-auto pt-4-8 lg:bg-pad-position-managers-one lg:bg-cover'>
                    <div className='flex flex-col justify-start items-center'>
                        <div className='text-white text-3-0 font-bold text-left mb-0-7 w-21-4 lg:w-full lg:text-center lg:text-4-0'>Position Manager</div>
                        <div className='text-trading-yellow text-left line-height-point-122 text-2-0 font-semibold w-21-4 mb-6-4 voting-text-shadow lg:w-39-0 lg:text-2-5 lg:text-center lg:text-bold'> Automate your  <br className='lg:hidden'></br> EX.zone V3 <br /> liquidity</div>
                        <div className='bg-black30 w-21-4 p-2-1 flex flex-col justify-start items-center rounded-xl mb-2-2 backdrop-blur-lg lg:backdrop-blur-none lg:bg-transparent lg:text-white lg:w-full'>
                            <div className='text-primary-purple text-center text-1-5 font-semibold mb-1-4 lg:text-white'>Yield Booster</div>
                            <div className='text-primary-60 text-0-9 text-center lg:text-white lg:txt-1-0'>
                                Yield Booster <br></br>
                                Connect wallet to view booster<br></br>
                                An active veCAKE staking position is required <br className='hidden lg:block'></br> for activating farm yield boosters.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-start flex-col items-center bg-pools-module pt-1-7'>
                    <div className='w-22-0 flex flex-col justify-start items-center lg:w-38-8'>
                        <div className='w-full flex justify-between items-center'>
                            <div className='bg-black p-0-5 rounded-full flex justify-start items-center'>
                                {stakingStateItems.map((item, index) => {
                                    return <div key={index} onClick={() => handleState(item)} className={`rounded-full py-0-4 px-1-2 text-1-0 ${item.id === activeState ? 'text-white bg-button-active' : 'bg-transparent text-primary-60'}`}>
                                        {item.title}
                                    </div>
                                })}
                            </div>
                            <div className='flex justify-start items-center'>
                                <div className='text-white text-0-9'>Staked only</div>
                                <div className='ml-0-4'> <Switch
                                    defaultChecked
                                    style={{
                                        '--checked-color': '#29E5AD',
                                    }}
                                /></div>
                            </div>
                        </div>
                        <div className='w-full mt-1-5'>
                            <div className='w-full mb-1-5'>
                                <div className='text-white text-1-3 mb-0-8'>SORT BY</div>
                                <div className='rounded-2xl border border-primary-purple w-full h-3-1'>

                                </div>
                            </div>
                            <div className='w-full mb-1-5'>
                                <div className='text-white text-1-3 mb-0-8'>SEARCH</div>
                                <div className='rounded-2xl border border-primary-purple w-full h-3-1'>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-syrup-module rounded-t-3xl w-full h-auto'>
                        <div className='w-full flex flex-col justify-start items-center pt-0-6'>
                            {positionManagersItemsList.map((item, index) => {
                                return <div key={index} className='border-b border-voting-border py-1-0 border-dashed w-21-8 lg:w-38-8' onClick={() => handleShowMore(item)}>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex justify-start items-start'>
                                            <div className='flex justify-start items-start'>
                                                <div className='w-1-2 h-1-2 rounded-full bg-futures-word'></div>
                                                <div className='w-1-7 h-1-7 rounded-full bg-futures-word -ml-0-6 overflow-hidden'>
                                                    <img className='object-cover' src='https://scan.hashahead.org/img/logo.c55c29e5.jpg'></img>
                                                </div>
                                            </div>
                                            <div className='ml-0-7 text-white f'>
                                                <div className='text-0-9 font-semibold mb-0-2'>{item.title}</div>
                                                <div className='flex justify-start items-center mb-0-2'>
                                                    <div className='rounded-full py-0-2 px-0-4 font-semibold text-0-7 bg-primary-purple'>{item.point}</div>
                                                    <div className='rounded-full py-0-2 px-0-4 font-semibold text-0-7 bg-primary-red ml-0-4'>{item.tag}</div>
                                                </div>
                                                <div className='flex justify-start items-center'>
                                                    <div className='text-0-9'>
                                                        APR:<span className='text-menu-green'> {item.upto}</span> <span className='line-through'>{item.preUpto}</span>
                                                    </div>
                                                    <div className='rounded-full w-1-7 h-1-7 bg-purple31 text-menu-green flex justify-center items-center ml-0-4'>
                                                        <div className='icon iconfont icon-jisuanqi'></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='icon iconfont icon-down2 text-0-6 text-white'></div>
                                    </div>
                                    {item.showMore && <div className='bg-transparent w-full'>
                                        {item.detailsItems.map((_item, _index) => {
                                            return <div key={_index} className='flex justify-between items-center py-1-0 text-white text-0-7 w-full'>
                                                <div className=''>{_item.title}</div>
                                                <div className=''>{_item.content}</div>
                                            </div>
                                        })}
                                        {item.viewItems.map((_item, _index) => {
                                            return <div key={_index} className='bg-black rounded-xl flex justify-between items-center py-0-6 px-1-0 text-menu-green mb-0-8 w-full'>
                                                <div className='text-0-8'>{_item.title}</div>
                                                <div className='icon iconfont icon-right'></div>
                                            </div>
                                        })}
                                        <div className='w-full border border-swap-copy-icon rounded-3xl p-1-4 text-white mb-1-0'>
                                            <div className='text-0-7 font-semibold mb-0-4'>MANAGED BY</div>
                                            <div className='text-1-0 font-bold mb-0-4'>DefiEdge</div>
                                            <div className='text-0-7'>
                                                With <span className='font-bold'>Automated Liquidity Optimization</span> strategy
                                            </div>
                                        </div>
                                        <div className='w-full border border-swap-copy-icon rounded-3xl p-1-4 text-white'>
                                            <div className='text-0-7 font-semibold mb-0-4'>MANAGED BY</div>
                                            <div className='text-0-9 font-bold w-18-7 h-3-0 flex justify-center items-center mb-2-0 bg-primary-purple rounded-xl'>Connect Wallet</div>
                                            <div className='text-0-7 font-semibold mb-0-4'>MANAGED BY</div>
                                            <div className='text-1-0 font-bold mb-0-4'>DefiEdge</div>
                                            <div className='text-0-7 mb-2-0'>Connect wallet to activate yield booste</div>
                                            <div className='text-0-9 font-bold w-18-7 h-3-0 flex justify-center items-center bg-primary-purple rounded-xl'>Next</div>
                                        </div>
                                    </div>}
                                </div>
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PositionManagers
