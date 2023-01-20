/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "fmalmnis.up.railway.app"],
  },
  i18n: {
    locales: ["kk", "en", "ru"],
    defaultLocale: "kk",
  },
};

module.exports = nextConfig;
