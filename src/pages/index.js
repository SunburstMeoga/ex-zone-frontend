import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { homeTotalItems } from '@/dictionary/home'
import { useEffect, useState } from "react";

export default function Home() {
  let [homeTotal, changeHomeTotal] = useState([])
  useEffect(() => {
    changeHomeTotal(homeTotal = homeTotalItems)
    console.log(homeTotal)
  }, [])
  return (
    <div className="text-red-500 lg:text-green-500 xl:text-blue-500">
      <div className="text bg-home-banner-one bg-center bg-cover bg-no-repeat w-full h-58-0 ">
        <div className="flex justify-start items-center flex-col">
          <div className="flex flex-col justify-start items-center font-bold text-2-5 text-center text-white w-full pt-8-3">
            Everyone's <br></br> Favorite EX.Zone
          </div>
          <div className="text-center text-white text-1-5 mt-5-5 w-18-3">
            Trade, earn, and own <br></br> crypto on the all-in-one multichain DEX
          </div>
          <div className="mt-3-8 w-22-0 h-4-7 text-white bg-button-purple text-2-0 flex justify-center items-center rounded-2xl">
            Connect Wallet
          </div>
          <div className="mt-1-3 w-22-0 h-4-7 bg-white text-button-purple text-2-0 flex justify-center items-center rounded-2xl">
            Trade Now
          </div>
        </div>
      </div>
      <div className="text bg-home-banner-two bg-center bg-cover bg-no-repeat w-full h-58-0 ">
        <div className="flex justify-start items-center flex-col">
          {/* <div className="text-center text-white text-1-5 mt-5-5 w-18-3">
            Trade, earn, and own <br></br> crypto on the all-in-one multichain DEX
          </div> */}
          {homeTotal.map((item, index) => {
            return (
              <div key={index} className="bg-white50 w-full h-10-4 mb-1-1 ">
              <div className="text-center text-black">{item.title}</div>
              <div className="text-center text-black">{item.count}</div>
              <div className="text-center text-black">{item.time}</div>
            </div>
            )
          })}

        </div>
      </div>

    </div>
  );
}
