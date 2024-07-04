import React from 'react';
import Tabs from 'antd-mobile/es/components/tabs';
import { poolsTabsItems } from '@/dictionary/pools';
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
                <div className='w-full bg-phone-pools-banner-one bg-center bg-no-repeat bg-cover mt-4-1'>
                    <div className='text-white'></div>
                </div>
            </div>
        </>
    );
};

export default Pools;
