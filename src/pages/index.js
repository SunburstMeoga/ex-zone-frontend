import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { homeTotalItems, ecosystemItems, tradeItems, figuresItems,newsItems } from '@/dictionary/home'
import { useEffect, useState } from "react";

export default function Home() {
  let [homeTotal, changeHomeTotal] = useState([])

  useEffect(() => {
    changeHomeTotal(homeTotal = homeTotalItems)
    console.log(homeTotal)
  }, [])
  return (
    <div className="">
      <div className="bg-home-banner-one bg-center bg-cover bg-no-repeat w-full h-58-0 ">
        <div className="flex justify-start items-center flex-col">
          <div className="flex flex-col justify-start items-center font-bold text-2-5 text-center text-white w-full pt-8-3">
            Everyone's <br></br> Favorite EX.zone
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
            EX.zone's  <br></br>Unstoppable<br></br>Expansion
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
      <div className="bg-home-banner-three bg-center bg-cover bg-no-repeat w-full h-68-3 pt-1-8 ">
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
            return <div key={index} className={["flex justify-between items-center py-1-8 w-22-0 ", index !== tradeItems.length - 1 ? 'border-b border-white50 border-dashed' : ''].join(' ')}>
              <div className="w-12-0 text-white">
                <div className="text-2-0 font-light mb-0-3 line-height-num-33">{item.title}</div>
                <div className="text-1-0 font-light line-height-num-24">{item.content}</div>
              </div>
              <div className="bg-ecosystem-button text-white text-1-0 w-6-9 h-3-2 flex justify-center items-center rounded-lg">
                {item.operating}
              </div>
            </div>
          })}
        </div>
      </div>
      <div className="bg-home-banner-four bg-center bg-cover bg-no-repeat w-full h-50-5 pt-5-8 -mt-0-1">
        <div className="flex justify-start items-center flex-col mb-4-1">
          <div className="w-22-0 text-3-0 font-semibold line-height-point-111 text-white mb-2-0">
            <span className="text-primary-red">Un</span>lock the Full Potential of DeFi with <span className="text-primary-purple">HAH</span>
          </div>
          <div className="w-22-0 text-white text-1-0 line-height-point-133 mb-10-5">
            Experience the power of community ownership, global governance, and explore infinite use cases within the PancakeSwap ecosystem
          </div>
          <div className="w-18-9  text-white text-2-0 font-medium rounded-2xl h-4-7 flex justify-center items-center button-gradient mb-1-2">Buy HAH</div>
          <div className="text relative">
            <div className="w-18-9 h-4-7 rounded-2xl p-0-2 gradient-border text-white"></div>
            <div className="absolute text-white w-18-9 h-4-7 flex justify-center items-center text-2-0 top-0-1">Learn</div>
          </div>
        </div>
      </div>
      <div className="bg-home-banner-five bg-center bg-cover bg-no-repeat w-full -mt-0-1 pt-5-2" style={{ height: '2805px' }}>
        <div className="text-center text-white  mb-1-9">
          <div className=" text-4-5 line-height-point-111 font-semibold">Staking</div>
          <div className="text-1-5 line-height-point-173 mt-">Earn up to 26.34% APR</div>
        </div>
        <div className="flex flex-col justify-start items-center text-white">
          <div className="bg-black font-light text-white w-22-6 h-5-0 rounded-xl flex justify-center items-center text-2-5 line-height-point-111 mb-2-9">Lock HAH Now</div>
          <div className="text-3-0 line-height-point-111 mb-2-7 w-22-0">Ecosystem</div>
          <div className="bg-black20 font-medium text-white w-22-6 h-7-2 rounded-xl flex justify-center items-center text-2-5 line-height-point-111 mb-0-6">Gauges Voting</div>
          <div className="bg-black20 font-medium text-white w-22-6 h-7-2 rounded-xl flex justify-center items-center text-2-5 line-height-point-111">IFO</div>
          <div className="w-full -mt-2-0">
            <img className="" src="/images/phone/currency.png" alt=""></img>
          </div>
          <div className="text-3-0 line-height-point-111 mb-2-7 w-22-0 -mt-8-8">Partners</div>
          <div className="bg-black20 font-medium text-white w-22-6 h-7-2 rounded-xl flex justify-center items-center text-2-5 line-height-point-111 mb-0-6">Hash Ahead</div>
          <div className="bg-black20 font-medium text-white w-22-6 h-7-2 rounded-xl flex justify-center items-center text-2-5 line-height-point-111">HAHhain</div>
        </div>
        <div className="text-left flex flex-col justify-start items-center text-white mb-1-9 mt-4-6">
          <div className="text-4-5  w-22-6 line-height-point-99 font-semibold">HAH</div>
          <div className="text-4-5  w-22-6 line-height-point-99 font-semibold">Figures</div>
        </div>
        <div className="flex flex-col justify-start items-center">
          {figuresItems.map((item, index) => {
            return <div key={index} className="w-full h-9-5 bg-black20  flex justify-center items-center mb-1-6 rounded-r-2xl text-white">
              <div className="w-22-6">
                <div className="text-1-5 font-light">{item.title}</div>
                <div className="text-3-0 font-light">{item.content}</div>
              </div>
            </div>
          })}
        </div>
      </div>
      <div className="join-gradient pt-3-9" style={{ height: '121.43rem' }}>
        <div className="flex justify-start items-center flex-col mb-2-1">
          <div className="w-21-6 text-3-0 font-semibold text-white line-height-point-107 mb-0-6"><span className="text-primary-purple">Join</span> Our<br></br><span className="text-primary-red">Community</span></div>
          <div className="w-21-6 text-1-2 text-white line-height-point-111 font-light">Together we can make the PancakeSwap community even stronger</div>
        </div>
        <div className="pl-1-0 relative">
          <div className="gradient-border-round w-17-0 h-17-0 rounded-full p-0-1"></div>
          <div className="absolute text-white  w-17-0 h-17-0 rounded-full flex flex-col justify-center items-start text-2-0 pl-2-5 top-0-1">
            <div className="font-light line-height-point-111 text-1-5 mb-0-4">Community <br></br> Members</div>
            <div className="font-light line-height-point-111 text-3-0">2.0M +</div>
          </div>
        </div>
        <div className="pr-1-0 relative w-full flex justify-end -mt-4-4">
          <div className="gradient-border-round-reserve w-17-0 h-17-0 rounded-full p-0-1"></div>
          <div className="absolute text-white  w-17-0 h-17-0 rounded-full flex flex-col justify-center items-start text-2-0 pl-2-5 top-0-1">
            <div className="font-light line-height-point-111 text-1-5 mb-0-4">Multilingual <br></br> Communities</div>
            <div className="font-light line-height-point-111 text-3-0">15 +</div>
          </div>
        </div>
        <div className="pl-1-0 relative">
          <div className="gradient-border-round w-17-0 h-17-0 rounded-full p-0-1 -mt-4-4"></div>
          <div className="absolute text-white  w-17-0 h-17-0 rounded-full flex flex-col justify-center items-start text-2-0 pl-2-5 top-0-1">
            <div className="font-light line-height-point-111 text-1-5 mb-0-4">Community <br></br> Ambassadors</div>
            <div className="font-light line-height-point-111 text-3-0">35 +</div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center mt-2-7">
          <div className="w-22-0 h-23-6 rounded-2xl bg-black25 mb-1-8 p-1-4">
            <div className="flex justify-start items-center mb-1-2">
              <div className="rounded-full w-4-0 h-4-0 overflow-hidden">
                <img src="https://pic1.zhimg.com/50/9b2a11a46cb0d1740e90b0f4f35e8a49_l.jpg?source=b6762063" alt=""></img>
              </div>
              <div className="text-white font-light line-height-point-111 text-1-2 pl-1-8">
                <div className="">Ligne 9 </div>
                <div className="">@Ligne9 RATP</div>
              </div>
            </div>
            <div className="text-1-0 font-light line-height-point-111 text-white mb-2-5">
              Trafic en temps réel, travaux & événements... Retrouvez-nous tous les jourssur votre #ligne9 ! La #RATP est operateur de mobilités pour @idfmobilites.
            </div>
            <div>
              <div className="flex justify-start items-center mb-0-5">
                <div className="icon iconfont icon-address text-icon-gray" style={{ fontSize: '1rem' }}></div>
                <div className="ml-0-5 text-white">Paris</div>
              </div>
              <div className="flex justify-start items-center mb-0-5">
                <div className="icon iconfont icon-date text-icon-gray" style={{ fontSize: '1rem' }}></div>
                <div className="ml-0-5 text-white">Joined January 2009</div>
              </div>
              <div className="flex justify-start items-center mb-0-5">
                <div className="icon iconfont icon-link text-icon-gray" style={{ fontSize: '1rem' }}></div>
                <div className="ml-0-5 text-link-blue"> paris.fr/pages/gregoire…</div>
              </div>
            </div>
            <div className="flex justify-start items-start">
              <div className="flex justify-start items-center text-1-0 text-white">
                <div className="font-bold">4,341</div>
                <div className="font-light pl-0-3" >Following</div>
              </div>
              <div className="flex justify-start items-center text-1-0 text-white ml-1-0">
                <div className="font-bold">68.3K</div>
                <div className="font-light pl-0-3">Followers</div>
              </div>
            </div>
          </div>

          <div className="w-22-0 h-23-6 rounded-2xl bg-black25 mb-1-8 p-1-4">
            <div className="flex justify-start items-center mb-1-2">
              <div className="rounded-full w-4-0 h-4-0 overflow-hidden">
                <img src="https://pic1.zhimg.com/50/9b2a11a46cb0d1740e90b0f4f35e8a49_l.jpg?source=b6762063" alt=""></img>
              </div>
              <div className="text-white font-light line-height-point-111 text-1-2 pl-1-8">
                <div className="">Ligne 9 </div>
                <div className="">@Ligne9 RATP</div>
              </div>
            </div>
            <div className="text-1-0 font-light line-height-point-111 text-white mb-2-5">
              Trafic en temps réel, travaux & événements... Retrouvez-nous tous les jourssur votre #ligne9 ! La #RATP est operateur de mobilités pour @idfmobilites.
            </div>
            <div>
              <div className="flex justify-start items-center mb-0-5">
                <div className="icon iconfont icon-address text-icon-gray" style={{ fontSize: '1rem' }}></div>
                <div className="ml-0-5 text-white">Paris</div>
              </div>
              <div className="flex justify-start items-center mb-0-5">
                <div className="icon iconfont icon-date text-icon-gray" style={{ fontSize: '1rem' }}></div>
                <div className="ml-0-5 text-white">Joined January 2009</div>
              </div>
              <div className="flex justify-start items-center mb-0-5">
                <div className="icon iconfont icon-link text-icon-gray" style={{ fontSize: '1rem' }}></div>
                <div className="ml-0-5 text-link-blue"> paris.fr/pages/gregoire…</div>
              </div>
            </div>
            <div className="flex justify-start items-start">
              <div className="flex justify-start items-center text-1-0 text-white">
                <div className="font-bold">4,341</div>
                <div className="font-light pl-0-3" >Following</div>
              </div>
              <div className="flex justify-start items-center text-1-0 text-white ml-1-0">
                <div className="font-bold">68.3K</div>
                <div className="font-light pl-0-3">Followers</div>
              </div>
            </div>
          </div>

          <div className="w-22-0 flex justify-between items-center mt-2-0">
            <div className="bg-black25 w-3-1 h-3-1 flex justify-center items-center rounded-full">
              <div className="icon iconfont icon-tuitex text-primary-purple" style={{fontSize: '1.62rem'}}></div>
            </div>
            <div className="bg-black25 w-3-1 h-3-1 flex justify-center items-center rounded-full">
              <div className="icon iconfont icon-telegram text-primary-purple" style={{fontSize: '1.62rem'}}></div>
            </div>
            <div className="bg-black25 w-3-1 h-3-1 flex justify-center items-center rounded-full">
              <div className="icon iconfont icon-discord text-primary-purple" style={{fontSize: '1.62rem'}}></div>
            </div>
            <div className="bg-black25 w-3-1 h-3-1 flex justify-center items-center rounded-full">
              <div className="icon iconfont icon-discord text-primary-purple" style={{fontSize: '1.62rem'}}></div>
            </div>
            <div className="bg-black25 w-3-1 h-3-1 flex justify-center items-center rounded-full">
              <div className="icon iconfont icon-instagram text-primary-purple" style={{fontSize: '1.62rem'}}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-97-0 bg-home-banner-six bg-center bg-cover bg-no-repeat -mt-0-1 pt-3-4">
        <div className="flex flex-col justify-start items-center text-3-0 line-height-point-91 mb-1-8">
          <div className="text-primary-purple font-medium">Featured</div>
          <div className="text-primary-red font-medium">News</div>
        </div>
        <div className="flex flex-col justify-start items-center mb-1-6">
          {newsItems.map((item, index) => {
            return <div key={index} className="py-1-5 w-24-5 px-1-2 rounded-2xl bg-news-card mb-0-8">
              <div className="rounded-xl">
                <img src="/images/phone/news.png" alt=""></img>
              </div>
              <div className="flex justify-between items-center text-white mt-1-0 mb-1-2">
                <div className="text-0-9 font-light line-height-point-111">From {`[${item.from}]`}</div>
                <div className="text-0-9 font-light line-height-point-111">{ item.time }</div>
              </div>
              <div className="text-white line-height-point-111 text-1-5">{ item.content}</div>
            </div>
          })}
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-primary-purple w-24-5 h-4-7 text-white text-2-0 rounded-xl flex justify-center items-center">More...</div>
        </div> 
      </div>

      <div className="w-full bg-home-banner-seven bg-center bg-cover bg-no-repeat h-37-0 flex flex-col justify-start items-center">
        <div className="text-white font-bold text-3-0 line-height-point-111 pt-4-2 mb-8-2 w-24-5">
          Join <br></br>Everyone's <br></br>Favorite <br></br>EX.zone Now!
        </div>
        <div className="w-24-5 rounded-full h-6-6 bg-black text-white text-bold text-2-0 flex justify-center items-center">Connect Wallet</div>
      </div>
    </div>
  );
}
