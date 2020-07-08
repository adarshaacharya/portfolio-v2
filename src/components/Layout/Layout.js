import React from 'react';
import PropTypes from 'prop-types';

import Footer from '@components/Footer';
import Header from '@components/Header';
import { LayoutWrapper } from './Layout.style';

import useDarkMode from '@hooks/use-dark-mode';
import ThemeToggleContext from '@context/ThemeToggleContext';
import GlobalStyles from '@src/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './Theme/theme';

const Layout = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <>
        <GlobalStyles />
        <ThemeToggleContext.Provider value={{ theme, toggleTheme }}>
          <Header />
        </ThemeToggleContext.Provider>

        <LayoutWrapper>
          <main className="container">{children}</main>
          <Footer />
        </LayoutWrapper>
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
