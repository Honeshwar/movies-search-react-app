import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createStore } from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import './styles/index.css';
import App from './components/App';
import movies from './reducers';

// const store = createStore(movies);
const store = configureStore({reducer:movies});
console.log('store',store);

// console.log('Before state',store.getState());
// store.dispatch({type:"ADD_MOVIES",movies : [{name:"Danger"}]});//action pass here
// console.log('After state',store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/*optimal way than props passing,avoid props drilling,directly use any components */}
    <App store={store}/>
    </Provider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

