import Footer from '@components/Footer';
import ThemeToggleContext from '@context/ThemeToggleContext';
import useDarkMode from '@hooks/use-dark-mode';
import Navbar from '@src/components/Navbar';
import GlobalStyles from '@src/styles/GlobalStyles';
import PropTypes from 'prop-types';
import React from 'react';
import { setConfiguration } from 'react-grid-system';
import { ThemeProvider } from 'styled-components';
import { LayoutWrapper } from './Layout.style';
import { darkTheme, lightTheme } from './Theme/theme';

setConfiguration({ breakpoints: [576, 769, 992, 1200] }); // sm, md, lg, xl

const Layout = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <>
        <GlobalStyles />
        <ThemeToggleContext.Provider value={{ theme, toggleTheme }}>
          <Navbar />
        </ThemeToggleContext.Provider>

        <LayoutWrapper>{children}</LayoutWrapper>
        <Footer />
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
