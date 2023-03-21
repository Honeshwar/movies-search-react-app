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

//action type,help in consistence of string
export const ADD_MOVIES = "ADD_MOVIES";

//action creators,create an func create as many action creator we want
export function addMovies(movies) {
    return {
        type:"ADD_MOVIES",
        movies,
    }
}