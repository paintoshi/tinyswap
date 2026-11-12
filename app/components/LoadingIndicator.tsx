import styles from './LoadingIndicator.module.css';

export const LoadingIndicator = () => {
  return (
    <div className={styles.placeholder} role="status" aria-live="polite">
      <span className={styles.spinner} aria-hidden="true" />
      <span className={styles.label}>Loading</span>
    </div>
  );
};
