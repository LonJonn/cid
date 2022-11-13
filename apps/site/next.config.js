/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["@cid/server"],
    appDir: true,
  },
};
