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
        "home-banner-one": "url('/images/home-banner-one.png')",
        "home-banner-two": "url('/images/home-banner-two.png')",
        "home-banner-three": "url('/images/home-banner-three.png')",
        "home-banner-four": "url('/images/home-banner-four.png')",
        "home-banner-five": "url('/images/home-banner-five.png')"
      },
      colors: {
        "primary-purple": "#4C2ABE",
        "primary-red": "#E92160",
        "ecosystem-button": "#282258",
        "white50": "rgba(255,255,255,0.5)",
        "black20": "rgba(0,0,0,0.2)",
        "black25": "rgba(0,0,0,0.25)",
        "icon-gray": "#787878",
        "link-blue": "#0082FA"

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
