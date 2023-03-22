import React from 'react'
import styles from '../styles/movieCards.module.css';
import getStore from '../store';
import { addFavorite,removeFavorite } from '../actions';

function MovieCards ({ movie , isFavorite ,setState}) {
// console.log("moviecards")
    const store = getStore();

    // favoriteClickHandler
   const favoriteClickHandler = ()=>{
        //dispatch method use to change state

        store.dispatch(addFavorite(movie));//particular comp pass props
        setState.set_RE_Render(setState.re_Render?false:true);
    }

   const unFavoriteClickHandler = ()=>{
    store.dispatch(removeFavorite(movie));//particular comp pass props
    setState.set_RE_Render(setState.re_Render?false:true);
   }

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