const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withRoutes = require("nextjs-routes/config")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "web.ccpgamescdn.com",
      },
      {
        protocol: "https",
        hostname: "images.evetech.net",
      },
      {
        protocol: "https",
        hostname: "www.teamspeak3.com",
      },
    ],
  },
  // required for Docker support
  // https://github.com/vercel/next.js/tree/canary/examples/with-docker
  output: "standalone",
};

module.exports = withBundleAnalyzer(withRoutes(nextConfig));
