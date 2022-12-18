/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "kk"],
  },
};

module.exports = nextConfig;
