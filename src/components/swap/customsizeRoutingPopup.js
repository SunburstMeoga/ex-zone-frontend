import React, { useState } from 'react'
import Popup from 'antd-mobile/es/components/popup'
import Switch from 'antd-mobile/es/components/switch'
import Checkbox from 'antd-mobile/es/components/checkbox'
import { liquiditypSourceItems, routingPreferenceItems } from '@/dictionary/trade'
const CustomsizeRoutingPopup = ({ showCustomsizePopup, onClose }) => {

    return (

        <div>
            <Popup
                visible={showCustomsizePopup}
                onClose={onClose}
                bodyStyle={{ minHeight: '70vh', background: 'none' }}
            >
                <div className='bg-white rounded-t-3xl flex flex-col justify-start items-center text-swap-border' style={{ minHeight: '70vh' }}>
                    <div className='w-21-9'>
                        <div className='w-full flex flex-col justify-start items-center'>
                            <div className='w-full p-1-2 flex justify-between items-center border-b border-black20 mb-2-5'>
                                <div className='font-bold text-2-0'>
                                    Customize <br></br>
                                    Routing
                                </div>
                                <div className='flex justify-center items-center' onClick={() => onClose()}>
                                    <div className='icon iconfont icon-close text-primary-purple' style={{ fontSize: '2rem' }}></div>
                                </div>
                            </div>
                            <div className='w-full overflow-scroll flex flex-col justify-start items-center' style={{ maxHeight: '70vh' }}>

                                <div className='text-1-5 font-bold mb-1-0 w-full'>
                                    LIQUIDITY SOURCE
                                </div>
                                <div className='flex flex-col justify-start items-center w-full'>
                                    {liquiditypSourceItems.map((item, index) => {
                                        return <div key={index} className='flex justify-between items-center text-swap-border w-full h-3-6'>
                                            <div className='text-1-2 font-medium'>{item.title}</div>
                                            <div>
                                                <Switch
                                                    defaultChecked
                                                    style={{
                                                        '--checked-color': '#29E5AD',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    })}
                                </div>
                                <div className='text-1-5 font-bold mb-1-0 w-full'>
                                    ROUTING PREFERENCE
                                </div>
                                <div className='w-full flex justify-between flex-wrap items-center mb-2-0'>
                                    {routingPreferenceItems.map((item, index) => {
                                        return <div key={index} className={`flex justify-start items-center text-swap-border w-full h-3-6`}>
                                            <div className=''>
                                                <Checkbox style={{
                                                    '--checked-color': '#29E5AD',
                                                }}>{item.title}</Checkbox>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export default CustomsizeRoutingPopup
