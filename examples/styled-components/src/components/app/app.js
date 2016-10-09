import React from 'react';
import styled, { injectGlobal } from 'styled-components';

import Tweet from '../tweet';
import data from '../../../../shared/data/755481795206971392.json';

import 'normalize.css';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  html {
    color: #292f33;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.3125;
  }

  a {
    text-decoration: none;
  }

  svg {
    fill: currentColor;
    height: 1.25em;
  }

  @media screen and (min-width: 360px) {
    html {
      font-size: 15px;
    }
  }

  @media screen and (min-width: 600px) {
    html {
      font-size: 16px;
    }
  }
`;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: 360px) {
    max-width: 400px;
  }

  @media screen and (min-width: 600px) {
    max-width: 600px;
  }
`;

const App = () => (
  <Container>
    <Tweet data={data} />
  </Container>
);

export default App;
