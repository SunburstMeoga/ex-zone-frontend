import React from "react";

const TransactionModal = ({ isOpen, onClose, details }) => {
    if (!isOpen) return null;

    const { token0Used, token1Received, fee, token0Balance, token1Balance, token0, token1 } = details;

    return (

        <div className="w-full h-screen flex justify-center items-center fixed inset-0-1 z-50" >
            <div className="shadow-lg bg-swap-card-module flex flex-col justify-between items-center text-white border-swap-border rounded-2xl p-0-8 w-20-0 h-auto lg:w-35-0">
                <h2 className="text-lg font-bold my-1-0">Transaction Details</h2>
                <div className="mb-2-0 w-full">
                    <div className="flex justify-between items-center">
                        <div className="font-medium text-gray-400">支付: {token0}</div>
                        {token0Used}
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="font-medium text-gray-400">收到: {token1}</div>
                        {token1Received}
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="font-medium text-gray-400">交易费率: </div>
                        {fee}%
                    </div>
                </div>
                <div className="mb-2-0 w-full">
                    <h3 className="font-medium text-gray-400 " >账户余额</h3>
                    <div className="flex justify-between items-center">
                        <div className="font-medium text-gray-400">{token0}:</div>
                        {token0Balance}
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="font-medium text-gray-400">{token1}:</div>
                        {token1Balance}
                    </div>
                </div>
                <div
                    onClick={onClose}
                    className="w-15-0 h-2-7 bg-primary-purple flex justify-center items-center text-white font-light text-1-2 rounded-xl lg:w-35-0  transition ease-in duration-100 active:bg-opacity-50 active:translate-y-0-1"
                >
                    确定
                </div>
            </div>
        </div>

        // <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 text-white">
        //     <div className="shadow-lg bg-swap-card-module flex flex-col justify-between items-center border-2 border-swap-border rounded-2xl p-0-8 w-20-0 h-8-0 lg:w-35-0">
        //         <h2 className="text-lg font-bold mb-4">Transaction Details</h2>
        //         <div className="mb-4">
        //             <p>
        //                 <div className="font-medium">支付 Token0：</div>
        //                 {token0Used}
        //             </p>
        //             <p>
        //                 <div className="font-medium">收到 Token1：</div>
        //                 {token1Received}
        //             </p>
        //             <p>
        //                 <div className="font-medium">交易费率：</div>
        //                 {fee}%
        //             </p>
        //         </div>
        //         <div className="mb-4">
        //             <h3 className="font-medium">账户余额：</h3>
        //             <p>
        //                 <div className="font-medium">Token0：</div>
        //                 {token0Balance}
        //             </p>
        //             <p>
        //                 <div className="font-medium">Token1：</div>
        //                 {token1Balance}
        //             </p>
        //         </div>
        //         <button
        //             onClick={onClose}
        //             className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded"
        //         >
        //             确定
        //         </button>
        //     </div>
        // </div>
    );
};

export default TransactionModal;
