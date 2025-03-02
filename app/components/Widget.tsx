'use client';

import { LiFiWidget, WidgetConfig, WidgetSkeleton } from '@lifi/widget'
import styles from '@/app/page.module.css'
import { ClientOnly } from '@/app/components/ClientOnly'

const widgetConfig = {
  integrator: 'tinyswap',
  fee: 0.005,
  appearance: 'dark',
  theme: {
    palette: {
      primary: { main: '#3437ba' },
      secondary: { main: '#348fba' },
      background: { 
        paper: '#141434', // bg color for cards
        default: '#0a0a18', // bg color container
      },
      grey: {
        300: '#000000', // border light theme
        800: '#2b2b63', // border dark theme
      },
    },
    shape: {
      borderRadius: 16,
      borderRadiusSecondary: 8,
    },
    typography: {
      fontFamily: 'Manrope, sans-serif',
    },
    container: {
      border: '2px solid #0054bd70',
      boxShadow: '0px 0px 101px 0px rgb(36 5 255 / 28%)',
      borderRadius: '16px',
    },
    /** Not needed for now
    sdkConfig: {
      rpcUrls: {
        [ChainId.FTM]: ['https://rpcapi.fantom.network/'],
      },
    },
    */
  },
  hiddenUI: ['appearance', 'drawerCloseButton', 'integratorStepDetails', 'poweredBy'],
  variant: 'wide',
  subvariant: 'split',
  slippage: 0.01, // Default is 0.005

  /**
  tokens: {
    // Featured tokens will appear on top of the list
    featured: [
      {
        address: '0x0000000000000000000000000000000000000000',
        symbol: 'FTM',
        decimals: 18,
        chainId: 250,
        name: 'FTM',
        logoURI: 'https://github.com/paintoshi/tinyswap/blob/main/public/FTM.png?raw=true',
      },
      {
        address: '0x2F733095B80A04b38b0D10cC884524a3d09b836a',
        symbol: 'USDC.e',
        decimals: 6,
        chainId: 250,
        name: 'Wormhole: USDC.e Token',
        logoURI:
          'https://github.com/paintoshi/tinyswap/blob/main/public/USDCe.png?raw=true',
      },
    ],
  },
  */
} as Partial<WidgetConfig>;

export const Widget = () => {
  return (
    <div className={styles.widget}>
      <ClientOnly fallback={<WidgetSkeleton config={widgetConfig} />}>
        <LiFiWidget integrator="TinySwap" config={widgetConfig} />
      </ClientOnly>
    </div>
  );
};