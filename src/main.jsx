// @ts-check
import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18+
import App from './App';

// Ensure the root element exists
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Create root for React 18+
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found!");
}