import { useCallback, useEffect, useState } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = useCallback(() => {
    if (theme === 'light') {
      localStorage.setItem('aadarsha:theme', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('aadarsha:theme', 'light');
      setTheme('light');
    }
  }, [theme]);

  // runs on initial render
  useEffect(() => {
    const localTheme = localStorage.getItem('aadarsha:theme');

    // if theme exists
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return [theme, toggleTheme];
};

export default useDarkMode;
