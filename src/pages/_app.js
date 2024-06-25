import "@/styles/globals.css";
import "@/styles/iconfont.css";
import "@/styles/animation.css";
import 'antd-mobile/es/global';
import 'animate.css/animate.min.css';
import React, { useEffect } from 'react';
import Layout from "@/components/Layout";
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

    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App

