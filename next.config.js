/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  
  images:{
    domains: ['lh3.googleusercontent.com'],
    unoptimized: true,
    remotePatterns:[
      {
       protocol:"https",
       hostname:"*"
      },
      {
       protocol:"http",
       hostname:"*"
      },
    ]
  }
}

module.exports = nextConfig
