import ReactDom from 'react-dom';
import './index.scss';
import App from './components/App';
import React from 'react';

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
