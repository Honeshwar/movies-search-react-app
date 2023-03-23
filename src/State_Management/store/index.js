// import { createStore } from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import movies from '../reducers';

const store = configureStore({reducer:movies});
console.log('store',store);

export  {store};

// const store = createStore(movies);

// console.log('Before state',store.getState());
// store.dispatch({type:"ADD_MOVIES",movies : [{name:"Danger"}]});//action pass here
// console.log('After state',store.getState());

//use Provider from react-redux library in main.js(index.js);





// import { useContext } from "react";
// import { ReactReduxContext } from "react-redux";

// export default function () {
//     return  useContext(ReactReduxContext).store;
// }