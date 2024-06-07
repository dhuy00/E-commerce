import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import store from './store/index';
import { Toaster } from 'react-hot-toast'
const App = lazy(() => import('./App'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense>
        <App />
      <Toaster 
        toastOptions={{
          duration: 2000,
      }}/>
      </Suspense>
    </Provider>
  </BrowserRouter>
);

