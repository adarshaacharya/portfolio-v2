import { useCallback, useEffect, useState } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = useCallback(() => {
    if (theme === 'light') {
      localStorage.setItem('ADARSHA_THEME', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('ADARSHA_THEME', 'light');
      setTheme('light');
    }
  }, [theme]);

  // runs on initial render
  useEffect(() => {
    const localTheme = localStorage.getItem('ADARSHA_THEME');

    // if theme exists
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return [theme, toggleTheme];
};

export default useDarkMode;
