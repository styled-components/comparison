import jss from 'jss';
import preset from 'jss-preset-default';
import 'normalize.css';

// Setup JSS with default preset
jss.setup(preset());

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

// Attach global styles
jss.createStyleSheet(styles, { named: false }).attach();
