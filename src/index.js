import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {router} from './routes/MainRoutes.js'
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App/>
    </RouterProvider>
  </React.StrictMode>
);


