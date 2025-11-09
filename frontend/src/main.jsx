import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

//  Disable automatic scroll restore
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

//  Remove hash on refresh
if (window.location.hash) {
  window.history.replaceState(null, null, window.location.pathname);
}

//  Always scroll to top when page loads
window.scrollTo(0, 0);

createRoot(document.getElementById('root')).render(<App />);
