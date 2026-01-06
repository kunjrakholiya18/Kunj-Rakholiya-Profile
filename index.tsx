
import React from 'react';
import ReactDOM from 'react-dom/client';
// Fix for react-router-dom HashRouter export issue
import * as ReactRouterDOM from 'react-router-dom';
import App from './App';

const { HashRouter } = ReactRouterDOM as any;

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);