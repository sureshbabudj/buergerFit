/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["src"],
  },
  output: "export", // This turns off the need for a Node.js server
  trailingSlash: true, // Better for SEO on static hosts
  images: {
    unoptimized: true, // Disable Next.js image optimization for static export
  },
};

export default nextConfig;
