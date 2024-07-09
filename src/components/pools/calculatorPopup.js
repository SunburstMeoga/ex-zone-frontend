import React, { useState } from 'react'
import Popup from 'antd-mobile/es/components/popup'
import Checkbox from 'antd-mobile/es/components/checkbox'
import { stakedAmountItems, stakedForItems, compoundingEveryItems } from '@/dictionary/pools'
const CalculatorPopup = ({ showCalculatorPopup, onClose }) => {
    let [currentStakedData, setCurrentStakedData] = useState(1)
    let [currentCompounding, setCurrentCompounding] = useState(1)
    let [showDetails, setDetails] = useState(false)
    let handleStakedForItems = ({ id }) => {
        setCurrentStakedData(currentStakedData = id)
    }
    let handleCompoundingEvery = ({ id }) => {
        setCurrentCompounding(currentCompounding = id)
    }
    let togglesShowDetails = () => {
        console.log(showDetails)
        setDetails(showDetails = !showDetails)
    }
    return (
        <div>
            <Popup
                visible={showCalculatorPopup}
                onClose={onClose}
                bodyStyle={{ minHeight: '70vh', background: 'none' }}
            >
                <div className='w-full rounded-t-2xl bg-white flex flex-col justify-start items-center text-swap-border' style={{ minHeight: '70vh' }}>
                    <div className='flex justify-between items-center w-22-0 border-b border-black20 py-0-6 px-1-0 mb-1-0 mt-1-0'>
                        <div className='font-bold text-2-0'>ROI Calculator</div>
                        <div className='icon iconfont icon-close text-1-6 font-bold ' onClick={() => onClose()}></div>
                    </div>
                    <div className='w-full overflow-y-scroll flex flex-col justify-start items-center' style={{ maxHeight: '70vh' }}>
                        <div className='flex flex-col justify-start items-center w-21-0' >
                            <div className='text-1-0 font-bold mb-0-8 w-full'>
                                HAH STAKED
                            </div>
                            <div className='w-full h-5-0 border border-white shadow-lg rounded-xl bg-syrup-input flex justify-end items-center mb-0-8' >
                                <div className='flex flex-col justify-start items-end'>
                                    <div className='flex justify-end items-center flex-1'>
                                        <div className='text-1-2 font-bold ml-0-2 '>
                                            <input className='text-right bg-transparent w-full text-swap-border font-bold' type='' placeholder='0.00'></input>
                                        </div>
                                        <div className='text-1-0 font-medium ml-0-4'>USD</div>
                                    </div>
                                    <div className='font-bold'>0.00 HAH</div>
                                </div>
                                <div className='mr-1-1 icon iconfont icon-exchange rotate-90 ml-1-0 text-1-0'></div>
                            </div>
                            <div className='w-full flex justify-start items-center'>
                                {stakedAmountItems.map((item, index) => {
                                    return <div key={index} className={`px-0-6 h-1-6 flex justify-center items-center text-white  font-bold text-0-9 bg-swap-copy-icon rounded-full ${item.id !== 1 ? 'ml-0-7' : ''}`} >
                                        {item.title}
                                    </div>
                                })}
                            </div>
                            <div className='text-1-0 font-bold mb-0-8 w-full mt-1-8'>
                                STAKED FOR
                            </div>
                            <div className='w-full flex justify-between items-center'>
                                {stakedForItems.map((item, index) => {
                                    return <div key={index} className={`w-4-0 h-2-4 flex justify-center items-center   font-bold text-0-9  rounded-2xl border  ${item.id === currentStakedData ? 'bg-menu-green text-white border-menu-green' : 'border-setting-button bg-white text-menu-green'}`} onClick={() => handleStakedForItems(item)}>
                                        {item.title}
                                    </div>
                                })}
                            </div>
                            <div className='text-1-0 font-bold mb-0-8 w-full mt-1-8'>
                                COMPOUNDING EVERY
                            </div>
                            <div className='flex justify-between items-center w-full'>
                                <div className='mr-1-0'>
                                    <Checkbox style={{
                                        '--checked-color': '#29E5AD',
                                    }}></Checkbox>
                                </div>
                                <div className='w-full flex justify-end items-center'>
                                    {compoundingEveryItems.map((item, index) => {
                                        return <div key={index} className={`w-4-0 h-2-4 flex justify-center items-center   font-bold text-0-9  rounded-2xl border ${item.id !== 1 ? 'ml-0-4' : ''}  ${item.id === currentStakedData ? 'bg-menu-green text-white border-menu-green' : 'border-setting-button bg-white text-menu-green'}`} onClick={() => handleCompoundingEvery(item)}>
                                            {item.title}
                                        </div>
                                    })}
                                </div>
                            </div>
                            <div className='text-1-0 font-bold '>
                                <div className='icon iconfont icon-down3 text-swap-copy-icon text-2-0'></div>
                            </div>
                            <div className='w-full px-1-4 h-8-0 border border-white shadow-lg rounded-xl bg-syrup-input flex justify-between items-center mb-0-8' >
                                <div className='flex flex-col justify-start items-start'>
                                    <div className='text-calculator-title text-0-9 mb-0-4'>ROI AT CURRENT RATES</div>
                                    <div className='flex justify-start items-center text-swap-border text-2-0 font-bold'>
                                        <div className=''>$</div>
                                        <div className=''><input placeholder='0.00' className='bg-transparent w-full'></input></div>

                                    </div>
                                    <div className='text-calculator-title text-0-9'>0.00%</div>
                                </div>
                                <div className='mr-1-1 icon iconfont icon-edit  ml-1-0 text-1-4'>
                                </div>
                            </div>
                        </div>
                        <div className='bg-calculator-details py-1-0 w-full mt-1-0 flex flex-col justify-start items-center'>
                            <div className='text-swap-border w-full flex flex-col justify-start items-center' onClick={() => togglesShowDetails()}>
                                <div className='flex justify-center items-center'>
                                    <div className='text-0-9 font-semibold'>Details</div>
                                    <div className='icon iconfont icon-down1 text-1-4 rotate-180'></div>
                                </div>
                            </div>
                            {showDetails && <div className='w-20-8 '>
                                <div className='w-full flex justify-between items-center text-0-9 font-semibold mb-2-0'>
                                    <div className=''> APR</div>
                                    <div>1.46%</div>
                                </div>
                                <div className='flex justify-start items-center text-0-8 mb-0-4'>
                                    <div className='w-0-3 h-0-3 bg-swap-border mr-0-2'></div>
                                    <div className='text-swap-border ml-0-2'>Calculated based on current rates.</div>
                                </div>
                                <div className='flex justify-start items-start text-0-8'>
                                    <div className='w-0-3 h-0-3 bg-swap-border mr-0-2 mt-0-4'></div>
                                    <div className='text-swap-border ml-0-2 w-18-0'>All figures are estimates provided for your convenience only, and by no means represent guaranteed returns.</div>
                                </div>
                                <div className='text-menu-green underline font-semibold text-1-0 mt-1-6 text-center'>Get HAH</div>
                            </div>}
                        </div>
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export default CalculatorPopup
