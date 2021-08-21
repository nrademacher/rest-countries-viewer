import styles from './Header.module.scss';
import { ModeToggle } from './ModeToggle';

export const Header = () => (
  <header className={styles.header}>
    <h1>Where in the world?</h1>
    <ModeToggle />
  </header>
);
