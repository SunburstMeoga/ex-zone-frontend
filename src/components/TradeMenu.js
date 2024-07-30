import React from 'react';
import { tradeMenuItems } from '@/dictionary/trade';
import Tabs from 'antd-mobile/es/components/tabs';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyledTabsA = styled(Tabs)`
  background-color: transparent !important;

  .adm-tabs-tab {
    position: relative; /* 为伪元素定位做准备 */
    color: white !important; /* 所有标签文字颜色为白色 */
    background-color: transparent !important;
  }

  .adm-tabs-tab-active .adm-tabs-tab-title {
    background-color: white !important;
    color: white !important;
  }

  .adm-tabs-header {
    border-bottom: none !important; /* 去掉Tabs整体的下划线 */
    box-shadow: none !important; /* 去掉Tabs头部的阴影 */
  }

  .adm-tabs-tab-wrapper {
    box-shadow: none !important; /* 去掉Tabs选项卡的阴影 */
  }

  .adm-tabs-header-mask-left,
  .adm-tabs-header-mask-right {
    background: transparent !important;
  }
`;

function TradeMenu({ defaultIndex = 0 }) {
  const router = useRouter();
  const handleTabChange = (index) => {
    // 获取被点击的标签项
    console.log(index)
    const selectedItem = tradeMenuItems[index];
    if (selectedItem && selectedItem.link) {
      router.push(selectedItem.link);
    }
  };
  return (
    <div>
      <StyledTabsA onChange={handleTabChange} defaultActiveKey={defaultIndex}>
        {tradeMenuItems.map((item, index) => (
          <Tabs.Tab title={item.title} key={index} ></Tabs.Tab>
        ))}
      </StyledTabsA>
    </div>
  );
}

export default TradeMenu;
