/** @type {import('next').NextConfig} */

// Project is served from https://dvdivicay.github.io/Portfolio/
// so we need a basePath in production. In dev it stays at root.
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/Portfolio" : "";

const nextConfig = {
  output: "export", // static HTML export for GitHub Pages
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true, // ensures clean URLs work on static hosting
  images: {
    unoptimized: true, // no image optimization server on static hosting
  },
  // expose basePath to the client so we can prefix /public assets
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
