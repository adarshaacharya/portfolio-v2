import { css } from 'styled-components';

export const sizes = {
  mobile: '480px',
  tablet: '768px',
  fablet: '1000px',
  desktop: '1200px',
};

const commonTheme = {
  fontFamily: '"Lato", sans-serif',
  secondaryFontFamily: '"Inter", sans-serif',
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
};

export const lightTheme = {
  dark: false,
  bg: '#F8F8F8',
  primaryColor: '#6D83F2',
  secondaryColor: '#F8F8F8',
  accentColor: '#C7D0FF',
  primaryBlack: '#383838',
  primaryText: '#383838',
  blockQuote: '#fff9db',
  ...commonTheme,
};

export const darkTheme = {
  dark: true,
  bg: '#1A202C',
  primaryColor: '#6D83F2',
  secondaryColor: '#232323',
  accentColor: '#303030',
  primaryBlack: '#F8F8F8',
  elevation0: '#191919',
  primaryText: '#F8F8F8',
  blockQuote: '#232323',
  ...commonTheme,
};
