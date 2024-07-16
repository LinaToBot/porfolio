/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio",
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
