import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { ContextProvider } from "./context/context.js";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter> 
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
