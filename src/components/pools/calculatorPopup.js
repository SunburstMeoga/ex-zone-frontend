import React from 'react'
import CenterPopup from 'antd-mobile/es/components/center-popup'

const CalculatorPopup = ({ showCalculatorPopup, onClose }) => {
    return (
        <div>
            <CenterPopup
                visible={showCalculatorPopup}
                onClose={onClose}
                bodyStyle={{ minHeight: '70vh', background: '#fff', width: '100%', maxWidth: 'none' }}
            >
                <div className='text-black w-full'>
                    fsafasdf
                </div>
            </CenterPopup>
        </div>
    )
}

export default CalculatorPopup
