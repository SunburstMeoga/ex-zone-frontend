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
        "swap-banner": "url('/images/phone/swap-banner.png')",
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
        "purple62": "rgba(144,156,255,0.62)",
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
        "liquidity-module": "#262255"
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
