import React from 'react';
import { render } from 'react-dom';
import { StyleRoot } from 'radium';

import App from './components/app';

render(
  <StyleRoot>
    <App />
  </StyleRoot>,
	document.getElementById('example-root')
);
