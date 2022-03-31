import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

import { Providers } from './Providers';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
);
