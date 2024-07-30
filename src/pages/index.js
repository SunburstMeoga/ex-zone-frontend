import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { socialMediaItems } from '@/dictionary/footer'
import { homeTotalItems, ecosystemItems, tradeItems, figuresItems, newsItems } from '@/dictionary/home'
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import AnimatedNumber from "@/components/AnimatedNumber";
import { useRouter } from 'next/router';

export default function Home() {
  let [homeTotal, changeHomeTotal] = useState([])
  const [numberOne, setNumberOne] = useState(100002);
  const [numberTwo, setNumberTwo] = useState(100982);
  const [numberThree, setNumberThree] = useState(2723462);
  const router = useRouter();
  let userList = ['', '']
  let walletAddress = useSelector((state) => state.wallet.address);
  useEffect(() => {
    changeHomeTotal(homeTotal = homeTotalItems)
    changeHomeTotal(homeTotal = [
      {
        title: 'Total Users:',
        count: 0,
        time: 'in the last 30 days',
      },
      {
        title: 'Total Trades:',
        count: 0,
        time: 'in the last 30 days',
      },
      {
        title: 'Total Value Locked:',
        count: 0,
        unit: '$'
      }
    ])
    const intervalOne = setInterval(() => {
      setNumberOne((prevNumber) => prevNumber + Math.floor(Math.random() * 10));
    }, 5000 * 2);
    const intervalTwo = setInterval(() => {
      setNumberTwo((prevNumber) => prevNumber + Math.floor(Math.random() * 10));
    }, 4000);
    const intervalThree = setInterval(() => {
      setNumberThree((prevNumber) => prevNumber + Math.floor(Math.random() * 100));
    }, 5000);
    console.log(walletAddress, '')

    return () => {
      clearInterval(intervalOne)
      clearInterval(intervalTwo)
      clearInterval(intervalThree)

    }
  }, [])
  useEffect(() => {
    console.log('Component re-rendered in home', walletAddress);
  }, [walletAddress]);
  const handleTradeNow = () => {
    router.push('/swap')
  }
  const handleOperating = (item) => {
    router.push(item.link)
  }
  return (
    <div className="">
      <div className="bg-home-banner-one bg-center bg-cover bg-no-repeat w-full h-58-0 lg:bg-pad-home-banner-one lg:h-67-5 xl:bg-pc-home-banner-one">
        <div className="flex justify-start items-center flex-col">
          <div className="flex flex-col justify-start items-center font-bold text-2-5 text-center text-white w-full pt-8-3 lg:text-6-0 lg:pt-13-4">
            Everyone's <br></br> Favorite EX.zone
          </div>
          <div className="text-center text-white text-1-5 mt-5-5 w-18-3 lg:text-2-0 lg:font-extrabold lg:w-39-4 lg:mt-1-2 xl:w-full">
            Trade, earn, and own <br className="xl:hidden"></br> crypto on the all-in-one multichain DEX
          </div>
          <div className="flex flex-col justify-start items-center lg:flex-row lg:justify-between lg:w-51-4 lg:mt-13-5">
            {/* <div className="mt-3-8 w-22-0 h-4-7 text-white bg-primary-purple text-2-0 flex justify-center items-center rounded-2xl lg:w-24-0 lg:h-5-9 lg:font-extrabold lg:mt-0-1">
              Connect Wallet
            </div> */}
            <div onClick={() => handleTradeNow()} className="mt-1-3 w-22-0 h-4-7 bg-white text-primary-purple text-2-0 flex justify-center items-center rounded-2xl lg:w-24-0 lg:h-5-9 lg:font-extrabold lg:mt-0-1 active:bg-opacity-90">
              <div>
                Trade Now
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-home-banner-two bg-center bg-cover bg-no-repeat w-full h-58-9 pt-2-0 lg:bg-pad-home-banner-two lg:h-93-8 lg:pt-6-3 xl:bg-pc-home-banner-two xl:h-auto xl:pt-9-7">
        <div className="flex justify-start items-center flex-col xl:w-full ">
          <div className="text-left text-black text-1-5 font-light mb-1-2 w-22-0 line-height-point-133 lg:w-full lg:text-center lg:mb-5-2">
            Shaping the Future of  <br className="lg:hidden"></br> Decentralized Trading :
          </div>
          <div className="text-left text-black text-3-0 font-light w-22-0 mb-3-9 line-height-point-119 lg:w-44-2 lg:text-center lg:text-6-0 lg:mb-5-0 xl:w-full">
            EX.zone's  <br className="xl:hidden"></br>Unstoppable<br></br>Expansion
          </div>
          <div className="w-full xl:flex xl:justify-around xl:items-center xl:w-full xl:px-9-4">
            {homeTotal.map((item, index) => {
              return (
                <div key={index} className="bg-white50 w-full py-1-3 mb-1-1 lg:w-36-6 lg:py-1-4 lg:rounded-3xl lg:mb-3-2 lg:h-13-5 xl:w-32-1 xl:mb-18-8">
                  <div className="text-center text-black font-light text-1-5 lg:font-semibold">{item.title}</div>
                  <div className="text-center text-black font-light text-3-0 title-gradient lg:text-4-0 lg:font-extrabold"> {item.unit ? item.unit : ''}
                    {index === 0 && <AnimatedNumber number={numberOne} />}
                    {index === 1 && <AnimatedNumber number={numberTwo} />}
                    {index === 2 && <AnimatedNumber number={numberThree} />}
                  </div>
                  {/* <div><AnimatedNumber number={number} /></div> */}
                  <div className="text-center text-black font-light text-1-5 lg:font-extrabold">{item.time}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="bg-home-banner-three bg-center bg-cover bg-no-repeat w-full -mt-0-1 h-68-3 pt-1-8 lg:bg-pad-home-banner-three lg:h-auto lg:border lg:border-black20 ">
        <div className="flex justify-start items-center flex-col mb-4-1 lg:mb-7-8">
          <div className=" w-21-6 text-3-0 font-semibold text-white line-height-point-107 lg:text-8-0 lg:w-52-8 lg:mt-6-9 lg:font-light xl:w-full xl:pl-5-5"><span className="text-primary-purple">D</span>iscover the <br></br>Ecosystem</div>
        </div>
        {/* <div className="pl-2-4 text-2-0 overflow-x-scroll overflow-y-hidden w-full mb-1-4 lg:text-4-0 lg:overflow-x-hidden lg:flex lg:justify-center lg:items-center lg:pl-0-1 xl:hidden">
          <div className="w-30-3 flex justify-start items-center ecosystem-gradient lg:w-52-8 ">
            {ecosystemItems.map((item, index) => {
              return <div key={index} className={['font-light', index === 0 ? '' : 'ml-3-3'].join(' ')}>
                {item.title}
              </div>
            })}
          </div>
        </div> */}
        <div className="flex justify-start items-center flex-col lg:flex-row lg:flex-wrap lg:w-52-8 lg:ml-auto lg:mr-auto lg:justify-between mb-4-0 xl:w-full xl:pl-0-1 xl:justify-around">
          {tradeItems.map((item, index) => {
            return <div key={index} className={["flex justify-between items-center py-1-8  lg:rounded-2xl lg:bg-gradient-trade lg:px-3-4 lg:flex-col lg:justify-start lg:items-start lg:mb-1-8 lg:h-23-2 xl:relative", index !== tradeItems.length - 1 ? 'border-b border-white50 border-dashed lg:border-none w-22-0 lg:w-26-0 xl:w-20-0' : ' w-22-0  lg:w-52-8 xl:w-20-0'].join(' ')}>
              <div className={` text-white lg:mb-7-0  ${index === tradeItems.length - 1 ? 'lg:w-35-6 xl:w-20-0' : 'w-12-0 lg:w-22-0 xl:w-20-0'}`}>
                <div className="text-2-0 font-light mb-0-3 line-height-num-33 lg:text-2-2 lg:font-extrabold">{item.title}</div>
                <div className="text-1-0 font-light line-height-num-24 w-12-0 lg:text-1-5 lg:font-medium xl:w-14-8">{item.content}</div>
              </div>
              <div onClick={() => handleOperating(item)} className="bg-ecosystem-button text-white text-1-0 w-6-9 h-3-2 flex justify-center items-center rounded-lg lg:w-9-0 lg:h-3-3 xl:absolute xl:bottom-2-0">
                {item.operating}
              </div>
            </div>
          })}
        </div>
      </div>
      <div className="bg-home-banner-four bg-center bg-cover bg-no-repeat w-full h-50-5 pt-5-8 -mt-0-2 lg:bg-pad-home-banner-four lg:h-auto border border-black20 lg:pt-7-5">
        <div className="flex justify-start items-center flex-col mb-4-1">
          <div className="w-22-0 text-3-0 font-semibold line-height-point-111 text-white mb-2-0 lg:text-6-0 lg:w-47-6 lg:font-light lg:text-center lg:mb-4-3 xl:w-full">
            <span className="text-primary-red">Un</span>lock the Full Potential of <br className="hidden xl:block"></br> DeFi with <span className="text-primary-purple">HAH</span>
          </div>
          <div className="w-22-0 text-white text-1-0 line-height-point-133 mb-10-5 lg:w-38-6 lg:text-1-5 lg:font-medium lg:text-center lg:mb-13-9">
            Experience the power of community ownership, global governance, and explore infinite use cases within the PancakeSwap ecosystem
          </div>
          <div className="w-18-9 lg:w-40-6 lg:flex lg:justify-between lg:items-center lg:mb-9-3">
            <div className="w-18-9  text-white text-2-0 font-medium rounded-2xl h-4-7 flex justify-center items-center button-gradient mb-1-2 lg:mb-auto">Buy HAH</div>
            <div className="text relative">
              <div className="w-18-9 h-4-7 rounded-2xl p-0-2 gradient-border text-white"></div>
              <div className="absolute text-white w-18-9 h-4-7 flex justify-center items-center text-2-0 top-0-1">Learn</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-home-banner-five bg-center bg-cover bg-no-repeat w-full -mt-0-2 pt-5-2 h-auto flex flex-col justify-start items-center lg:bg-pad-home-banner-five">
        <div className="text-center text-white mb-1-9 lg:w-51-6 lg:text-left">
          <div className=" text-4-5 line-height-point-111 font-semibold lg:text-8-0 lg:font-light">Staking</div>
          <div className="text-1-5 line-height-point-173 lg:text-3-0">Earn up to 26.34% APR</div>
        </div>
        <div className="flex flex-col justify-start items-center text-white w-full">
          <div className="lg:flex lg:items-start lg:w-51-6">
            <div className="bg-black font-light text-white w-22-6 h-5-0 rounded-xl flex justify-center items-center text-2-5 line-height-point-111 mb-2-9 lg:w-36-3 lg:text-4-0 lg:h-6-5" onClick={() => { router.push('/staking') }}>Lock HAH Now!</div>
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-between lg:w-56-0">
            <div className="lg:order-2">
              <div className="text-3-0 line-height-point-111 mb-2-7 w-22-0 lg:text-4-0 lg:font-light lg:mb-1-5">Ecosystem</div>
              <div>
                <div className="bg-black20 font-medium text-white w-22-6 h-7-2 rounded-xl flex justify-center items-center text-2-5 line-height-point-111 mb-0-6 lg:w-26-2 lg:h-5-4 lg:text-2-2 lg:mb-1-2 lg:rounded-2xl">Gauges Voting</div>
                <div className="bg-black20 font-medium text-white w-22-6 h-7-2 rounded-xl flex justify-center items-center text-2-5 line-height-point-111 lg:w-26-2 lg:h-5-4 lg:text-2-2 lg:rounded-2xl">IFO</div>
              </div>
            </div>
            <div className="w-full -mt-2-0 lg:order-1 lg:flex lg:justify-center lg:items-center">
              <img className="lg:hidden" src="/images/phone/currency.png" alt=""></img>
              <img className="hidden lg:w-39-0 lg:block xl:hidden  " src="/images/pad/currency.png" alt=""></img>

            </div>
            <div className="lg:order-3">
              <div className="text-3-0 line-height-point-111 mb-2-7 w-22-0 -mt-8-8 lg:-mt-0-1 lg:text-4-0 lg:font-light lg:mb-1-5">Partners</div>
              <div>
                <div className="bg-black20 font-medium text-white w-22-6 h-7-2 rounded-xl flex justify-center items-center text-2-5 line-height-point-111 mb-0-6 lg:w-26-2 lg:h-5-4 lg:text-2-2 lg:mb-1-2 lg:rounded-2xl">Hash Ahead</div>
                <div className="bg-black20 font-medium text-white w-22-6 h-7-2 rounded-xl flex justify-center items-center text-2-5 line-height-point-111 lg:w-26-2 lg:h-5-4 lg:text-2-2 lg:rounded-2xl">HAH Chain</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-left w-22-0 lg:w-56-0 flex flex-col justify-start items-start text-white mb-1-9 mt-4-6 lg:mt-7-9 lg:mb-3-0 lg:flex-row">
          <div className="text-4-5  line-height-point-99 font-semibold ">HAH</div>
          <div className="text-4-5 line-height-point-99 font-semibold lg:ml-2-0">Figures</div>
        </div>
        <div className="flex flex-col justify-start items-center w-full lg:flex-row lg:flex-wrap lg:w-56-0 lg:justify-between lg:mb-4-6">
          {figuresItems.map((item, index) => {
            return <div key={index} className="w-full h-9-5 bg-black20  flex justify-center items-center mb-1-6 rounded-r-2xl text-white lg:w-26-2 lg:rounded-2xl lg:mb-2-7">
              <div className="w-22-6 lg:w-21-6">
                <div className="text-1-5 font-light">{item.title}</div>
                <div className="text-3-0 font-light">{item.content}</div>
              </div>
            </div>
          })}
        </div>
      </div>
      <div className="join-gradient pt-3-9 h-auto">
        <div className="flex justify-start items-center flex-col mb-2-1 lg:justify-center ">
          <div className="w-21-6 text-3-0 font-semibold text-white line-height-point-107 mb-0-6 lg:text-6-0 lg:pt-6-3 lg:w-42-3 lg:text-center lg:mb-2-1 xl:w-full"><span className="text-primary-purple">Join</span> Our<br className="xl:hidden"></br><span className="text-primary-red">Community</span></div>
          <div className="w-21-6 text-1-2 text-white line-height-point-111 font-light lg:w-31-3 lg:text-center lg:text-1-5">Together we can make the PancakeSwap community even stronger</div>
        </div>
        <div className="lg:flex lg:justify-between lg:items-center lg:w-58-1 lg:ml-auto lg:mr-auto lg:mt-5-0">
          <div className="pl-1-0 relative lg:w-full">
            <div className="gradient-border-round w-17-0 h-17-0 rounded-full p-0-1 "></div>
            <div className="absolute text-white  w-17-0 h-17-0 rounded-full flex flex-col justify-center items-start text-2-0 pl-2-5 top-0-1">
              <div className="font-light line-height-point-111 text-1-5 mb-0-4">Community <br></br> Members</div>
              <div className="font-light line-height-point-111 text-3-0 lg:text-4-0 lg:font-semibold">2.0M +</div>
            </div>
          </div>
          <div className="pr-1-0 relative w-full flex justify-end -mt-4-4 lg:-mt-0-1 lg:justify-center">
            <div className="gradient-border-round-reserve w-17-0 h-17-0 rounded-full p-0-1"></div>
            <div className="absolute text-white  w-17-0 h-17-0 rounded-full flex flex-col justify-center items-start text-2-0 pl-2-5 top-0-1">
              <div className="font-light line-height-point-111 text-1-5 mb-0-4">Multilingual <br></br> Communities</div>
              <div className="font-light line-height-point-111 text-3-0 lg:text-4-0 lg:font-semibold">15 +</div>
            </div>
          </div>
          <div className="pl-1-0 relative">
            <div className="gradient-border-round w-17-0 h-17-0 rounded-full p-0-1 -mt-4-4 lg:-mt-0-1"></div>
            <div className="absolute text-white  w-17-0 h-17-0 rounded-full flex flex-col justify-center items-start text-2-0 pl-2-5 top-0-1">
              <div className="font-light line-height-point-111 text-1-5 mb-0-4">Community <br></br> Ambassadors</div>
              <div className="font-light line-height-point-111 text-3-0 lg:text-4-0 lg:font-semibold">35 +</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center mt-2-7 ">
          <div className="flex flex-col justify-start items-center lg:w-57-8 lg:flex-row lg:justify-between lg:items-center">
            {userList.map((item, index) => {
              return <div key={index} className="w-22-0 h-23-6 rounded-2xl bg-black25 mb-1-8 p-1-4 lg:w-28-3 lg:h-21-7">
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
            })}
          </div>

          <div className="w-22-0 flex justify-between items-center mt-2-0 mb-2-0 lg:w-38-5">
            {socialMediaItems.map((item, index) => {
              return <div key={index} className="bg-black25 w-3-1 h-3-1 flex justify-center items-center rounded-full lg:w-3-8 lg:h-3-8">
                <div className={`icon iconfont text-primary-purple text-1-6 lg:text-2-0 ${item.icon}`} ></div>
              </div>
            })}
          </div>
        </div>
      </div>

      <div className="w-full h-97-0 bg-home-banner-six bg-center bg-cover bg-no-repeat -mt-0-1 pt-3-4 lg:bg-pad-home-banner-six lg:h-auto lg:pt-6-5">
        <div className="flex flex-col justify-start items-center text-3-0 line-height-point-91 mb-1-8 lg:flex-row lg:justify-center lg:text-6-0 lg:mb-4-7">
          <div className="text-primary-purple font-medium">Featured</div>
          <div className="text-primary-red font-medium">News</div>
        </div>
        <div className="flex flex-col justify-start items-center mb-1-6 lg:flex-row lg:justify-between lg:ml-auto lg:mr-auto lg:flex-wrap lg:w-58-8">
          {newsItems.map((item, index) => {
            return <div key={index} className="py-1-5 w-22-5 px-1-2 rounded-2xl bg-news-card mb-0-8 lg:px-2-0 lg:w-28-7">
              <div className="rounded-xl lg:w-24-7">
                <img className="lg:hidden" src="/images/phone/news.png" alt=""></img>
                <img className="hidden lg:block" src="/images/pad/news.png" alt=""></img>
              </div>
              <div className="flex justify-between items-center text-white mt-1-0 mb-1-2 text-0-9 lg:text-1-0 lg:mt-1-4 lg:mb-2-0 lg:justify-start">
                <div className="font-light line-height-point-111 lg">From {`[${item.from}]`}</div>
                <div className="font-light line-height-point-111 lg:ml-2-0">{item.time}</div>
              </div>
              <div className="text-white line-height-point-111 text-1-5">{item.content}</div>
              <div className="hidden lg:block text-white font-light text-1-0 mt-1-4 mb-2-4">{item.details}</div>
            </div>
          })}
        </div>
        <div className="flex justify-center items-center lg:pb-2-0">
          <div className="bg-primary-purple w-22-5 h-4-7 text-white text-2-0 rounded-xl flex justify-center items-center lg:w-30-8">More...</div>
        </div>
      </div>

      <div className="w-full bg-home-banner-seven bg-center bg-cover bg-no-repeat h-37-0 flex flex-col justify-start items-center lg:bg-pad-home-banner-seven lg:h-auto ">
        <div className="text-white font-bold text-3-0 line-height-point-111 pt-4-2 mb-8-2 w-24-5 lg:pt-9-0 lg:text-center lg:text-6-0 lg:font-bold lg:w-50-0 lg:mb-4-7">
          Join <br className="lg:hidden"></br>Everyone's <br></br>Favorite <br></br>EX.zone Now!
        </div>
        <div className="w-24-5 rounded-full h-6-6 bg-black text-white font-bold text-2-0 flex justify-center items-center lg:w-35-2 lg:h-6-5 lg:text-3-0 lg:mb-17-7">Connect Wallet</div>
      </div>
    </div>
  );
}
