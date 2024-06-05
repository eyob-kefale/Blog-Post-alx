import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './context/Context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
    
  </ContextProvider>
  </BrowserRouter>
);


reportWebVitals();
