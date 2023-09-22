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