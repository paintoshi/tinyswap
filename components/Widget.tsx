import { LiFiWidget, WidgetConfig } from '@lifi/widget'
import styles from '@/styles/Home.module.css'

const widgetConfig: WidgetConfig = {
  containerStyle: {
    border: '2px solid #0054bd70',
    boxShadow: '0px 0px 101px 0px rgb(36 5 255 / 28%)',
    borderRadius: '16px',
  },
  integrator: 'tinyswap',
  fee: 0.001,
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
  },
  hiddenUI: ['appearance'],
  variant: 'expandable',
  subvariant: 'split',
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
};

export const Widget = () => {
  return (
    <div className={styles.widget}>
      <LiFiWidget integrator="TinySwap" config={widgetConfig} />
    </div>
  );
};