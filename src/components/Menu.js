import React, { useEffect, useState } from 'react'
import { pageMenuItems } from '@/dictionary/menu'
import ContractServices from '@/services/contract/contractServices'
import { formateAddress } from '@/utils/formate';
import { useDispatch, useSelector } from 'react-redux';
import { setAddress, clearAddress } from '@/store/walletSlice';
import { useRouter } from 'next/router';

import Web3 from 'web3'
const Menu = () => {
    const router = useRouter();
    let [showMenu, changeShowMenu] = useState(false)
    let [activeItem, setActiveItem] = useState(0)
    let [pageMenuItemsList, setPageMenuItems] = useState(pageMenuItems)
    let [contractService, setContractService] = useState(null)
    let [web3, setWeb3] = useState(null)
    let [accountAddress, setAccountAddress] = useState(null)
    let dispatch = useDispatch();
    let walletAddress = useSelector((state) => state.wallet.address);
    let handleMenu = () => {
        changeShowMenu(showMenu = !showMenu)
    }
    let handleMenuItems = (item) => {
        console.log(item)
        setActiveItem(activeItem = item.id)
        router.push(item.link); // 替换为目标页面的路径
        changeShowMenu(showMenu = false)
    }
    let handlePageMenu = ({ id, hasChild, link }) => {
        console.log(id, hasChild)
        if (hasChild) {
            setPageMenuItems(pageMenuItemsList =>
                pageMenuItemsList.map(item =>
                    item.id === id ? { ...item, showChild: !item.showChild } : item))
        } else {
            console.log('没有下级页面,直接跳转路由')
            router.push(link)
            changeShowMenu(showMenu = !showMenu)
        }

    }
    let handleLogo = () => {
        console.log('handleLogo')
        router.push('/')
    }
    let handleConnectWallet = async () => {
        // alert(web3)
        // if (web3) {
        //     console.log(web3)
        //     try {
        //         // 请求用户授权连接钱包
        //         let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        //         // 获取用户账户
        //         console.log(accounts)
        //         localStorage.setItem('account', accounts[0])
        //         setAccountAddress(accountAddress = localStorage.getItem('account'))
        //         dispatch(setAddress(localStorage.getItem('account')));
        //         // setAccount(accounts[0]);
        //     } catch (error) {
        //         console.error('连接钱包失败:', error);
        //         alert('连接失败')
        //     }
        // } else {
        //     alert('没有钱包')
        // }
        let accounts = await ethereum.request({
            method: 'eth_requestAccounts',
        })
        console.log(accounts)
        localStorage.setItem('account', accounts[0])
        setAccountAddress(accountAddress = localStorage.getItem('account'))
        dispatch(setAddress(localStorage.getItem('account')));

    }
    useEffect(() => {
        const initWeb3 = async () => {
            // console.log(walletAddress)
            if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
                let web3 = new Web3(window.ethereum)
                setWeb3(web3 = web3)
                try {
                    web3.eth.getAccounts()
                        .then(accounts => {
                            if (accounts.length > 0) {
                                console.log(accounts)
                                localStorage.setItem('account', accounts[0])
                                setAccountAddress(accountAddress = localStorage.getItem('account'))
                                dispatch(setAddress(localStorage.getItem('account')));
                                console.log('Dispatched setAddress with:', accounts[0]);
                                setTimeout(() => {

                                }, 2000);

                            } else {
                                localStorage.removeItem('account')
                                setAccountAddress(accountAddress = null)
                                dispatch(clearAddress());
                            }
                        })
                        .catch(error => {
                            console.error('获取账户失败:', error);
                        });
                } catch (err) {
                    console.log(err)
                }
            } else {
                console.log('没安装metamask')
            }
        }
        initWeb3()
        const handleAccountsChanged = (accounts) => { //连接的账户发生了变化
            console.log('用户发生变化', accounts)
            if (accounts.length > 0) {
                localStorage.setItem('account', accounts[0])
                setAccountAddress(accountAddress = localStorage.getItem('account'))
                dispatch(setAddress(localStorage.getItem('account')));
            } else {
                localStorage.removeItem('account')
                setAccountAddress(accountAddress = null)
                dispatch(clearAddress());
            }
        };
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', handleAccountsChanged);
        }
        // 清理函数
        return () => {
            if (window.ethereum) {
                window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
            }
        };
    }, [dispatch])
    useEffect(() => {
        console.log('Component re-rendered', walletAddress);
    }, [walletAddress]);
    return (
        <div className='w-full  flex flex-col justify-center items-center fixed -top-0-1 z-30 bg-black'>
            <div className='w-22-0 flex justify-between items-center h-4-3 lg:h-6-3 relative z-20 lg:w-58-2 lg:py-2-6 xl:w-full xl:py-2-6'>
                <div className='flex justify-start items-center'>
                    <div className='w-6-9 lg:w-12-4 xl:ml-2-9 transition ease-linear duration-100  active:-translate-x-0-2' onClick={() => handleLogo()}>
                        <img src='/images/logo.png' alt='logo' />
                    </div>
                    <div className='xl:ml-3-5 hidden xl:flex justify-start items-center '>
                        {pageMenuItemsList.map((item, index) => {
                            return <div key={index} className='text-white text-1-2 ml-4-2 cursor-pointer'>{item.title} </div>
                        })}
                    </div>
                </div>
                <div className='flex justify-end items-center'>
                    <div className='icon iconfont icon-menu text-white text-1-6 transition ease-linear duration-100 lg:hidden active:scale-x-105' onClick={() => { handleMenu() }}></div>
                    <div></div>
                </div>
            </div>
            {
                showMenu && <div className={`w-full  flex flex-col justify-start items-center -mt-4-0 pt-4-0 relative z-10 bg-black`} >
                    <div className={`w-22-0 duration-100 transition ${showMenu ? 'scale-y-100 min-h-screen' : 'scale-y-0 h-auto'}`}>
                        <div className='flex justify-between items-center mb-1-0 text-1-0'>
                            {/* <div className='rounded-xl flex justify-center items-center bg-primary-purple w-8-4 h-3-1 text-white'>中/English</div> */}
                            <div className='rounded-xl flex justify-center items-center bg-primary-yellow w-full h-3-1 text-connect-wallet' onClick={() => handleConnectWallet()}>
                                <div className='icon iconfont icon-money-wallet-fill text-1-8' ></div>
                                <div className='ml-0-3'>{accountAddress ? formateAddress(accountAddress, 8) : 'Connect Wallet'}</div>
                            </div>
                        </div>
                        {pageMenuItemsList.map((item, index) => {
                            return <div key={index} className='w-full  rounded-xl bg-menu-title text-white text-1-3  mb-0-8 overflow-hidden' onClick={() => handlePageMenu(item)}>
                                <div className='flex justify-between items-center h-3-3'>
                                    <div className='flex justify-start items-center'>
                                        <div className='ml-1-5 w-0-3 h-0-3 bg-white'></div>
                                        <div className='ml-1-0'>{item.title}</div>
                                    </div>
                                    {item.hasChild && <div className='flex justify-center items-center mr-1-5'>
                                        <div className={`icon iconfont icon-down duration-100 transition  ${item.showChild ? 'rotate-180 ' : ''}`}></div>
                                    </div>}
                                </div>
                                {item.hasChild && item.showChild && <div className='w-22-0 gradient-menu-item flex flex-col justify-start items-center' >
                                    {item.children.map((_item, _index) => {
                                        return <div key={_index} onClick={() => { handleMenuItems(_item) }} className={`flex justify-center items-center w-full h-3-5 active:bg-primary-green ${activeItem === _item.id ? '' : 'bg-transparent'}`}>
                                            <div className='w-12-6 text-white font-light text-1-0'>{_item.title}</div>
                                        </div>
                                    })}
                                </div>}
                            </div>
                        })}
                    </div>
                </div>
            }
        </div >
    )
}

export default Menu
