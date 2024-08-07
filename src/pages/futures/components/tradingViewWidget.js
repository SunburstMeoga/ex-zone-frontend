// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget({ symbol }) {
  const container = useRef();

  useEffect(

    () => {
      const containerRef = container.current;

      // 清除以前的脚本
      containerRef.innerHTML = '';
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
    {
      "autosize": true,
      "width": "100%",
      "height": "100%",
      "symbol": "${symbol}",
      "interval": "D",
      "timezone": "exchange",
      "theme": "dark",
      "style": "1",
      "withdateranges": true,
      "allow_symbol_change": true,
      "save_image": false,
      "watchlist": [],
      "support_host": "https://www.tradingview.com"
    }`;
      container.current.appendChild(script);
      // console.log(script)
      return () => {
        // 清除副作用
        containerRef.innerHTML = '';
      };
    },

    [symbol]
  );

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% + 32px)", width: "100%" }}></div>
      {/* <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div> */}
    </div>
  );
}

export default memo(TradingViewWidget);
