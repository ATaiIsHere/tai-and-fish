import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import TopBlock from './component/TopBlock'
import MidBlock from './component/MidBlock'

ReactDOM.render(
  <React.StrictMode>
    <TopBlock />
    <MidBlock />
    <TopBlock />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
