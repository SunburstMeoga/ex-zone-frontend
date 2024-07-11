import React, { useState } from 'react'
import { strykeInfoItems, transTypeItems, strykeDateItems } from '@/dictionary/pools'
import Switch from 'antd-mobile/es/components/switch'

const Stryke = () => {
    let [transType, setTransType] = useState(1)
    let [dataType, setDataType] = useState(1)
    let [filterDate, setFilterDate] = useState(1)
    let dataList = ['', '', '', '']
    let strikesList = [{ type: 'up' }, { type: 'up' }, { type: 'down' }, { type: 'down' }]
    let dataTypeItems = [{ id: 1, title: 'Trade' }, { id: 2, title: 'Liquidity Provision' }]

    let handleTransTypeItem = ({ id }) => {
        setTransType(transType = id)
    }
    let handleTypeItem = ({ id }) => {
        setDataType(dataType = id)
    }
    let handleDateItem = ({ id }) => {
        setFilterDate(filterDate = id)
    }
    return (
        <>
            <div className='pt-5-0 bg-black text-white'>
                <div className='flex flex-col justify-start items-center w-full'>
                    <div className='w-22-0 flex justify-between items-center mb-1-0'>
                        <div className='flex justify-start items-center'>
                            <div className='flex justify-start items-center'>
                                <div className='w-1-6 h-1-6 rounded-full bg-futures-word'></div>
                                <div className='w-1-7 h-1-7 rounded-full bg-futures-word -ml-0-7 border border-black'></div>
                            </div>
                            <div className='text-1-2 font-medium ml-1-0'>USDT</div>
                            <div className='icon iconfont icon-down ml-0-8'></div>
                        </div>
                    </div>
                    <div className='w-22-0 flex flex-col justify-start items-center pb-1-0'>
                        {strykeInfoItems.map((item, index) => {
                            return <div key={index} className='flex justify-between items-center text-voting-border text-0-9 py-0-4 border-b border-dashed border-voting-border w-full'>
                                <div >{item.title}</div>
                                <div >{item.content}</div>
                            </div>
                        })}
                    </div>
                    <div className='w-full mt-0-7 bg-syrup-module pt-1-0 flex flex-col justify-start items-center h-22-0'>
                        this is chart
                    </div>
                    <div className='w-full flex flex-col justify-start items-center bg-white text-swap-border'>
                        <div className='px-1-0 w-full my-1-0 flex justify-between items-center'>
                            <div className='flex justify-start items-center rounded-lg overflow-hidden bg-futures-tabs text-futures-word'>
                                {transTypeItems.map((item, index) => {
                                    return (
                                        <div
                                            onClick={() => handleTransTypeItem(item)}
                                            className={`w-4-2 h-2-2 text-0-9 flex justify-center items-center ${item.id === transType ? 'bg-primary-purple text-white' : ''}`}
                                            key={index}
                                        >
                                            {item.title}
                                        </div>
                                    );
                                })}
                            </div>
                            <div className='text-swap-border text-0-7'>Powered by</div>
                        </div>
                        <div className='w-full overflow-x-scroll'>
                            <div className='min-w-max flex justify-start items-center text-swap-border text-0-7 pl-1-0 py-0-8 bg-setting-button font-medium'>
                                <div className='w-7-5 shrink-0'>Strike</div>
                                <div className='w-7-5 shrink-0'>Liquidity</div>
                                <div className='w-7-5 shrink-0'>Options Available</div>
                                <div className='w-7-5 shrink-0'>Utilization</div>
                                <div className='w-7-5 shrink-0'>Fees APR</div>
                                <div className='w-3-0 shrink-0'></div>
                            </div>

                            {dataList.map((item, index) => {
                                return (
                                    <div key={index} className='min-w-max flex justify-start items-center text-swap-border text-0-7 py-1-0 border-b border-dashed border-voting-border pl-1-0 flex-1'>
                                        <div className='w-7-5 shrink-0 font-semibold'>$ 3449.5372</div>
                                        <div className='w-7-5 shrink-0'>
                                            <div className='font-semibold'>$ 9038.5512</div>
                                            <div>2.6222 WETH</div>
                                        </div>
                                        <div className='w-7-5 shrink-0'>
                                            <div className='font-semibold'>0.000512</div>
                                            <div>$ 9038.5512</div>
                                        </div>
                                        <div className='w-7-5 shrink-0 font-semibold'>98%</div>
                                        <div className='w-7-5 shrink-0 font-semibold'>23%</div>
                                        <div className='w-3-0 shrink-0'>
                                            <div className='flex justify-center items-center rounded-full border border-menu-green text-menu-green h-2-0 w-2-0'>
                                                <div className='icon iconfont icon-Add'></div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                        <div className='text-white flex justify-center items-baseline my-1-0'>
                            <div className='flex justify-center items-center w-1-7 h-1-7 rounded-full bg-primary-purple'>
                                <div className='icon iconfont icon-left-arrow'></div>
                            </div>
                            <div className='flex justify-center items-center px-1-0 text-0-8 text-swap-border'>
                                Page 4 of 4
                            </div>
                            <div className='flex justify-center items-center w-1-7 h-1-7 rounded-full bg-primary-purple'>
                                <div className='icon iconfont icon-left-arrow rotate-180'></div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-syrup-module w-full pt-1-7 flex flex-col justify-start items-center'>
                        <div className='border-b border-voting-border flex justify-start items-center text-0-9 mb-1-0 w-full'>
                            {dataTypeItems.map((item, index) => {
                                return <div onClick={() => handleTypeItem(item)} key={index} className={`py-1-2 ml-3-2 border-b-2 ${dataType === item.id ? 'font-semibold  border-menu-green' : 'border-transparent'}`}>{item.title}</div>
                            })}
                        </div>
                        <div className='w-22-0'>
                            <div className='w-full text-0-7 text-futures-word font-semibold mb-1-0'>Expiry</div>
                            <div className='w-full bg-futures-tabs rounded-lg flex justify-between items-center text-voting-type text-1-0 font-semibold mb-1-0'>
                                {strykeDateItems.map((item, index) => {
                                    return <div onClick={() => handleDateItem(item)} key={index} className={`flex-1 py-0-4 flex justify-center items-center  rounded-lg ${item.id === filterDate ? 'bg-primary-purple text-white' : ''}`}>{item.title}</div>
                                })}
                            </div>
                            <div className='w-full border-b border-dashed border-voting-border mb-1-0'></div>
                            <div className='w-full flex justify-between items-center text-futures-word mb-1-0'>
                                <div className='text-0-7 font-semibold'>Strikes</div>
                                <div className='flex justify-end items-center'>
                                    <div className='text-0-7 font-semibold mr-1-0'>Edit amounts for all</div>
                                    <div>
                                        <Switch
                                            defaultChecked
                                            style={{
                                                '--checked-color': '#29E5AD',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full mb-1-0'>
                                {strikesList.map((item, index) => {
                                    return <div key={index} className='flex justify-between items-center mb-0-6'>
                                        <div className='icon iconfont text-futures-word icon-close'></div>
                                        <div className={`border rounded-lg px-0-4 flex justify-start items-center h-1-7 ${item.type === 'up' ? 'bg-green20 border-menu-green text-menu-green ' : 'bg-red20 border-primary-red text-primary-red'}`}>
                                            <div className='text-0-7 mr-2-0'>$ 3446.05234</div>
                                            <div className={`text-0-8 icon iconfont icon-a-28Dshubiaojiantou ${item.type === 'up' ? 'rotate-45' : 'rotate-180'}`}></div>
                                        </div>
                                        <div className='flex justify-between items-center w-11-5 px-0-4  h-1-7 border border-pools-border rounded-lg text-futures-word bg-futures-input-module text-0-7 font-medium'>
                                            <div className=''>0.0HAH</div>
                                            <div className=''>MAX</div>
                                        </div>
                                    </div>
                                })}
                            </div>
                            <div className='w-full'>
                                <div className='flex justify-between items-center'>
                                    <div className='w-10-7 h-2-4 flex justify-center items-center text-white font-semibold text-0-8 rounded-lg bg-menu-green'>
                                        <div>0 Call strikes</div>
                                        <div className='icon iconfont icon-down1 text-1-4 ml-1-6'></div>
                                    </div>

                                    <div className='w-10-7 h-2-4 flex justify-center items-center text-white font-semibold text-0-8 rounded-lg bg-primary-red'>
                                        <div>0 Put strikes</div>
                                        <div className='icon iconfont icon-down1 text-1-4 ml-1-6'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full border-b border-dashed border-voting-border my-1-0'></div>
                            <div className='w-full flex justify-between items-center text-futures-word'>
                                <div className='text-0-7 font-semibold'>Balance</div>
                                <div className='flex justify-end items-center'>
                                    <div className='text-0-7 font-semibold'>
                                        <span className='text-white'>0</span> HAH <span className='text-white'>0</span> USDT
                                    </div>

                                </div>
                            </div>
                            <div className='w-full border-b border-dashed border-voting-border my-1-0'></div>
                            <div className='w-full text-0-7 text-futures-word font-semibold mb-1-0'>Auto Exercisers</div>
                            <div className='w-full flex justify-between items-center text-futures-word mb-1-0'>
                                <div className='text-0-7 font-semibold text-purple62'>
                                    <div className=''>Time Based</div>
                                    <div className='w-13-7'>Options are automatically exercised 5 minutes before expiry.</div>
                                </div>
                                <div className='flex justify-end items-center'>
                                    <div>
                                        <Switch
                                            defaultChecked
                                            style={{
                                                '--checked-color': '#29E5AD',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full py-1-0 bg-bridge-disable-button text-bridge-disable-word my-1-0 rounded-xl flex justify-center items-center mb-2-0'>Purchase</div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Stryke
