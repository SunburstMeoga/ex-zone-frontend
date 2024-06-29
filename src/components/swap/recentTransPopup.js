import React, { useState } from 'react'
import Popup from 'antd-mobile/es/components/popup'
const RecentTransPopup = ({ showRecentTransPopup, onClose }) => {

    return (

        <div>
            <Popup
                visible={showRecentTransPopup}
                onClose={onClose}
                bodyStyle={{ minHeight: '70vh', background: 'none' }}
            >
                <div className='bg-white rounded-t-3xl flex flex-col justify-start items-center text-swap-border' style={{ minHeight: '70vh' }}>
                    <div className='w-21-9'>
                        <div className='w-full flex flex-col justify-start items-center'>
                            <div className='w-full p-1-2 flex justify-between items-center border-b border-black20 mb-2-5'>
                                <div className='font-bold text-2-0'>
                                    Recent <br></br>
                                    Transactions
                                </div>
                                <div className='flex justify-center items-center' onClick={() => onClose()}>
                                    <div className='icon iconfont icon-close text-primary-purple' style={{ fontSize: '2rem' }}></div>
                                </div>
                            </div>
                            <div className='w-full overflow-scroll flex flex-col justify-start items-center' style={{ maxHeight: '70vh' }}>

                                <div className='w-19-1 h-4-7 bg-primary-purple text-white font-medium flex justify-center items-center text-1-5'>Connect Wallet</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export default RecentTransPopup
