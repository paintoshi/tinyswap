import { LiFiWidget, WidgetConfig } from '@lifi/widget'
import styles from '@/styles/Home.module.css'

const widgetConfig: WidgetConfig = {
  containerStyle: {
    border: '2px solid #0054bd70',
    boxShadow: '0px 0px 101px 0px rgb(36 5 255 / 28%)',
    borderRadius: '16px',
  },
  integrator: 'TinySwap',
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
};

export const Widget = () => {
  return (
    <div className={styles.widget}>
      <LiFiWidget integrator="TinySwap" config={widgetConfig} />
    </div>
  );
};