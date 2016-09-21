import React from 'react';
import useSheet from 'react-jss';

import Tweet from '../tweet';
import data from '../../../../shared/data/755481795206971392.json';

import 'normalize.css';

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

const App = ({ sheet: { classes } }) => (
  <div className={classes.container}>
    <Tweet data={data} />
  </div>
);

export default useSheet(App, styles);
