/*
{
    type:"ADD_MOVIES",
    movies : [],
},
{
    type:"REMOVE_MOVIES",
    movies : [],
}
*/

//action types,help in consistence of string
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";
export const FAVORITE_TAB = "FAVORITE_TAB";
export const ADD_MOVIES_TO_SEARCH_RESULT = "ADD_MOVIES_TO_SEARCH_RESULT";

//action creators,create an func create as many action creator we want
export function addMovies(movies) {
    return {
        type:"ADD_MOVIES",
        movies,
    }
}

export function addFavorite(movie) {
    return {
        type:"ADD_TO_FAVORITE",
        movie,
    }
}

export function removeFavorite(movie) {
    return {
        type:"REMOVE_FROM_FAVORITE",
        movie,
    }
}

export function setFavoriteTab(value) {//boolean
    return {
        type:"FAVORITE_TAB",
        isFavoriteTab:value,
    }
}

export  function handleSearchMovie(movieName) {//boolean
    const url = `https://www.omdbapi.com/?apikey=37df889a&t=${movieName}`;

    return function (dispatch){//thunk mw call this return func and pass dispatch func
    //make action creator  synchronous
        fetch(url)
        .then((response)=> response.json())//json convert
        .then((movie)=>{
            console.log("Fetch movie from Api ",movie);
            dispatch({
                type:"ADD_MOVIES_TO_SEARCH_RESULT",
                movie:movie,
            })
          
        
        });

    }
    //   return{
    //             type:"ADD_MOVIES_TO_SEARCH_RESULT",
    //             movie:movie,
    //         }
        
}
