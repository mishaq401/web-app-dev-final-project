import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './COMPONENTS/App';
import ContextsProvider from './CONTEXTS/ContextsProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ContextsProvider>

      <App />

    </ContextsProvider>

  </React.StrictMode>
);

