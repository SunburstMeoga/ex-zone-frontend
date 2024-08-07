import React, { useState } from 'react'
import { tradingRewardItems, tradingPoolItems, leaderboardItems, rankList, earnWayItems, tradingQuestingItems, rewardsBreakdown } from '@/dictionary/more'
const TradingReward = () => {
    let [currentTradingType, changeTradingType] = useState(2)
    let [rankListData, changeRankListData] = useState(rankList)
    let handleTradingType = (id) => {
        changeTradingType(currentTradingType = id)
        console.log(id)
    }
    let handleShowMore = ({ id }) => {
        console.log(id)
        changeRankListData(rankListData =>
            rankListData.map(item =>
                item.id === id ? { ...item, showMore: !item.showMore } : item))
    }
    return (
        <div className='bg-page-black pt-4-3'>
            <div className={`flex flex-col justify-start items-center  pt-1-9 bg-no-repeat  ${currentTradingType === 1 ? 'bg-trading-stakers-banner bg-top bg-contain' : 'bg-trading-banner-one bg-left bg-58%'}`}>
                <div className='w-22-0 text-white text-1-2 mb--7 flex justify-around items-center lg:w-28-1 lg:text-2-0 lg:font-medium'>
                    {tradingRewardItems.map((item, index) => {
                        return <div key={index} className={`text-1-2 ${currentTradingType === item.id ? 'text-menu-green' : 'text-voting-border'}`} onClick={() => handleTradingType(item.id)}>{item.title}</div>
                    })}
                </div>
                {/* <div className={` ${currentTradingType === 2 ? 'bg-page-black bg-' : ''}`}></div> */}
                <div className={`w-full h-26-4 flex flex-col justify-start items-end relative mb-1-4 lg:h-56-4 `}>
                    {/* <div className='absolute -left-0-1 w-14-0 h-26-4 bg-cover bg-left bg-no-repeat bg-trading-banner-one lg:bg-pad-trading-banner-one lg:w-32-0 lg:h-56-4 '></div> */}
                    {/* <div className='trading-top-gradient w-full h-26-4 border border-red-500 absolute -left-0-1 -top-0-1 lg:hidden'></div> */}
                    <div className='flex flex-col w-full h-full justify-start items-center relative z-20 pr-2-0 text-right mt-4-0 lg:justify-start lg:mt-8-9 lg:text-center lg:pr-0-1'>
                        <div className='text-white font-bold text-3-0 w-full line-height-point-120 mb-0-8 lg:text-4-0'>
                            Trading <br></br> Reward
                        </div>
                        <div className='text-trading-yellow font-bold text-2-0 w-full line-height-point-133 mb-4-0 lg:text-2-5'>
                            3% trading fee <br></br> rebate up for grab!
                        </div>
                        <div className='text-white font-semibold text-1-0 w-full line-height-point-133 lg:text-1-5'>
                            Earn HAH while trading your <br></br> favorite tokens on EX.zone <br></br> by being the top traders!
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-start items-center lg:-mt-18-0 lg:relative lg:z-10'>
                    <div className='text-white bg-primary-purple w-19-0 h-4-7 rounded-xl flex justify-center items-center text-1-5 font-medium mb-0-9 lg:w-33-0 lg:h-5-9 lg:text-2-0'>Start Trading</div>
                    <div className='bg-white text-primary-purple w-19-0 h-4-7 rounded-xl flex justify-center items-center text-1-5 font-medium mb-3-6 lg:w-33-0 lg:h-5-9 lg:text-2-0 lg:mb-0-1'>How to Earn?</div>
                </div>
            </div>

            <div className='bg-trading-module w-full flex flex-col justify-start items-center pt-4-7 text-white lg:pt-8-7 '>
                <div className='font-bold w-full text-3-0 line-height-point-133 text-center lg:text-4-0'>
                    Your Trading <br></br> Reward
                </div>
                <div className='text-1-2 font-medium line-height-point-133 text-center  mb-4-6 lg:text-2-2 lg:mb-2-0'>
                    Connect wallet to view your <br></br> trading volume and reward
                </div>
                <div className='text-white bg-primary-purple w-19-0 h-4-7 rounded-xl flex justify-center items-center text-1-5 font-medium mb-0-9 relative z-10'>Start Trading?</div>
                <div className='bg-trading-gift bg-cover bg-no-repeat bg-center w-full  -mt-6-0 mb-2-0 lg:bg-pad-trading-gift lg:-mt-0-1 lg:mb-auto'>
                    <div className='w-full h-16-3 trading-module-gradient lg:h-21-0'></div>
                </div>
                <div className='bg-trading-gold bg-center bg-no-repeat bg-cover w-full h-19-5 flex justify-center items-center lg:bg-pad-trading-gold lg:w-37-2 lg:h-23-1'>
                    <div className='text-white font-bold line-height-point-133 text-3-0 text-center lg:text-4-0'>
                        Current <br></br> Reward Pool
                    </div>

                </div>
                <div className='border border-primary-gold rounded-xl w-23-0 flex flex-col justify-start items-center px-1-7 pb-2-0 mb-2-0 lg:w-53-5'>
                    {tradingPoolItems.map((item, index) => {
                        return <div key={index} className='border-b border-dashed w-20-2 border-voting-border py-1-2 flex justify-between items-center lg:w-48-9'>
                            <div className='text-1-0 font-light w-7-7 lg:text-1-5 lg:w-23-8'>{item.title}</div>
                            <div className='flex justify-start items-center'>
                                <div className='font-bold text-1-0 lg:text-1-5'>{item.content}</div>
                                {item.showView && <div className='rounded voting-clicked-button p-0-2 px-0-4 ml-0-8 text-0-7 lg:text-1-5'>View Pairs</div>}
                            </div>
                        </div>
                    })}
                </div>
            </div>

            {currentTradingType === 2 && <div className='bg-trading-banner-two bg-cover bg-no-repeat bg-center w-full flex flex-col justify-start items-center text-white lg:bg-pad-trading-banner-two h-auto lg:pb-2-0'>
                <div className='w-full text-3-0 text-center line-height-point-133 pt-2-8 mb-1-5 lg:pt-2-6 lg:text-4-0 lg:font-bold'>
                    Leaderboard
                </div>
                <div className='text-1-0 text-center w-full mb-0-8 lg:text-1-5'>
                    Round #1 | Jun 28, 2023, 08:00 <br></br>- Aug 1, 2023, 08:00
                </div>
                <div className='text-menu-green flex justify-center items-center mb-2-8'>
                    <div className='flex justify-center items-center text-1-2'>
                        <div className='icon iconfont icon-left-arrow lg:text-1-5'></div>
                    </div>
                    <div className='flex justify-center items-center px-1-0 lg:text-1-5'>
                        Page 1 of 1
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='icon iconfont icon-left-arrow rotate-180 lg:text-1-5'></div>
                    </div>
                </div>
                <div className='w-22-9 flex flex-col justify-start items-center lg:w-33-4'>
                    {leaderboardItems.map((item, index) => {
                        return <div key={index} className='rounded-2xl relative w-full overflow-hidden h-15-2 flex flex-col justify-end mb-2-8 lg:h-19-4'>
                            <div className='absolute left-0-6 top-1-0 w-5-6 z-20'>
                                <img src={item.rankImg} alt=''></img>
                            </div>
                            <div className='absolute top-0-1  w-full flex flex-col justify-start items-center z-20'>
                                <div className='w-5-4 h-5-4 rounded-full overflow-hidden mb-0-7'>
                                    <img src='https://pic1.zhimg.com/50/9b2a11a46cb0d1740e90b0f4f35e8a49_l.jpg?source=b6762063' alt=''></img>
                                </div>
                                <div className='text-white font-bold text-1-2'>{item.address}</div>
                            </div>
                            <div className='w-full h-6-1 bg-trading-board-top relative z-10 rounded-t-2xl '></div>
                            <div className='bg-trading-board-bottom px-2-0 w-full h-6-2 flex justify-between items-center lg:h-10-8'>
                                <div className='flex flex-col justify-start items-start h-6-1 lg:h-10-8'>
                                    <div className='text-voting-border text-1-0 pt-0-8 mb-0-5 lg:text-1-5'>{item.totalReward}</div>
                                    <div className='font-semibold text-1-0 mb-0-2 lg:text-1-5'>{item.rewardCount}</div>
                                    <div className='font-semibold text-0-7 lg:text-1-5'>{item.hahCount}</div>
                                </div>
                                <div className='flex flex-col justify-start items-start h-6-1 lg:h-10-8'>
                                    <div className='text-voting-border text-1-0 pt-0-8 mb-0-5 lg:text-1-5'>{item.tradingVolume}</div>
                                    <div className='font-semibold text-1-0 mb-0-2 lg:text-1-5'>{item.volumeCount}</div>
                                </div>

                            </div>
                        </div>
                    })}
                </div>
                <div className='w-22-9 overflow-hidden lg:w-33-4'>
                    <div className='w-full pl-1-0 bg-trading-board-bottom rounded-t-2xl text-rank-title h-3-9 flex justify-start items-center font-bold lg:text-1-5'>
                        RANK (TOP 50 USERS)
                    </div>
                    <div className='bg-rank-list px-1-0 w-full flex flex-col justify-start items-center h-32-5 overflow-x-scroll rounded-b-2xl'>
                        {rankListData.map((item, index) => {
                            return <div key={index} className='py-1-1 border-b border-dashed border-voting-border text-white w-full' onClick={() => handleShowMore(item)}>
                                <div className='w-full flex justify-between items-center'>
                                    <div className='flex justify-start items-center'>
                                        <div className='w-2-4 h-2-4 rounded-full overflow-hidden'>
                                            <img src={item.avatarImg} alt=''></img>
                                        </div>
                                        <div className='ml-1-4 text-0-9 font-bold lg:text-1-2'>{item.address}</div>
                                    </div>
                                    <div className='text-menu-green flex justify-center items-center'>
                                        <div className='icon iconfont icon-down1' style={{ fontSize: '1.3rem' }}></div>
                                    </div>
                                </div>
                                {item.showMore && <div className='w-full flex justify-between items-center mt-0-9'>
                                    <div className='flex flex-col justify-start items-start '>
                                        <div className='text-rank-title font-medium text-0-7 lg:text-0-9'>
                                            {item.tradingVolume}
                                        </div>
                                        <div className='text-1-0 font-semibold '>
                                            {item.volumeCount}
                                        </div>
                                    </div>
                                    <div className='h-1-2 w-0-1 bg-white'></div>
                                    <div className='flex flex-col justify-start items-start '>
                                        <div className='text-rank-title font-medium text-0-7 lg:text-0-9'>
                                            {item.tradingTotalReward}
                                        </div>
                                        <div className='text-1-0 font-semibold'>
                                            {item.rewardCount}
                                        </div>
                                    </div>
                                </div>}
                            </div>
                        })}
                        <div className='text-white flex justify-center items-center my-1-4'>
                            <div className='flex justify-center items-center text-1-2'>
                                <div className='icon iconfont icon-left-arrow'></div>
                            </div>
                            <div className='flex justify-center items-center px-1-0'>
                                Page 1 of 1
                            </div>
                            <div className='flex justify-center items-center'>
                                <div className='icon iconfont icon-left-arrow rotate-180'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}

            <div className='bg-trading-banner-three bg-cover bg-no-repeat bg-center w-full flex flex-col justify-start items-center text-white relative h-auto lg:bg-pad-trading-banner-three' >
                <div className='w-full h-full bg-black50 absolute z-10'></div>
                <div className='w-full text-white font-bold text-3-0 pt-5-0 mb-3-8 text-center relative z-20 lg:text-4-0 lg:pt-2-3'>
                    How to Earn
                </div>
                <div className='flex flex-col justify-start items-center lg:flex-row lg:justify-around lg:flex-wrap'>
                    {earnWayItems.map((item, index) => {
                        return <div key={index} className='py-1-9 px-3-6 w-22-9 rounded-3xl  bg-black50 flex flex-col justify-start items-start text-white mb-3-1 relative lg:w-26-5'>
                            <div className='backdrop-blur-lg absolute -top-0-1 -left-0-1 w-22-9 h-full rounded-3xl border border-earn-items bg-black50 z-10 lg:w-26-5' ></div>
                            <div className='flex flex-col justify-start items-start relative z-20'>
                                <div className='text-2-2 font-semibold mb-0-8'>Step {item.id}</div>
                                <div className={`${item.imgWidth} mb-0-7`}>
                                    <img src={item.imgUrl} alt=''></img>
                                </div>
                                <div className='text-2-0 font-medium line-height-point-133 mb-0-2'>{item.title}</div>
                                <div className='text-1-2 font-light'>{item.content}</div>
                            </div>
                        </div>
                    })}
                </div>
                <div className='text-menu-green underline text-1-5 font-bold mt-2-0 relative z-10 lg:pb-2-0'> Learn More</div>
            </div>

            <div className='bg-trading-banner-four bg-cover bg-no-repeat bg-center w-full flex flex-col justify-start items-center text-white relative h-41-4'>
                <div className='w-full text-white font-bold text-3-0 pt-2-5 mb-1-8 text-center relative z-20 line-height-point-117 lg:text-4-0'>
                    Rewards <br></br> Breakdown
                </div>
                <div className='rounded-xl trading-breakdown-module w-22-0 h-28-6 pt-1-6 flex flex-col justify-start items-center lg:w-full lg:pt-3-2 lg:font-semibold lg:text-1-2'>
                    <div className='flex justify-start items-center pl-1-2 w-full overflow-hidden'>
                        {rewardsBreakdown.map((item, index) => {
                            return <div key={index} className={`text-rank-title font-semibold ${index !== rewardsBreakdown.length ? 'ml-2-4' : ''}`}>{item.title}</div>
                        })}
                    </div>
                    <div className='w-12-9 mt-4-0 flex flex-col justify-start items-center lg:w-15-1'>
                        <img src='/images/phone/empty.png'></img>
                        <div className='text-white text-1-5 font-semibold mt-2-0'>No results</div>
                    </div>
                </div>

            </div>

            <div className="bg-trading-banner-five bg-cover bg-no-repeat bg-center w-full flex flex-col justify-start items-center text-white relative h-41-4 lg:bg-pad-trading-banner-four lg:h-auto pb-2-0">
                <div className='w-full text-white font-bold text-3-0 pt-2-5 mb-3-8 text-center relative z-20 line-height-point-117 voting-text-shadow lg:pt-3-5'>
                    Still Got <br></br> Quesetions?
                </div>
                {tradingQuestingItems.map((item, index) => {
                    return <div key={index} className='rounded-lg shadow-xl flex flex-col justify-start items-center px-2-2 py-0-8 bg-primary-purple text-white font-medium text-1-0 mb-2-0 w-22-5 lg:w-50-8 lg:py-1-4 lg:text-1-2'>
                        {item.content}
                    </div>
                })}
            </div>

        </div>
    )
}

export default TradingReward
