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

//actions creator,create an func create as many action creator we want
export function addMovies(movies) {
    return {
        type:"ADD_MOVIES",
        movies,
    }
}