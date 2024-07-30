import React from 'react'
import Tabs from 'antd-mobile/es/components/tabs';
import { poolsTabsItems } from '@/dictionary/pools';
import styled from 'styled-components';
import { useRouter } from 'next/router';
// const StyledTabsA = styled(Tabs)`
// background-color: transparent !important;

//   .adm-tabs-header {
//     border-bottom: none !important; /* 去掉Tabs整体的下划线 */
//     box-shadow: none !important; /* 去掉Tabs头部的阴影 */
//   }

//   .adm-tabs-tab-wrapper {
//     box-shadow: none !important; /* 去掉Tabs选项卡的阴影 */
//   }

//   .adm-tabs-tab {
//     color: #65628C !important;
//     background-color: transparent !important;
//   }

//   .adm-tabs-tab-active {
//     color: #29E5AD !important;
//   }

//   .adm-tabs-tab-line {
//     display: none !important; /* 去掉选中时的下划线 */
//   }
//   .adm-tabs-header-mask-left {
//     background: transparent !important;
//   }
//   .adm-tabs-header-mask-right {
//     background: transparent !important;
//   }
// `;
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
const PageTabs = ({ defaultIndex = 0 }) => {
  const router = useRouter()
  console.log('defaultIndex', defaultIndex)
  const handleTabChange = (index) => {
    // 获取被点击的标签项
    console.log(index)
    const selectedItem = poolsTabsItems[index];
    if (selectedItem && selectedItem.link) {
      router.push(selectedItem.link);
    }
  };
  return (
    <div>
      <StyledTabsA onChange={handleTabChange} defaultActiveKey={defaultIndex}>
        {poolsTabsItems.map((item, index) => (
          <Tabs.Tab title={item.title} key={index} className='lg:text-2-0'></Tabs.Tab>
        ))}
      </StyledTabsA>
    </div>
  )
}

export default PageTabs
