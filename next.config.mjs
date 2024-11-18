/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ['antd-mobile'],
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
    removeConsole: false,
  },
};

export default nextConfig;
