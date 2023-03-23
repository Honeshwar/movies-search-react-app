import { ADD_MOVIES,ADD_TO_FAVORITE,REMOVE_FROM_FAVORITE,FAVORITE_TAB} from "../actions";

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
        case ADD_MOVIES:
            return {
                ...state,
                moviesList:action.movies
            };//already exist key update react
            // break;
        case ADD_TO_FAVORITE:
            return {
                ...state,
                favorites:[action.movie,...state.favorites]
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
        default:
            return state;
           
    }
}


const initialSearchReducerStateValue = {//by default state,state tree object inside multiple states presents
   result:[]
};


 function searchReducer (state = initialSearchReducerStateValue,action){// pass state that present in redux store
   return state;
}

//root reducer
const initialRootReducerStateValue={
    movies:initialMoviesReducerStateValue,
    search:initialSearchReducerStateValue

}

export default function rootReducer(state= initialRootReducerStateValue,action){
    return{
        movies:movies(state.movies,action),
        search:searchReducer(state.search,action),
    }
}