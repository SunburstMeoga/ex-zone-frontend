import React, { useState } from 'react'
import { votingTypeItems, votingStateItems, nftList, votingOperate } from '@/dictionary/voting'
const Voting = () => {
    let [currentVoting, changeVoting] = useState(1)
    let [currentState, changeVotingState] = useState(1)
    let [nftListItems, changeNftListItems] = useState(nftList)
    let handleVotingType = (id) => {
        changeVoting(currentVoting = id)
    }
    let handleVotingState = (id) => {
        changeVotingState(currentState = id)
    }
    let handleShowMore = ({id}) => {
        changeNftListItems(nftListItems => 
            nftListItems.map(item => 
                item.id === id ? { ...item, showMore: !item.showMore } : item))
    }
    return (
        <div className='bg-menu-black'>
            <div className='flex flex-col justify-start items-center pt-6-3'>
                <div className='w-22-0 text-white text-1-2 mb-1-7'>
                    Home &gt;&gt; Voting
                </div>
                <div className='gradient-voting-banner w-22-0 h-21-1 rounded-xl flex flex-col justify-start items-center mb-3-0'>
                    <div className='w-full flex justify-start items-center mt-2-7 mb-0-4'>
                        <div className='w-10-3'>
                            <img src='/images/phone/vote-banner.png'></img>
                        </div>
                        <div className='text-white flex flex-col justify-start items-start w-11-3'>
                            <div className='line-height-point-133 text-1-5 font-bold voting-text-shadow'>Voting</div>
                            <div className='font-bold text-1-0 voting-text-shadow'>Have your say in the future of the PGSwap Ecosystem</div>
                        </div>
                    </div>
                    <div className='text-white bg-primary-purple w-17-3 h-3-4 rounded-xl flex justify-center items-center text-1-5 font-bold'>Make a Proposal</div>
                </div>
                <div className='text-white text-2-2 line-height-point-133 w-22-0 mb-1-9'>Proposal</div>
                <div className='w-22-0 flex justify-between items-center mb-2-6'>
                    {votingTypeItems.map((item, index) => {
                        return <div key={index} onClick={() => handleVotingType(item.id)} className={`rounded-lg text-white px-1-6 py-0-7 text-1-2 ${currentVoting === item.id ? 'voting-clicked-button' : 'bg-voting-type'}`}>{item.title}</div>
                    })}
                </div>
                <div className='gradient-voting-banner  rounded-3xl w-22-0'>
                    <div className='pt-2-4 border-b border-voting-border'>
                        <div className='ml-1-6 '>
                            {votingStateItems.map((item, index) => {
                                return <div key={index} className='flex justify-start items-center mb-1-2' onClick={() => handleVotingState(item.id)}>
                                    <div className='rounded-full w-1-5 h-1-5 flex justify-center items-center bg-radio-gray'>
                                        <div className='w-1-0 h-1-0 rounded-full bg-primary-purple'></div>
                                    </div>
                                    <div className='text-white text-1-2 ml-0-7'>{item.title}</div>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className=''>
                        {nftListItems.map((item, index) => {
                            return <div key={index} className={`w-full py-2-0 ${index !== nftList.length - 1 ? 'border-b border-voting-border border-dashed' : ''}`}>
                                <div className='mx-1-6'>
                                    <div className='flex justify-between items-start'>
                                        <div className='w-16-2 text-white'>
                                            <div className='font-bold text-1-5'>{item.title}</div>
                                            <div className='text-1-2'>{item.time}</div>
                                        </div>
                                        <div className='flex justify-center items-center' onClick={() => handleShowMore(item)}>
                                            <div className='icon iconfont icon-down1 text-menu-green' style={{ fontSize: '1.5rem',fontWeight: 900 }}></div>
                                        </div>
                                    </div>
                                    {item.showMore && <div className='mt-1-3'>
                                        {votingOperate.map((_item, _index) => {
                                            return <div key={_index} className={`w-12-5 h-3-2 pl-2-9 flex items-center text-white text-1-2 rounded-xl ${_index === votingOperate.length - 1 ? '' : 'mb-1-1'} ${_item.background}`}>
                                                {_item.title}
                                            </div>
                                        })}
                                    </div>}
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <div className='gradient-voting-banner rounded-3xl w-22-0 py-2-1 px-1-0 mt-1-8 mb-3-3 text-white flex flex-col justify-start items-center'>
                    <div className='text-1-8 font-bold mb-1-0'>Got a suggestion?</div>
                    <div className='text-1-0 text-center'>Community proposals are a
                        great way to see how the community feels about your ideas.
                        They won't necessarily be implemented if the community votes successful,
                        but suggestions with a lot of community support may be made into Core proposals.
                    </div>
                    <div className='text-white bg-primary-purple w-19-0 h-4-7 rounded-xl flex justify-center items-center text-1-5 font-bold mt-2-8'>Make a Proposal</div>
                </div>
            </div>

        </div>
    )
}

export default Voting
