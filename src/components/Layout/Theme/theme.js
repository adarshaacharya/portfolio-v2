export const sizes = {
  mobile: '480px',
  tablet: '768px',
  fablet: '1000px',
  desktop: '1200px',
};

const commonTheme = {
  primaryFontFamily: '"Inter", sans-serif',
  secondaryFontFamily: '"Poppins", sans-serif',
  IBMFontFamily: '"IBM Plex Mono", sans-serif',
  UbuntuFontFamily: '"Ubuntu", sans-seris',

  navShadow: '0px 7px 10px rgba(0, 0, 0, 0.06)',
  cardShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',

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

  // bg, theme, font
  bg: '#F7FAFC',
  primaryColor: '#2D85F4',
  secondaryColor: '#F8F8F8',

  // tags
  tagColor: '#CAE9F1',

  // headings, paragraph, anchor
  primaryText: '#383838',
  secondaryText: '#222',

  codeText: '#cbe9ff',

  // blog bloackquote bg
  blockQuote: '#E6E6E6',

  hrColor: 'rgba(0,0,0,0.2)',
  navBg: '#F7FAFC',
  navBorderBottom: 'none',

  // card
  cardBg: '#FAFAFA',

  // generic
  grayColor: '#666',

  //selection
  selectionColor: '#C1DAF3',

  ...commonTheme,
};

export const darkTheme = {
  dark: true,

  bg: '#10171D',
  primaryColor: '#2D85F4',
  secondaryColor: '#232323',  

  tagColor: '#303030',

  primaryText: '#F8F8F8',
  secondaryText: '#ffffffe0',

  codeText: '#1b2938',

  blockQuote: '#232323',

  hrColor: '#303030',
  navBg: '#1b2938',
  navBorderBottom: '0.1px solid hsl(0, 0%, 22%)',

  cardBg: '#1E262F',

  grayColor: '#888',

  selectionColor: '#84909e',
  ...commonTheme,
};
