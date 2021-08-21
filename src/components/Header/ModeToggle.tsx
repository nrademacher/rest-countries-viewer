import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from './icons';
import styles from './ModeToggle.module.scss';

export const ModeToggle = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    setTheme(document.documentElement.getAttribute(`data-theme`));
  }, []);

  function toggleTheme() {
    if (theme === `light`) {
      document.documentElement.setAttribute(`data-theme`, `dark`);
      setTheme(`dark`);
    } else {
      document.documentElement.setAttribute(`data-theme`, `light`);
      setTheme(`light`);
    }
  }

  function toggleThemeByKey(e: React.KeyboardEvent) {
    if (e.code === `Enter`) {
      toggleTheme();
    }
  }

  return (
    <span className={styles[`theme-switch`]}>
      <span
        tabIndex={0}
        role="button"
        className={styles[`theme-switch-icon`]}
        onClick={toggleTheme}
        onKeyUp={(e) => toggleThemeByKey(e)}
      >
        {theme === `light` ? <MoonIcon /> : <SunIcon />}
      </span>
      <span className={styles[`theme-switch-text`]}>
        {theme === `light` ? `Dark ` : `Light `}Mode
      </span>
    </span>
  );
};
