import React, { useState } from 'react'
import Popup from 'antd-mobile/es/components/popup'
import { settingTranSpeedItmes, slippageTolerance, settingOptions } from '@/dictionary/trade'
const SettingPopup = ({ showSettingPopup, onClose }) => {
    let [currentSpeed, setCurrentSpeed] = useState(1)
    let [currentTolernce, setCurrentTolernce] = useState(1)
    let handleSpeed = ({ id }) => {
        setCurrentSpeed(currentSpeed = id)
    }
    let handleTolernce = ({ id }) => {
        setCurrentTolernce(currentTolernce = id)
    }
    return (

        <div>
            <Popup
                visible={showSettingPopup}
                onClose={onClose}
                bodyStyle={{ minHeight: '70vh', background: 'none' }}
            >
                <div className='bg-white rounded-t-3xl flex flex-col justify-start items-center text-swap-border' style={{ minHeight: '70vh' }}>
                    <div className='w-21-9'>
                        <div className='w-full flex flex-col justify-start items-center'>
                            <div className='w-full p-1-2 flex justify-between items-center border-b border-black20 mb-2-5'>
                                <div className='font-bold text-2-0'>
                                    Setting
                                </div>
                                <div className='flex justify-center items-center'>
                                    <div className='icon iconfont icon-close text-primary-purple' style={{ fontSize: '2rem' }}></div>
                                </div>
                            </div>
                            <div className='w-full overflow-scroll flex flex-col justify-start items-center' style={{ maxHeight: '70vh' }}>
                                <div className='w-full font-bold text-1-0 mb-1-0'>SWAPS & LIQUIDITY</div>
                                <div className='text-1-5 font-bold mb-1-0 w-full'>
                                    Default Transaction <br></br> Speed(GWEI)
                                </div>
                                <div className='w-full flex justify-between flex-wrap items-center'>
                                    {settingTranSpeedItmes.map((item, index) => {
                                        return <div onClick={() => handleSpeed(item)} key={index} className={`h-4-0 w-10-4 mb-0-6 text-1-5 font-medium flex justify-center items-center ${item.id === currentSpeed ? 'bg-limit-orders-module text-white' : 'bg-setting-button text-swap-border'}`}>
                                            {item.title}
                                        </div>
                                    })}
                                </div>
                                <div className='w-full font-bold text-1-0 mb-1-0'>SWAPS & LIQUIDITY</div>
                                <div className='text-1-5 font-bold mb-1-0 w-full'>
                                    Slippage Tolerance
                                </div>
                                <div className='w-full flex justify-between flex-wrap items-center mb-2-0'>
                                    {slippageTolerance.map((item, index) => {
                                        return <div onClick={() => handleTolernce(item)} key={index} className={`h-4-0 w-6-8 mb-0-6 text-1-5 font-medium flex justify-center items-center ${item.id === currentTolernce ? 'bg-limit-orders-module text-white' : 'bg-setting-button text-swap-border'}`}>
                                            {item.title}
                                        </div>
                                    })}
                                    <div className='w-full flex justify-between items-center text-swap-border'>
                                        <div className='bg-setting-button flex-1 h-4-0'>
                                            <input className='w-full h-full bg-transparent'></input>
                                        </div>
                                        <div className='font-semibold text-1-5 ml-0-2 '>%</div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-start items-center'>
                                    {settingOptions.mao((item, index) => {
                                        return <div key={index} className='flex justify-between items-center text-swap-border'>
                                            <div className='text-1-5 font-bold'>{item.title}</div>
                                            {item.tyle}
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

export default SettingPopup
