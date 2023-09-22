/** @type {import('next').NextConfig} */
/** Only needed if hosted on github pages URL: https://user.github.io/tinyswap/
 * const repo = 'tinyswap'
 * const assetPrefix = `/${repo}/`
 * const basePath = `/${repo}`
*/

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['@lifi/widget', '@lifi/wallet-management'],
  output: 'export',
  // assetPrefix: assetPrefix,
  // basePath: basePath
};

module.exports = nextConfig;