import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Get the root element
const container = document.getElementById('root');

if (!container) {
  throw new Error("Root element not found");
}

// Create a root
const root = createRoot(container);

// Render the app
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// error handling for production
if (import.meta.env.PROD) {
  console.log = () => {};
  console.error = () => {};
  console.warn = () => {};
}
