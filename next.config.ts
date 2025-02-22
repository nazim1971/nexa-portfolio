import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        
      },
    ],
  },
  reactStrictMode: false
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/blog/:id',
        destination: '/blog/[id]',
        permanent: true,
      },
      {
        source: '/projects/:id',
        destination: '/projects/[id]',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;


