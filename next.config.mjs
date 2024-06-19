/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.robinson.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
