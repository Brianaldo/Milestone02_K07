import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { NavProvider } from './Context/NavContext';
import { KategoriProvider } from './Context/KategoriContext';
import { MainProvider } from './Context/MainProvider';

ReactDOM.render(
  <React.StrictMode>
    <MainProvider>
        <App />
    </MainProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
