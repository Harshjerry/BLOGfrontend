import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { ContextProvider } from "./context/context.js";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter> 
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
