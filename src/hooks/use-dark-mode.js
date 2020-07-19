// import { useState, useEffect } from 'react';

// const useDarkMode = () => {
//   const _THEME_ = 'adarsha:theme';
//   const storedTheme =
//     typeof localStorage !== 'undefined' && localStorage.getItem(_THEME_);
//   const [theme, setTheme] = useState(storedTheme);

//   const toggleTheme = () => {
//     setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   useEffect(() => {
//     if (typeof localStorage !== 'undefined') {
//       localStorage.setItem(_THEME_, theme);
//     }
//   }, [theme]);

//   return [theme, toggleTheme];
// };

// export default useDarkMode;


import { useEffect, useState } from 'react'

export default () => {
  const _THEME_ = 'adarsha:theme';

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem(_THEME_, 'dark')
      setTheme('dark')
    } else {
      window.localStorage.setItem(_THEME_, 'light')
      setTheme('light')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [])

  return [
    theme,
    toggleTheme,
  ]
}