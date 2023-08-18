/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      "127.0.0.1",
      "fmalmnis.up.railway.app",
      "res.cloudinary.com",
    ],
  },
  i18n: {
    locales: ["kk", "en", "ru"],
    defaultLocale: "kk",
  },
};

module.exports = nextConfig;
