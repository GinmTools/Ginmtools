/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for GitHub Pages (no Node server).
  output: "export",
  basePath: process.env.NODE_ENV === 'production' ? '/Ginmtools' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Ginmtools' : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
