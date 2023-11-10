import * as React from 'react';
// eslint-disable-next-line react/no-deprecated
import { render } from 'react-dom';

import App from './app';

const rootElement = document.getElementById('root');
render(<App />, rootElement);