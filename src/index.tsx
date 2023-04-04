import React from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import ReactDOM from 'react-dom/client';

import { AppProvider } from 'store';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <AppProvider>
      <App />
    </AppProvider>
    </LocalizationProvider>
  </React.StrictMode>
);
