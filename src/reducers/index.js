import { ADD_MOVIES } from "../actions";

//if state pass undefined from store , so this assign to state
const initialStateValue = {//by default state,state tree object inside multiple states presents
    moviesList:[],
    favorites:[]
};


export default function movies (state = initialStateValue,action){// pass state that present in redux store
    if(action.type === ADD_MOVIES){
        return {
            ...state,
            moviesList:action.movies
        };//already exist key update react
    }
    return state;
   
}