// import { createStore } from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../reducers';

const store = configureStore({
    reducer:rootReducer
});
console.log('store',store);

export  {store};
export {rootReducer};
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