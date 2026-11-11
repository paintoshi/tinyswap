import { createRequire } from 'node:module';

/** @type {import('next').NextConfig} */
/** Only needed if hosted on github pages URL: https://user.github.io/tinyswap/
 * Also uncomment the assetPrefix and basePath below
 * const repo = 'tinyswap'
 * const assetPrefix = `/${repo}/`
 * const basePath = `/${repo}`
*/

const require = createRequire(import.meta.url);

const nextConfig = {
  agentRules: false,
  reactStrictMode: false,
  // transpilePackages: ['@lifi/widget', '@lifi/wallet-management'],
  output: 'export',
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    // config.externals.push('pino-pretty');
    // The package's node export pulls Coinbase CDP and optional @x402 peers.
    // The widget runs in the browser, so use the browser build.
    config.resolve.alias = {
      ...config.resolve.alias,
      '@base-org/account$': require.resolve('@base-org/account/browser'),
    };
    return config;
  },
  // assetPrefix: assetPrefix,
  // basePath: basePath
};

export default nextConfig;
