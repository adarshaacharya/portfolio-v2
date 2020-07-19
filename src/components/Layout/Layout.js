import React from 'react';
import PropTypes from 'prop-types';

// theme logic
import useDarkMode from '@hooks/use-dark-mode';
import GlobalStyles from '@src/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import ThemeToggleContext from '@context/ThemeToggleContext';
import { darkTheme, lightTheme } from './Theme/theme';

// components
import Navbar from '@src/components/Navbar';
import Footer from '@components/Footer';

// styles
import { LayoutWrapper } from './Layout.style';


const Layout = ({ children }) => {
  const { theme, toggleTheme } = useDarkMode();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <>
        <GlobalStyles />
        <ThemeToggleContext.Provider value={{ theme, toggleTheme }}>
          <Navbar />
        </ThemeToggleContext.Provider>
        <LayoutWrapper>{children} </LayoutWrapper>
        <Footer />
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
