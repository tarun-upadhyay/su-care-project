/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  async rewrites() {
    return [
      {
        source: "/backend/:path*",
        destination:
          "https://6n9z548jx3.execute-api.ap-south-1.amazonaws.com/dev/backend/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
