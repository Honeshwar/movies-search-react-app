import { ADD_MOVIES,ADD_FAVORITE,REMOVE_FAVORITE} from "../actions";

//if state pass undefined from store , so this assign to state
const initialStateValue = {//by default state,state tree object inside multiple states presents
    moviesList:[],
    favorites:[]
};


export default function movies (state = initialStateValue,action){// pass state that present in redux store
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
        case ADD_FAVORITE:
            return {
                ...state,
                favorites:[action.movie,...state.favorites]
            };
        case REMOVE_FAVORITE:
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
        default:
            return state;
           
    }
}