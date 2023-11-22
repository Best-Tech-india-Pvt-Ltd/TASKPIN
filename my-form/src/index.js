import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { AppContextProvider } from './component/AppContext';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppContextProvider> 
      <App />
    </AppContextProvider>
  </React.StrictMode>,
);

reportWebVitals();
