import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { homeTotalItems, ecosystemItems,tradeItems } from '@/dictionary/home'
import { useEffect, useState } from "react";

export default function Home() {
  let [homeTotal, changeHomeTotal] = useState([])

  useEffect(() => {
    changeHomeTotal(homeTotal = homeTotalItems)
    console.log(homeTotal)
  }, [])
  return (
    <div className="text-red-500 lg:text-green-500 xl:text-blue-500">
      <div className="bg-home-banner-one bg-center bg-cover bg-no-repeat w-full h-58-0 ">
        <div className="flex justify-start items-center flex-col">
          <div className="flex flex-col justify-start items-center font-bold text-2-5 text-center text-white w-full pt-8-3">
            Everyone's <br></br> Favorite EX.Zone
          </div>
          <div className="text-center text-white text-1-5 mt-5-5 w-18-3">
            Trade, earn, and own <br></br> crypto on the all-in-one multichain DEX
          </div>
          <div className="mt-3-8 w-22-0 h-4-7 text-white bg-primary-purple text-2-0 flex justify-center items-center rounded-2xl">
            Connect Wallet
          </div>
          <div className="mt-1-3 w-22-0 h-4-7 bg-white text-primary-purple text-2-0 flex justify-center items-center rounded-2xl">
            Trade Now
          </div>
        </div>
      </div>
      <div className="bg-home-banner-two bg-center bg-cover bg-no-repeat w-full h-58-9 pt-2-0">
        <div className="flex justify-start items-center flex-col">
          <div className="text-left text-black text-1-5 font-light mb-1-2 w-22-0 line-height-point-133">
            Shaping the Future of  <br></br> Decentralized Trading :
          </div>
          <div className="text-left text-black text-3-0 font-light w-22-0 mb-3-9 line-height-point-119">
            Ex.zone's  <br></br>Unstoppable<br></br>Expansion
          </div>
          {homeTotal.map((item, index) => {
            return (
              <div key={index} className="bg-white50 w-full py-1-3 mb-1-1 ">
                <div className="text-center text-black font-light text-1-5">{item.title}</div>
                <div className="text-center text-black font-light text-3-0 title-gradient"> {item.unit ? item.unit : ''} {item.count}</div>
                <div className="text-center text-black font-light text-1-5">{item.time}</div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="bg-home-banner-three bg-center bg-cover bg-no-repeat w-full h-68-3 pt-1-8">
        <div className="flex justify-start items-center flex-col mb-4-1">
          <div className="w-21-6 text-3-0 font-semibold text-white line-height-point-107 "><span className="text-primary-purple">D</span>iscover the <br></br>Ecosystem</div>
        </div>
        <div className="pl-2-4 text-2-0 overflow-x-scroll overflow-y-hidden w-full mb-1-4">
          <div className="w-30-3 flex justify-start items-center ecosystem-gradient">
            {ecosystemItems.map((item, index) => {
              return <div key={index} className={['font-light', index === 0 ? '' : 'ml-3-3'].join(' ')}>
                {item.title}
              </div>
            })}
          </div>
        </div>
        <div className="flex justify-start items-center flex-col">
          {tradeItems.map((item, index) => {
            return <div key={index} className="flex justify-between items-center py-1-8 w-22-0 border-b border-white50 border-dashed">
              <div className="w-12-0 text-white">
                <div className="text-2-0 font-light mb-1-0 line-height-num-33">{item.title}</div>
                <div className="text-1-0 font-light line-height-num-24">{ item.content}</div>
              </div>
              <div className="bg-ecosystem-button text-white text-1-0 w-6-9 h-3-2 flex justify-center items-center rounded-lg">
                {item.operating}
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}
