import { combineReducers} from '@reduxjs/toolkit';
import { ADD_TO_MOVIES,ADD_TO_FAVORITE,REMOVE_FROM_FAVORITE,FAVORITE_TAB,ADD_MOVIES_TO_SEARCH_RESULT,ADD_MOVIE_FROM_SEARCH_TO_MOVIESLIST} from "../actions";

//if state pass undefined from store , so this assign to state
const initialMoviesReducerStateValue = {//by default state,state tree object inside multiple states presents
    moviesList:[],
    favorites:[],
    isFavoriteTab:false
};


 function movies (state = initialMoviesReducerStateValue,action){// pass state that present in redux store
    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         moviesList:action.movies
    //     };//already exist key update react
    // }
    // return state;
   
    switch (action.type) {
        case ADD_TO_MOVIES:
            return {
                ...state,
                moviesList:action.movies
            };//already exist key update react
            // break;
        case ADD_TO_FAVORITE:
            return {
                ...state,
                favorites:[action.movie,...state.favorites],
            };
        case REMOVE_FROM_FAVORITE:
            // const index = state.favorites.indexOf(action.movie);
            // let favorites = [];
            // if(index !== -1){
            //     favorites = state.favorites.splice(index,1);
            //     // favorites = state.favorites.filter((value,indx)=>{return index !== indx;});
            // }else{
            //     favorites = state.favorites;
            // }

            const favorites = state.favorites.filter((value,indx)=>{return value.Title !== action.movie.Title;});
            return {
                ...state,
                favorites,
            };  
        case FAVORITE_TAB:
            return {
                ...state,
               isFavoriteTab:action.isFavoriteTab
            };
        case ADD_MOVIE_FROM_SEARCH_TO_MOVIESLIST:
            const index = state.moviesList.filter((m)=>m.imdbID === action.movie.imdbID);
            console.log("reducer",index,action);
            if(index.length !== 0){
                return state;   
            }
            return {
                ...state,
                moviesList:[action.movie,...state.moviesList]
            };    
        default:
            return state;
           
    }
}


const initialSearchReducerStateValue = {//by default state,state tree object inside multiple states presents
   result:{},
   isMovieInSearchResult:false,
};


 function searchReducer (state = initialSearchReducerStateValue,action){// pass state that present in redux store
    
    switch (action.type) {
        case ADD_MOVIES_TO_SEARCH_RESULT:
            return {
                ...state,
               result:action.movie,
               isMovieInSearchResult:true,
            };
        case ADD_MOVIE_FROM_SEARCH_TO_MOVIESLIST:
            return {
                ...state,
                result:action.movie,
                isMovieInSearchResult:false,//action.isMov..
            };
        default:
            return state;      
    }
}

// //root reducer
// const initialRootReducerStateValue={
//     movies:initialMoviesReducerStateValue,
//     search:initialSearchReducerStateValue

// }

// export default function rootReducer(state= initialRootReducerStateValue,action){
//     return{
//         movies:movies(state.movies,action),
//         search:searchReducer(state.search,action),
//     }
// }


//combineReducer function/method
export default combineReducers({
    movies:movies,
    search:searchReducer
});