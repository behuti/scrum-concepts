import ThemeToggle from './ThemeToggle';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <h1 className={styles.title}>Scrum<span className={styles.accentDot}>.</span></h1>
          <span className={styles.sub}>Reference Guide</span>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}