import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Main } from './pages/Main/Main';

import './styles/reset.scss'
import './styles/common.scss'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);

