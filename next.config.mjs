/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/asim-iqbal-gem' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/asim-iqbal-gem/' : '',
};

export default nextConfig;
