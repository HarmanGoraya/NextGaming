/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ["media.rawg.io"]
  },

  publicRuntimeConfig:{
    REACT_APP_KEY: 'a10b14822f884880bd810391a618adf4'
  }
}

module.exports = nextConfig
