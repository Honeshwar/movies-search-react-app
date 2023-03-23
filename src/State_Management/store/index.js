// import { createStore } from 'redux';
import {configureStore,applyMiddleware} from '@reduxjs/toolkit';
import rootReducer from '../reducers';//combineReducers

// console.log("combine Reducers",rootReducer);

//console.log action type before each dispatch
const logger = function (obj){//obj={dispatch,getState}
            return function(next){
                return function(action){
                    console.log('action type = ',action.type);
                    next(action);//not call than never an dispatch happen
                }
            }
}

const store = configureStore({
    reducer:rootReducer ,
    middleware:[logger],/// (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    //  enhancers:
    //preloadedState:
    //devTools"truen=by default
    });
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