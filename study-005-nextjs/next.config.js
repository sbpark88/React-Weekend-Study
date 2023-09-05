/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePath: [path.join(__dirname, "style")],
    prependData: `@import 'styles/_variables.scss';`,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
