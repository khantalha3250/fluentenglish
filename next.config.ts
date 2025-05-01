import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for the application
  output: "export",

  // Additional configuration options
  images: {
    // Disable image optimization for static export
    unoptimized: true,
  },

  // Append a trailing slash to all URLs for compatibility with static hosting
  trailingSlash: true,

  // Set a custom base path if required (uncomment and adjust as needed)
  // basePath: '/subdirectory',

  // React strict mode for catching issues during development
  reactStrictMode: true,
  
  // Adjust page extensions if you use custom ones (e.g., `.jsx`, `.ts`)
  pageExtensions: ["js", "jsx", "ts", "tsx"],
};

export default nextConfig;
