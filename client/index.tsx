import * as React from 'react';
import { hydrate } from 'react-dom';

import App from 'client/app/index';

hydrate(
  <App />,
  document.getElementById('app')
);