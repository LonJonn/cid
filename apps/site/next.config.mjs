/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
    appDir: true,
  },
  webpack(config, { webpack }) {
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(
        new webpack.DefinePlugin({
          "env.public.EVENT_STAGE": JSON.stringify(process.env.EVENT_STAGE),
        })
      );
    }

    return config;
  },
};

export default config;
