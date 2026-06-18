import React from 'react';
import { createRoot } from 'react-dom/client'; // 1. Notice the updated import path
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // 2. Create the root node

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
