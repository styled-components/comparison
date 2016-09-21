import React from 'react';
import { render } from 'react-dom';
import jss from 'jss';
import preset from 'jss-preset-default';

import App from './components/app';
import globalStyles from './global-styles';

// Setup JSS with default preset
jss.setup(preset());
// Attach global styles
jss.createStyleSheet(globalStyles, { named: false }).attach();

render(<App />, document.getElementById('example-root'));
