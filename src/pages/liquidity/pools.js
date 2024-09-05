import React, { useState } from 'react'
import PageTabs from '@/components/pools/pageTabs';
import Switch from 'antd-mobile/es/components/switch'

const LiquidityPools = () => {
    const filterItems = [{ id: 1, title: 'Live' }, { id: 2, title: 'Finished' }]
    const farmTypeItems = [{ id: 1, title: 'V3 Farms', icon: 'icon-geshizhuanhuan', }, { id: 2, title: 'Stable Swap', icon: 'icon-huojian', }, { id: 3, title: 'Booster Available', icon: 'icon-dollar', },]
    const poolItems = [
        {
            id: 1, showMore: false, title: 'SDT-WBNB', point: 0.25, arp: 232.23, preArp: 134.3,
            detailsItems: [{ title: 'Staked Liquidity', content: '$2,761,857', showQue: true }, { title: 'Multiplier', content: '15.5x', showQue: true }, { title: 'Available', content: '0 LP', showQue: false }, { title: 'Staked', content: '0 LP', showQue: false }],
            viewItems: [{ title: 'Add USDT-BAB LP' }, { title: 'See Pair Info' }, { title: 'View Contract' }]
        },
        {
            id: 2, showMore: false, title: 'SDT-WBNB', point: 0.25, arp: 232.23, preArp: 134.3,
            detailsItems: [{ title: 'Staked Liquidity', content: '$2,761,857', showQue: true }, { title: 'Multiplier', content: '15.5x', showQue: true }, { title: 'Available', content: '0 LP', showQue: false }, { title: 'Staked', content: '0 LP', showQue: false }],
            viewItems: [{ title: 'Add USDT-BAB LP' }, { title: 'See Pair Info' }, { title: 'View Contract' }]
        },
        {
            id: 3, showMore: false, title: 'SDT-WBNB', point: 0.25, arp: 232.23, preArp: 134.3,
            detailsItems: [{ title: 'Staked Liquidity', content: '$2,761,857', showQue: true }, { title: 'Multiplier', content: '15.5x', showQue: true }, { title: 'Available', content: '0 LP', showQue: false }, { title: 'Staked', content: '0 LP', showQue: false }],
            viewItems: [{ title: 'Add USDT-BAB LP' }, { title: 'See Pair Info' }, { title: 'View Contract' }]
        }
    ]
    let [currentFilter, changeFilter] = useState(1)
    let [showFarmType, setToggleFarmType] = useState(false)
    let [poolItemList, setShowMorePool] = useState(poolItems)
    const toggleFarmType = () => {
        setToggleFarmType(showFarmType = !showFarmType)
        console.log(showFarmType)
    }
    const handleFilterItem = (item) => {
        changeFilter(currentFilter = item.id)
    }
    const handleShowMore = ({ id }) => {
        setShowMorePool(poolItemList =>
            poolItemList.map(item =>
                item.id === id ? { ...item, showMore: !item.showMore } : item))
    }
    return (
        <div className='pt-5-0 bg-black lg:pt-6-3 xl:pt-8-4'>
            <PageTabs defaultIndex={0}></PageTabs>
            <div className='bg-no-repeat bg-farms-banner w-full h-35-5 relative text-white'>
                <div className='w-full'>
                    <div className='w-full px-1-8 pt-1-2'>
                        <div className='font-bold text-3-0'>Farms</div>
                        <div className='font-bold text-1-3 mb-1-0'>Stake LP tokens to earn.</div>
                        <div className='button-click bg-farms-green rounded-xl text-1-0 px-1-0 py-0-6 w-max'>Community Auctions</div>
                    </div>
                </div>
                <div className='w-full flex justify-between items-center absolute bottom-1-4 px-1-8'>
                    <div className='flex'>
                        <div className='mr-0-2'>Yield Booster</div>
                        <div className='icon iconfont icon-right2'></div>
                    </div>
                    <div className='button-click bg-farms-green rounded-xl text-1-0 px-1-0 py-0-4'>Connect Wallet</div>
                </div>
            </div>
            <div className='bg-pools-module pt-1-2'>
                <div className='w-full px-1-3 flex flex-col mb-1-3'>
                    <div className='text-white mb-1-0 text-1-0'>FILTER BY</div>
                    <div className='w-full bg-farms-filter border-2 border-black rounded-full p-0-2 flex text-1-0 h-3-2 mb-2-0'>
                        {filterItems.map((item, index) => {
                            return <div onClick={() => handleFilterItem(item)} key={index} className={`w-1/2 h-2-5 rounded-full flex justify-center items-center ${currentFilter === item.id ? 'bg-button-active text-white' : 'bg-transparent text-primary-60'}`}>
                                {item.title}
                            </div>
                        })}
                    </div>
                    <div className='w-full flex justify-between mb-1-0'>
                        <div onClick={() => toggleFarmType()} className='button-click bg-farms-filter border-2 border-black rounded-full p-0-2 flex text-1-0 text-primary-60 h-3-2 items-center w-10-7 justify-center relative'>
                            Farm Types
                            {showFarmType && <div className='absolute w-13-8 h-11-4 text-primary-60 bg-farms-filter rounded-3xl  flex flex-col justify-between top-3-4 left-0-1 border-2 border-black'>
                                {farmTypeItems.map((item, index) => {
                                    return <div key={index} className={`w-full flex justify-start items-center h-3-8 pl-1-3`}>
                                        <div className={`icon iconfont ${item.icon} text-1-1 mr-1-0`}></div>
                                        <div className='text-1-0'>{item.title}</div>
                                    </div>
                                })}
                            </div>}
                        </div>
                        <div className='flex justify-start items-center'>
                            <div className='text-white mr-0-8'>Staked only</div>
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
                    <div className='w-full flex justify-between'>
                        <div className=''>
                            <div className='text-white pl-0-5 text-1-0'>SORT BY</div>
                            <div className='w-8-2 h-3-1 rounded-full flex  justify-center items-center border-liquid-staking-border border bg-primary-50 text-primary-60 text-1-0'> Farm Types</div>
                        </div>
                        <div className=''>
                            <div className='text-white pl-0-5 text-1-0'>SEARCH</div>
                            <div className='w-12-4 h-3-1 rounded-full flex  justify-center items-center border-liquid-staking-border border bg-primary-50 text-primary-60 text-1-0'>
                                <input className='w-11/12 h-full bg-transparent outline-none'></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-syrup-module w-full rounded-t-3xl pt-1-4'>
                    {poolItemList.map((item, index) => {
                        return <div key={index} className='w-full border-b border-voting-border border-dashed py-0-7'>
                            <div className='w-22-0 mx-auto flex justify-between items-start '>
                                <div className='flex  justify-start items-end'>
                                    <div className='w-1-7 h-1-7 rounded-full border border-black overflow-hidden'>
                                        <img className='object-cover' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAASFBMVEVHcEz3kxr3kxr3kxr3kxr3kxr3kxr3kxr3kxr3jAD3khX92734pU34nDP////95tL80qz7xZT+8ub5r2T3kQ33kxr3kxr6uXuN5P8aAAAAF3RSTlMAL2qjBor/vtb////////////////2JbbIuikAAAD7SURBVHgBhZJHkoUwDAVNEsjGz9n//jcdTGmIE3rbyiV10vXDRt+pF+NEB9N4dz3d6K9upgfz6RYSmEnTzvLI08TG8Cp2vvezzHAMz5e+o1QMiB4hIWUJbjPLDjk57CTWstEmC4nlCLQAR2KVqiRoAhxrD0Tp2p3r8wcIrBmApPZqOqTfZOYEgL+bDoeMED4iB5HSMhmgLSry2IRTa8ktPxxle9kyOGBl3cZyx43qpWFYyUbAiKxyBL1nCmumRjnOl9nCm9uwk9o4Dm89mCyLo+aOkQzHyFo/XmWWwtqm/HqU40306ZZ/H+yf1xSmQkKZ1JvaT8Mw9VUdfAG5uBUIY0iOdgAAAABJRU5ErkJggg=='></img>
                                    </div>
                                    <div className='w-1-1 h-1-1 rounded-full bg-futures-word border border-black -ml-0-6 overflow-hidden'>
                                        <img className='object-cover' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAASFBMVEVHcEz3kxr3kxr3kxr3kxr3kxr3kxr3kxr3kxr3jAD3khX92734pU34nDP////95tL80qz7xZT+8ub5r2T3kQ33kxr3kxr6uXuN5P8aAAAAF3RSTlMAL2qjBor/vtb////////////////2JbbIuikAAAD7SURBVHgBhZJHkoUwDAVNEsjGz9n//jcdTGmIE3rbyiV10vXDRt+pF+NEB9N4dz3d6K9upgfz6RYSmEnTzvLI08TG8Cp2vvezzHAMz5e+o1QMiB4hIWUJbjPLDjk57CTWstEmC4nlCLQAR2KVqiRoAhxrD0Tp2p3r8wcIrBmApPZqOqTfZOYEgL+bDoeMED4iB5HSMhmgLSry2IRTa8ktPxxle9kyOGBl3cZyx43qpWFYyUbAiKxyBL1nCmumRjnOl9nCm9uwk9o4Dm89mCyLo+aOkQzHyFo/XmWWwtqm/HqU40306ZZ/H+yf1xSmQkKZ1JvaT8Mw9VUdfAG5uBUIY0iOdgAAAABJRU5ErkJggg=='></img>
                                    </div>
                                </div>
                                <div className='text-white flex-1'>
                                    <div className='text-0-9 font-semibold'>{item.title}</div>
                                    <div className='bg-primary-red rounded-full px-0-4 py-0-1  text-0-8 w-max'>{item.point}%</div>
                                    <div className='flex justify-start items-center'>
                                        <div className='mr-1-0'> ARP :</div>
                                        <div className='text-menu-green font-bold mr-1-0'> Up to {item.arp}%</div>
                                        <div className='line-through mr-1-0'>{item.preArp}%</div>
                                        <div className='flex justify-center items-center w-1-7 h-1-7 rounded-full bg-purple31'>
                                            <div className='text-menu-green icon iconfont icon-jisuanqi text-0-9' ></div>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => handleShowMore(item)} className={`icon iconfont icon-down2 text-1-3 duration-100 transition ease-in-out text-white ${item.showMore ? 'rotate-180' : ''}`}></div>
                            </div>
                            {item.showMore && <div className='pt-1-0'>
                                <div className='w-22-0 mx-auto'>
                                    {item.detailsItems.map((_item, _index) => {
                                        return <div className='flex justify-between w-full text-white text-0-8 mb-1-0'>
                                            <div className='flex-1'>{_item.title}</div>
                                            <div className=''>{_item.content}</div>
                                            {_item.showQue && <div className='ml-1-0 icon iconfont icon-wenhaoxiao'></div>}
                                        </div>
                                    })}
                                </div>
                                <div className='w-22-0 mx-auto'>
                                    {item.viewItems.map((_item, _index) => {
                                        return <div className='flex justify-between items-center w-full border border-black bg-farms-filter text-menu-green h-2-0 mb-1-0 text-0-8 px-1-0 rounded-xl'>
                                            <div className='flex-1'>{_item.title}</div>
                                            <div className='icon iconfont icon-right font-bold'></div>
                                        </div>
                                    })}
                                </div>
                            </div>}
                        </div>
                    })}
                </div>
            </div>

        </div>
    )
}

export default LiquidityPools
