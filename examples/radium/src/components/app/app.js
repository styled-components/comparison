import React from 'react';
import radium, { Style } from 'radium';

import Tweet from '../tweet';
import data from '../../../../shared/data/755481795206971392.json';

import 'normalize.css';

const globalStyles = {
  html: {
    color: '#292f33',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: 14,
    lineHeight: 1.3125,
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

const styles = {
  container: {
    margin: '0 auto',
    width: '100%',
    '@media screen and (min-width: 360px)': {
      maxWidth: '400px',
    },
    '@media screen and (min-width: 600px)': {
      maxWidth: '600px',
    },
  },
};

const App = () => (
  <div style={styles.container}>
    <Style rules={globalStyles} />
    <Tweet data={data} />
  </div>
);

export default radium(App);
