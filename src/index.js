import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CardContextProvider from './Context/CardContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CardContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CardContextProvider>
  </React.StrictMode>
);

