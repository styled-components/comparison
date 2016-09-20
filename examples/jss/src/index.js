import React from 'react';
import { render } from 'react-dom';
import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const globalStyles = {
  // Global styles
  html: {
    color: '#292f33',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: '14px',
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
      fontSize: '15px',
    },
  },
  '@media screen and (min-width: 600px)': {
    html: {
      fontSize: '16px',
    },
  },
};

// Attach global styles
jss.createStyleSheet(globalStyles, { named: false }).attach();

import App from './components/app';

render(<App />, document.getElementById('example-root'));
