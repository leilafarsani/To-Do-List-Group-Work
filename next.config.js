/** @type {import('next').NextConfig} */
const nextConfig = {
  // this is to enable Server Actions on Server Components
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
