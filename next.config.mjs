/** @type {import('next').NextConfig} */
/** Only needed if hosted on github pages URL: https://user.github.io/tinyswap/
 * Also uncomment the assetPrefix and basePath below
 * const repo = 'tinyswap'
 * const assetPrefix = `/${repo}/`
 * const basePath = `/${repo}`
*/

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // transpilePackages: ['@lifi/widget', '@lifi/wallet-management'],
  output: 'export',
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    // config.externals.push('pino-pretty');
    return config;
  },
  // assetPrefix: assetPrefix,
  // basePath: basePath
};

export default nextConfig;
