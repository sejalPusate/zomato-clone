import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Ensure this is the correct path
import './Pages/index.css'; // Make sure the path matches exactly

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
