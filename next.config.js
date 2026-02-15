/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/demo/restaurant-menu",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
