import React, { useState } from 'react';
import Tabs from 'antd-mobile/es/components/tabs';
import Switch from 'antd-mobile/es/components/switch'

import { poolsTabsItems, stakingStateItems } from '@/dictionary/pools';
import styled from 'styled-components';

const StyledTabsA = styled(Tabs)`
background-color: transparent !important;

  .adm-tabs-header {
    border-bottom: none !important; /* 去掉Tabs整体的下划线 */
    box-shadow: none !important; /* 去掉Tabs头部的阴影 */
  }

  .adm-tabs-tab-wrapper {
    box-shadow: none !important; /* 去掉Tabs选项卡的阴影 */
  }

  .adm-tabs-tab {
    color: #65628C !important;
    background-color: transparent !important;
  }

  .adm-tabs-tab-active {
    color: #29E5AD !important;
  }

  .adm-tabs-tab-line {
    display: none !important; /* 去掉选中时的下划线 */
  }
  .adm-tabs-header-mask-left {
    background: transparent !important;
  }
  .adm-tabs-header-mask-right {
    background: transparent !important;
  }
`;

const Pools = () => {
    let [activeState, setActiveState] = useState(1)
    let handleState = ({ id }) => {
        console.log(id)
        setActiveState(activeState = id)
    }
    return (
        <>
            <div className='pt-5-0 bg-black'>
                <StyledTabsA>
                    {poolsTabsItems.map((item, index) => (
                        <Tabs.Tab title={item.title} key={index}>
                            {item.content}
                        </Tabs.Tab>
                    ))}
                </StyledTabsA>
                <div className='w-full bg-phone-pools-banner-one bg-bottom bg-no-repeat bg-cover h-auto pt-4-8'>
                    <div className='flex flex-col justify-start items-center'>
                        <div className='text-white text-3-0 font-bold text-left mb-1-1 w-21-4'>Syrup Pools</div>
                        <div className='text-trading-yellow text-left line-height-point-122 text-2-0 font-semibold w-21-4 mb-6-4'>Just stake some tokens to earn.High APR, low risk.</div>
                        <div className='bg-black80 w-21-4 p-2-1 flex flex-col justify-start items-center rounded-xl mb-2-2 backdrop-blur-lg'>
                            <div className='text-primary-purple text-center text-1-5 font-semibold mb-1-4 '>HAH Staking <br></br>Up to <span className='text-trading-yellow'>26.09%</span>APR</div>
                            <div className='text-primary-60 text-0-9 text-center'>
                                Satke HAH to get veHAH, earn up to 26.09% APR from veCAKE pool and revenue sharing.<br></br><br></br>
                                Unlock other benefits like voting incentives, yield boosting, IFO, and so much more...
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-start flex-col items-center bg-pools-module pt-1-7'>
                    <div className='w-22-0 flex flex-col justify-start items-center'>
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pools;
