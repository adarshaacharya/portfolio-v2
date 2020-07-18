import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const _THEME_ = 'adarsha:theme';
  const storedTheme =
    typeof window !== 'undefined' && window.localStorage.getItem(_THEME_);

    const [theme, setTheme] = useState(storedTheme);

  const toggleTheme = () =>
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(_THEME_, theme);
    }
  }, [theme]);

  return [theme, toggleTheme];
};

export default useDarkMode;
