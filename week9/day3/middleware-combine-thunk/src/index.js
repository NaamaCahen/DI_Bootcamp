import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reportWebVitals from './reportWebVitals';
import {rootReducer} from './redux/reducers.js';

import {myLogger} from './redux/logger.js'


const store = createStore(rootReducer, applyMiddleware(thunk,myLogger));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
      <App />
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
