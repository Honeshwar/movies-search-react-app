// import { createStore } from 'redux';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';//combineReducers

// console.log("combine Reducers",rootReducer);

//console.log action type before each dispatch
// const logger = function (obj){//obj={dispatch,getState}
//             return function(next){
//                 return function(action){
//                     console.log('action type = ',action.type);
//                     next(action);//not call than never an dispatch happen
//                 }
//             }
// }

//modifying middleware using arrow function,to write less code
// const logger = ({ dispatch, getState }) => (next) => (action) => {
//     //middleware code

//condition due to thunk ,thunk allow action creator to return an func, action=action Obj/func
//     if (typeof action !== 'function') {
//         console.log('action type = ', action.type);
//     }
//     next(action);//not call than never an dispatch happen
// }

// const thunk = ({dispatch,getState})=>(next)=>(action)=>{
//                 //middleware code
//               if(typeof action === 'function'){
//                 action(dispatch);
//                 return;//current dispatch execution stop here
//             }
//             next(action);

// }


const store = configureStore({
    reducer: rootReducer,
    middleware: [logger,thunk],//(getDefaultMiddleware) => {const arr = getDefaultMiddleware().concat(logger);console.log(arr);return arr;},
    //  enhancers:
    //preloadedState:
    //devTools"true=by default
});
console.log('store', store);

export { store };

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