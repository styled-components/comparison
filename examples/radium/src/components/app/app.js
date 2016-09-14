import React from 'react';
import radium from 'radium';

import Tweet from '../tweet';
import data from '../../../../shared/data/755481795206971392.json';

import 'normalize.css';
import '../../global.css';

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
    <Tweet data={data} />
  </div>
);

export default radium(App);
