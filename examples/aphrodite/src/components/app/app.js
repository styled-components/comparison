import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Tweet from '../tweet';
import data from '../../../../shared/data/755481795206971392.json';

import 'normalize.css';
import '../../global.css';

const styles = StyleSheet.create({
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
});

const App = () => (
  <div className={css(styles.container)}>
    <Tweet data={data} />
  </div>
);

export default App;
