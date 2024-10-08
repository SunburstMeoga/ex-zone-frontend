import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { setAddress } from '@/store/walletSlice';
import { useDispatch, useSelector } from 'react-redux';

const ConnectWalletButton = ({ className, onConnect, label = 'Connect Wallet' }) => {
    const dispatch = useDispatch()
    const [walletAddress, setWalletAddress] = useState(null);
    const [web3, setWeb3] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    let isConnected = useSelector((state) => state.wallet.isConnected);
    useEffect(() => {
        // 检查 MetaMask 是否安装
        console.log(isConnected)
        if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
            const web3Instance = new Web3(window.ethereum);
            setWeb3(web3Instance);
        } else {
            setErrorMessage('MetaMask is not installed. Please install MetaMask to continue.');
        }
    }, []);

    const connectWallet = async () => {
        if (web3) {
            try {
                console.log('Attempting to connect wallet...');
                // 请求用户授权
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const accounts = await web3.eth.getAccounts();
                const address = accounts[0];
                setWalletAddress(address);
                console.log('Wallet connected:', address);
                dispatch(setAddress(walletAddress));
                console.log(isConnected)
                // 调用传入的回调函数，将地址传回去
                if (onConnect) {
                    onConnect(address);
                }
            } catch (error) {
                console.error('Failed to connect wallet:', error);
                setErrorMessage('Failed to connect wallet');
            }
        } else {
            console.error('Web3 instance is not available yet');
            setErrorMessage('Web3 instance is not available yet');
        }
    };

    return (
        <>
            {!isConnected && <div>
                <div
                    className={`transition ease-in duration-100 active:translate-y-0-1 ${className}`}
                    onClick={connectWallet}
                >
                    {label}
                </div>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            </div>}
        </>


    );
};

export default ConnectWalletButton;
