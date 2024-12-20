/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "i.ibb.co" },
      { hostname: "i.postimg.cc" },
      { hostname: "192.168.10.13" },
      { hostname: "pngall.com" },
      { hostname: "68.183.224.38" },
      { hostname: "bdcallingacademy.com" },
      { hostname: "server.bdcallingacademy.com" },
      { hostname: "https://www.bdcallingacademy.com" },
      { hostname: "www.bdcallingacademy.com" },
      { hostname: "http://165.232.137.110" },
      { hostname: "165.232.137.110" },
    ],
  },
};

module.exports = nextConfig;
