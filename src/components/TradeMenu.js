import React from 'react'
import { tradeMenuItems } from '@/dictionary/trade'
import Tabs from 'antd-mobile/es/components/tabs'
function TradeMenu() {
  return (
    <div className='w-full h-4-9 bg-primary-purple text-white pl-1-0 font-semibold text-1-2 flex justify-start items-center'>
      {/* {tradeMenuItems.map((item, index) => {
        return <div className='mr-1-0 ' key={index}>{item.title}</div>
      })} */}
      <Tabs defaultActiveKey='1'>
        <Tabs.Tab title='Espresso' key='1'>
          {/* 1 */}
        </Tabs.Tab>
        <Tabs.Tab title='Coffee Latte' key='2'>
          {/* 2 */}
        </Tabs.Tab>
        <Tabs.Tab title='Cappuccino' key='3'>
          {/* 3 */}
        </Tabs.Tab>
        <Tabs.Tab title='Americano' key='4'>
          {/* 4 */}
        </Tabs.Tab>
        <Tabs.Tab title='Flat White' key='5'>
          {/* 5 */}
        </Tabs.Tab>
        <Tabs.Tab title='Caramel Macchiato' key='6'>
          {/* 6 */}
        </Tabs.Tab>
        <Tabs.Tab title='Cafe Mocha' key='7'>
          {/* 7 */}
        </Tabs.Tab>
      </Tabs>
    </div>
  )
}

export default TradeMenu
