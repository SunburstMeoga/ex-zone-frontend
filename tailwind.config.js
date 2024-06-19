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
        "how-to-work-rocket": "url('/images/phone/how-to-work-rocket.png')"
      },
      colors: {
        "primary-purple": "#4C2ABE",
        "primary-red": "#000000",
        "ecosystem-button": "#282258",
        "white50": "rgba(255,255,255,0.5)",
        "black20": "rgba(0,0,0,0.2)",
        "black25": "rgba(0,0,0,0.25)",
        "purple62": "rgba(144,156,255,0.62)",
        "icon-gray": "#787878",
        "link-blue": "#0082FA",
        "news-card": "#282258",
        "menu-green": "#29E5AD",
        "menu-black": "#151121",
        "voting-type": "#1F1C47",
        "voting-list": "#171337",
        "radio-gray": "#D9D9D9",
        "voting-border": "#65628C",
        "voting-details": "#0E0C23",
        "voting-close": "#575668",
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
