import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer, { plusAction } from './store/counter';

const store = new createStore( rootReducer );

console.log( '### store', store.getState() );
store.subscribe(( () => console.log( '### store subscribe', store.getState() ) ));

store.dispatch( plusAction( 5 ) );

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
