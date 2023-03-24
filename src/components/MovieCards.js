import React from 'react'
import styles from '../styles/movieCards.module.css';
import { addToFavorite,removeFromFavorite } from '../State_Management/actions';

function MovieCards ({ movie , isFavorite ,store}) {

    // favoriteClickHandler
   const favoriteClickHandler = ()=>{
        //dispatch method use to change state
        const dispatchedActionObject = store.dispatch(addToFavorite(movie));//particular comp pass props
        // console.log("dispatched Action Object ", dispatchedActionObject);
    }

   const unFavoriteClickHandler = ()=>{
    const dispatchedActionObject = store.dispatch(removeFromFavorite(movie));//particular comp pass props
    // console.log("dispatched Action Object ", dispatchedActionObject);
   }

   //making two func as one,()=>{ClickHandler(true)//call func.} in onCLick
   const ClickHandler = (isFavoriteClick)=>{
    if(isFavoriteClick){
        //dispatch method use to change state
        const dispatchedActionObject =  store.dispatch(addToFavorite(movie));//particular comp pass props
        // console.log("dispatched Action Object ", dispatchedActionObject);
        return;
    }
    const dispatchedActionObject = store.dispatch(removeFromFavorite(movie));//particular comp pass props
    // console.log("dispatched Action Object ", dispatchedActionObject);
   
   }
//    console.log("movie in movie card ",movie)
  return (
   <>
  
        <li className={styles.movieBox} >
            <div className={styles.movieImage}>
                <img src={movie.Poster} alt={movie.Title}></img>
            </div>
            <div className={styles.movieDetails}>
                <h3>{movie.Title}</h3>
                <p>{movie.Plot}</p>
                <div className={styles.movieRatingFavorite}>
                    <span>{movie.Ratings[0].Value}</span>
                    {isFavorite?
                    <input className={styles.unFavorite} type='button' value='UnFavorite' onClick={unFavoriteClickHandler}></input>
                    :
                    <input className={styles.favorite} type='button' value='Favorite' onClick={favoriteClickHandler}></input>
                    }
                </div>
            </div>
        </li>
       
 </>
  )
}

export default MovieCards