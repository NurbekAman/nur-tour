import React from 'react';
import { hydrate } from 'react-dom';

hydrate(
  <div>
    First SSR7
  </div>,
  document.getElementById('app')
);