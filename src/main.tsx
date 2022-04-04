import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

import { Providers } from './Providers';
import Helmet from './Helmet/Helmet';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Providers>
      <Helmet />
      <App />
    </Providers>
  </React.StrictMode>,
);
