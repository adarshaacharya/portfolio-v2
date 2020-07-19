import { css } from 'styled-components';

export const sizes = {
  mobile: '480px',
  tablet: '768px',
  fablet: '1000px',
  desktop: '1200px',
};

const commonTheme = {
  shadow: '0px 10px 10px rgba(0, 0, 0, 0.2)',
  shadowSmall: '0px 5px 10px rgba(0, 0, 0, 0.05)',
  primaryFontFamily: '"Inter", sans-serif',
  secondaryFontFamily: '"Poppins", sans-serif',
  spacing: {
    sectionBottom: 'margin-bottom: 100px',
    sectionTop: 'margin-top: 100px',
    sectionTopBottom: css`
      margin-top: 100px;
      margin-bottom: 100px;
    `,
  },
  media: {
    mobile: `(max-width: ${sizes.mobile})`,
    tablet: `(max-width: ${sizes.tablet})`,
    fablet: `(max-width: ${sizes.fablet})`,
    desktop: `(max-width: ${sizes.desktop})`,
    minMobile: `(min-width: ${sizes.mobile})`,
    minTablet: `(min-width: ${sizes.tablet})`,
  },
  svgTransition : ''
};

export const lightTheme = {
  dark: false,
  bg: '#F7FAFC',
  primaryColor: '#2D85F4',
  secondaryColor: '#F8F8F8',
  accentColor: '#C7D0FF',
  
  primaryBlack: '#383838',
  primaryText: '#383838',
  blockQuote: '#fff9db',
  
  hrColor: '#eee',
  navBg: '#F7FAFC',
  navBorderBottom: 'none',
  ...commonTheme,
};

export const darkTheme = {
  dark: true,
  bg: '#10171D',
  primaryColor: '#2D85F4',
  secondaryColor: '#232323',
  accentColor: '#303030',
  primaryBlack: '#F8F8F8',
  elevation0: '#191919',
  primaryText: '#F8F8F8',
  blockQuote: '#232323',

  hrColor: '#303030',
  navBg: '#1b2938',
  navBorderBottom: '0.1px solid hsl(0, 0%, 22%)',
  ...commonTheme,
};
