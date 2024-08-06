import "@/styles/globals.css";
import "@/styles/iconfont.css";
import "@/styles/animation.css";
import 'antd-mobile/es/global';
import 'animate.css/animate.min.css';
import React, { useEffect } from 'react';
import Layout from "@/components/Layout";
import { Provider } from 'react-redux';
import store from "@/store";
const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const handleResize = () => {
      const e = document.documentElement.clientWidth;
      document.getElementsByTagName('html')[0].style['font-size'] = e > 1024 ? '0.8vw' : '16px';
    };

    // Call it once to set initial font-size
    handleResize();

    // Attach the event listener to handle window resize
    window.addEventListener('resize', handleResize);
    const fetchPrices = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin&vs_currencies=usd&include_24hr_change=true')
        const data = await response.json()
        console.log('API Response:', data)
        localStorage.setItem('btctousdt', data.bitcoin.usd)
        localStorage.setItem('ethtousdt', data.ethereum.usd)
        localStorage.setItem('usd3tousdt', 1)
        // setLoading(false);
      } catch (error) {
        console.error('Error fetching prices:', error);

        // setError(error);
        // setLoading(false);
        // setLoading(false);
      }
    };

    fetchPrices();
    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default App

