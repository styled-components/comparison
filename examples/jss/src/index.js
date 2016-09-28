import React from 'react';
import { render } from 'react-dom';

import GlobalStyles from './components/global-styles';
import App from './components/app';

render(<GlobalStyles><App /></GlobalStyles>, document.getElementById('example-root'));
