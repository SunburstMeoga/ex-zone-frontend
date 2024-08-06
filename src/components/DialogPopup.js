import React from 'react'
import Mask from 'antd-mobile/es/components/mask'

const DialogPopup = ({ showDialogPopup, title, content, showCancel = false, confirmText = 'YES', cancelText = 'NO', type = 'success', closeMask }) => {
    return (
        <>
            <Mask visible={showDialogPopup}>
                <div className={`absolute top-1/3 w-full flex justify-center items-center`}>
                    <div className='w-20-2 bg-white rounded-3xl px-1-0 py-1-5'>
                        <div className='w-full flex justify-between items-center mb-1-0'>
                            <div className="w-2-8 h-2-8 flex justify-center items-center">
                                {type === 'success' && <img className='' src='/images/success.png'></img>}
                                {type === 'warning' && <img className='' src='/images/warning.png'></img>}
                                {type === 'fail' && <img className='' src='/images/fail.png'></img>}
                            </div>
                            <div className='text-swap-border font-semibold text-1-2 ml-1-3 flex-1'>
                                {content}
                            </div>

                        </div>
                        <div className={`w-full text-1-2 flex px-0-4 items-center ${showCancel ? 'justify-between' : 'justify-center'}`}>
                            <div onClick={closeMask} className={`w-7-9 h-2-3 bg-primary-purple text-white rounded-xl border-2 border-primary-purple flex justify-center items-center`}>
                                {confirmText}
                            </div>
                            {showCancel && <div onClick={closeMask} className='w-7-9 h-2-3 border-2 border-primary-purple rounded-xl text-primary-purple bg-white flex justify-center items-center'>
                                {cancelText}
                            </div>}
                        </div>
                    </div>
                </div>
            </Mask>
        </>
    )
}

export default DialogPopup
