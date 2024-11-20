import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/home-page',
        destination: '/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
