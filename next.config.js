/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  experimental: {
    // This enables the new Rust-based compiler (Turbopack)
    turbopackFileSystemCacheForDev: true,
    // This enables the new Rust-based bundler (Turbopack)
    turbopackFileSystemCacheForBuild: true,
    webpack5: true,
  },
  env: {
    GTM_ID: process.env.GTM_ID,
  },
};

module.exports = nextConfig;
