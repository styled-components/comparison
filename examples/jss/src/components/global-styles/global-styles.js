import React from 'react';
import injectSheet from 'react-jss';
import 'normalize.css';

// Global styles
const styles = {
  html: {
    color: '#292f33',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: 14,
    lineHeight: '1.3125',
  },
  a: {
    textDecoration: 'none',
    color: '#1da1f2',
  },
  svg: {
    fill: 'currentColor',
    height: '1.25em',
  },
  '@media screen and (min-width: 360px)': {
    html: {
      fontSize: 15,
    },
  },
  '@media screen and (min-width: 600px)': {
    html: {
      fontSize: 16,
    },
  },
};

const GlobalStyles = ({children}) => children;

export default injectSheet(styles, {named: false})(GlobalStyles);
