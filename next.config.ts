import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    // 解决 canvas 报错
    config.resolve.alias.canvas = false;
    return config;
  },
};



export default nextConfig;
