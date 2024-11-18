/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ['antd-mobile'],
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // 修改 Terser 配置，保留 console.log
      config.optimization.minimizer = config.optimization.minimizer.map((plugin) => {
        if (plugin.constructor.name === 'TerserPlugin') {
          plugin.options.terserOptions.compress.drop_console = false;
        }
        return plugin;
      });
    }
    return config;
  },
};

export default nextConfig;
