import React from 'react';
import injectSheet from 'react-jss';

import Tweet from '../tweet';
import data from '../../../../shared/data/755481795206971392.json';

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

const App = ({ classes, children }) => (
  <div className={classes.container}>
    <Tweet data={data} />
  </div>
);

export default injectSheet(styles)(App);
