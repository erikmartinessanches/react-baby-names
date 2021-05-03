import React from 'react';
import ReactDOM from 'react-dom';
//Styles
import "normalize-css";
import "./css/styles.css";
//Components
import App from './App';
import {NamesProvider} from './providers/Names'

ReactDOM.render(
  <React.StrictMode>
    <NamesProvider>
      <App />
    </NamesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

