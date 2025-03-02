'use client';

import { LiFiWidget, WidgetConfig, WidgetSkeleton } from '@lifi/widget';
import styles from '@/app/page.module.css';
import { ClientOnly } from '@/app/components/ClientOnly';
import { useEffect, useState } from 'react';

export const Widget = ({ fee }: { fee: number | undefined }) => {
  const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(true);
    
    useEffect(() => {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth < 701);
      };
      
      // Initial check
      checkIfMobile();
      
      // Add event listener for window resize
      window.addEventListener('resize', checkIfMobile);
      
      // Cleanup
      return () => window.removeEventListener('resize', checkIfMobile);
    }, []);
    
    return isMobile;
  };
  
  const isMobile = useIsMobile();
  
  const widgetConfig = {
    integrator: 'tinyswap',
    fee: fee,
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
        border: isMobile ? 'none' : '2px solid #0054bd70',
        boxShadow: '0px 0px 101px 0px rgb(36 5 255 / 28%)',
        // boxShadow: isMobile ? 'none' : '0px 0px 101px 0px rgb(36 5 255 / 28%)',
        borderRadius: isMobile ? 'none' : '16px',
        display: isMobile ? 'flex' : 'block',
        height: isMobile ? '100%' : 'unset',
      },
      header: {
        position: isMobile ? 'fixed' : 'unset',
        top: isMobile ? 42 : 'unset', /** Matched with the navbar height */
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
    variant: isMobile ? 'compact' : 'wide',
    subvariant: 'split',
    slippage: 0.01, // Default is 0.005
  
    tokens: {
      // Featured tokens will appear on top of the list
      featured: [
        {
          address: '0x0000000000000000000000000000000000000000',
          symbol: 'S',
          decimals: 18,
          chainId: 146,
          name: 'Sonic',
          logoURI: 'https://github.com/paintoshi/tinyswap/blob/main/public/sonic.png?raw=true',
        },
      ],
    },
  } as Partial<WidgetConfig>;
  
  return (
    <div className={styles.widget}>
      <ClientOnly fallback={<WidgetSkeleton config={widgetConfig} />}>
        <LiFiWidget integrator="TinySwap" config={widgetConfig} />
      </ClientOnly>
    </div>
  );
};