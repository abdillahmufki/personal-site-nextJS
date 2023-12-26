/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://3m6hsdp9.apicdn.sanity.io/v2022-03-07/data/query/production/:path*", // Update with your Sanity API URL
      },
    ];
  },
};

module.exports = nextConfig;
