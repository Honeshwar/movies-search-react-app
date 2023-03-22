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