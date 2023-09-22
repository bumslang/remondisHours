import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import August from './August';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <August />
  </StrictMode>
);
