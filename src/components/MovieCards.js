import React from 'react'
import styles from '../styles/movieCards.module.css';

function MovieCards({movie}) {
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
                    <input type='button' value='Favorite'></input>
                </div>
            </div>
        </li>
       
 </>
  )
}

export default MovieCards