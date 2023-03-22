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
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

//action creators,create an func create as many action creator we want
export function addMovies(movies) {
    return {
        type:"ADD_MOVIES",
        movies,
    }
}

export function addFavorite(movie) {
    return {
        type:"ADD_FAVORITE",
        movie,
    }
}

export function removeFavorite(movie) {
    return {
        type:"REMOVE_FAVORITE",
        movie,
    }
}