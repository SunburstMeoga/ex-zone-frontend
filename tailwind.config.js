/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: Array.from({ length: 1000 }).reduce((map, _, index) => {
      const value = ((index + 1) / 10).toFixed(1);
      const [integerPart, decimalPart] = value.split('.');
      const key = `${integerPart}-${decimalPart}`;
      const formattedValue = `${integerPart}.${decimalPart}`;
      map[key] = `${formattedValue}rem`;
      return map;
    }, {}),
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-trade": "linear-gradient(180deg, rgba(5,6,11,1) 0%, rgba(76,42,190,1) 100%);",
        "button-active": "linear-gradient(153deg, rgba(233, 33, 96, 1) 0%, rgba(76, 42, 190, 1) 100%);",
        "syrup-module": "linear-gradient(180deg, rgba(13,11,37,1) 0%, rgba(22,18,75,1) 100%);",
        "syrup-card": "linear-gradient(180deg, rgba(39,33,114,1) 0%, rgba(50,47,94,0) 100%);",
        "syrup-input": "linear-gradient(135deg, rgba(248,142,175,0.2) 0%, rgba(23,172,255,0.2) 100%);",
        "bridge-exchange-top": "linear-gradient(180deg, rgba(76,42,190,1) 0%, rgba(76,42,190,0) 100%);",
        "bridge-exchange-bottom": "linear-gradient(0deg, rgba(76,42,190,1) 0%, rgba(76,42,190,0) 100%);",
        "home-banner-one": "url('/images/phone/home-banner-one.png')",
        "home-banner-two": "url('/images/phone/home-banner-two.png')",
        "home-banner-three": "url('/images/phone/home-banner-three.png')",
        "home-banner-four": "url('/images/phone/home-banner-four.png')",
        "home-banner-five": "url('/images/phone/home-banner-five.png')",
        "home-banner-six": "url('/images/phone/home-banner-six.png')",
        "home-banner-seven": "url('/images/phone/home-banner-seven.png')",
        "how-to-work-rocket": "url('/images/phone/how-to-work-rocket.png')",
        "ifo-banner-one": "url('/images/phone/ifo-banner-one.png')",
        "ifo-details-banner": "url('/images/phone/ifo-details-banner.png')",
        "trading-banner-one": "url('/images/phone/trading-banner-one.png')",
        "trading-banner-two": "url('/images/phone/trading-banner-two.png')",
        "trading-banner-three": "url('/images/phone/trading-banner-three.png')",
        "trading-banner-four": "url('/images/phone/trading-banner-four.png')",
        "trading-banner-five": "url('/images/phone/trading-banner-five.png')",
        "trading-stakers-banner": "url('/images/phone/trading-stakers-banner.png')",
        "trading-gift": "url('/images/phone/trading-gift.png')",
        "trading-gold": "url('/images/phone/trading-gold.png')",
        "trading-banner-one": "url('/images/phone/trading-banner-one.png')",
        "pad-trading-banner-one": "url('/images/pad/pad-trading-banner-one.png')",
        "pad-trading-banner-two": "url('/images/pad/pad-trading-banner-two.png')",
        "pad-trading-banner-three": "url('/images/pad/pad-trading-banner-three.png')",
        "pad-trading-banner-four": "url('/images/pad/pad-trading-banner-four.png')",
        "pad-how-to-work-rocket": "url('/images/pad/pad-how-to-work-rocket.png')",
        "pad-ifo-details-banner": "url('/images/pad/pad-ifo-details-banner')",
        "pad-trading-gift": "url('/images/pad/pad-trading-gift.png')",
        "pad-trading-gold": "url('/images/pad/pad-trading-gold.png')",
        "swap-banner": "url('/images/phone/swap-banner.png')",
        "pad-home-banner-one": "url('/images/pad/pad-home-banner-one.png')",
        "pad-home-banner-two": "url('/images/pad/pad-home-banner-two.png')",
        "pad-home-banner-three": "url('/images/pad/pad-home-banner-three.png')",
        "pad-home-banner-four": "url('/images/pad/pad-home-banner-four.png')",
        "pad-home-banner-five": "url('/images/pad/pad-home-banner-five.png')",
        "pad-home-banner-six": "url('/images/pad/pad-home-banner-six.png')",
        "pad-home-banner-seven": "url('/images/pad/pad-home-banner-seven.png')",
        "pc-home-banner-one": "url('/images/pc/pc-home-banner-one.png')",
        "pc-home-banner-two": "url('/images/pc/pc-home-banner-two.png')",
        "phone-pools-banner-one": "url('/images/phone/phone-pools-banner-one.png')",
        "phone-position-managers-one": "url('/images/phone/phone-position-managers-one.png')",
        "phone-simple-staking-one": "url('/images/phone/phone-simple-staking-one.png')"
      },
      colors: {
        "primary-purple": "#4C2ABE",
        "primary-red": "#E92160",
        "primary-yellow": "#FFDA69",
        "primary-gold": "#A18A53",
        "ecosystem-button": "#282258",
        "white50": "rgba(255,255,255,0.5)",
        "black20": "rgba(0,0,0,0.2)",
        "black25": "rgba(0,0,0,0.25)",
        "black50": "rgba(0,0,0,.5)",
        "black80": "rgba(0,0,0,.8)",
        "black30": "rgba(0,0,0,.3)",
        "primary-60": "rgba(144,156,255,0.62)",
        "primary-50": "rgba(29,25,69,0.5)",
        "purple62": "rgba(144,156,255,0.62)",
        "purple31": "rgba(116,110,223,0.31)",
        "green20": "rgba(41,299,173,0.2)",
        "red20": "rgba(233,33,96,0.2)",

        "icon-gray": "#787878",
        "link-blue": "#0082FA",
        "news-card": "#282258",
        "menu-green": "#29E5AD",
        "menu-black": "#110E19",
        "voting-type": "#1F1C47",
        "voting-list": "#171337",
        "radio-gray": "#D9D9D9",
        "voting-border": "#65628C",
        "voting-details": "#0E0C23",
        "voting-close": "#575668",
        "page-black": "#151121",
        "private-button": "rgba(14,57,75,.8)",
        "card-border": "#54B1B8",
        "ifo-border": "#A186AC",
        "ifo-round": "#4A3C71",
        "ifo-details": "#311D73",
        "trading-yellow": "#FFB800",
        "trading-module": "#03050E",
        "trading-board-top": "rgba(41,45,80,.58)",
        "trading-board-bottom": "#191D3E",
        "rank-title": "#627EEA",
        "rank-list": "#1E213F",
        "earn-items": "rgba(101,98,140,.5)",
        "swap-tabs": "#0B081D",
        "swap-second-title": "#575480",
        "swap-card-module": "#161248",
        "swap-border": "#373278",
        "swap-copy-icon": "#4A458E",
        "swap-fire-type": "#16124A",
        "liquidity-module": "#262255",
        "warning-border": "#FFC700",
        "warning-module": "#FFF4D7",
        "warning-word": "#FF9900",
        "bridge-token-middle": "#0D0A27",
        "bridge-disable-button": "#312E59",
        "bridge-disable-word": "#5A5878",
        "limit-orders-module": "#373378",
        "limit-currency-from": "rgba(29,25,69,0.5)",
        "limit-choose": "#311F6C",
        "limit-border": "#472AAD",
        "buy-crypto-card": "rgba(76,71,136,.2)",
        "setting-button": "#E0E2EF",
        "pools-module": "#1A1833",
        "pools-border": "#312E5C",
        "calculator-title": "#9E9BBD",
        "calculator-details": "#E2E4F4",
        "liquid-staking-module": "#0D0B25",
        "liquid-staking-border": "#544E9B",
        "futures-tabs": "#CEC8E1",
        "futures-input-module": "#0C0A33",
        "futures-price": "#F5F6FF",
        "futures-word": "#8F8E9B",
        "buy-module": "#0E0A2C"
      },
      fontSize: ({ theme }) => ({
        ...theme("spacing"),
      }),
      lineHeight: ({ theme }) => ({
        ...theme("spacing"),
      }),
    },
  },
  plugins: [],
};
