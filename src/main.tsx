import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './store'
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </React.StrictMode>,
);
