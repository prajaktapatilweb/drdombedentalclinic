
export const fontFamily = [
    'Roboto, sans-serif',
  ].join(',');
  
  const headingLineHeight = 1.4;

const typography = {
    fontFamily,
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontSize: '1.5rem', // Default for small screens
      lineHeight: headingLineHeight,
      fontWeight: 700,
      '@media (min-width:600px)': {
        fontSize: '2rem', // Medium screens
      },
      '@media (min-width:960px)': {
        fontSize: '2rem', // Large screens
      },
    },
    h2: {
      fontSize: '1.75rem',
      lineHeight: headingLineHeight,
      fontWeight: 700,
      '@media (min-width:600px)': {
        fontSize: '2rem',
      },
      '@media (min-width:960px)': {
        fontSize: '2.5rem',
      },
    },
    h3: {
      fontSize: '1.5rem',
      lineHeight: headingLineHeight,
      fontWeight: 700,
      '@media (min-width:600px)': {
        fontSize: '1.75rem',
      },
      '@media (min-width:960px)': {
        fontSize: '2rem',
      },
    },
    // Repeat for h4, h5, and h6
  
  h4: {
    fontSize: '21px',
    lineHeight: headingLineHeight,
    fontWeight: 500,
    '@media (min-width:600px)': {
      fontSize: '20px',
    },
    '@media (min-width:960px)': {
      fontSize: '21px',
    },
  },
  // Repeat for h4, h5, and h6

h5: {
    fontSize: '18px',
    lineHeight: headingLineHeight,
    fontWeight: 500,
    '@media (min-width:600px)': {
      fontSize: '18px',
    },
    '@media (min-width:960px)': {
      fontSize: '18px',
    },
  },
  // Repeat for h4, h5, and h6
};
  
  export default typography;
  