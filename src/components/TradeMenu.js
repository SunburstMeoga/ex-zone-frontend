import React from 'react'
import { tradeMenuItems } from '@/dictionary/trade'
import Tabs from 'antd-mobile/es/components/tabs'
function TradeMenu() {
  return (
    <div className='w-full h-4-9 text-white pl-1-0 font-semibold text-1-2 flex justify-start items-center'>
      {/* {tradeMenuItems.map((item, index) => {
        return <div className='mr-1-0 ' key={index}>{item.title}</div>
      })} */}
      <Tabs defaultActiveKey='1'>
        {tradeMenuItems.map((item, index) => {
          return <Tabs.Tab title={item.title} key={index} />
        })}
      </Tabs>
    </div>
  )
}

export default TradeMenu
