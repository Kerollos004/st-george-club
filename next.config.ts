/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mahinproject.runasp.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
