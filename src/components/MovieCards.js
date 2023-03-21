import React from 'react'
import styles from '../styles/movieCards.module.css';
import {data} from '../data';//array
function MovieCards() {
  return (
    <div className={styles.movies}>
         <div className={styles.moviesRoute}>
          <button type='button'>Movies</button>
          <button type='button'>Favorites</button>
         </div>

         <div className={styles.movieList}>
            {data.map((movie)=>(
                <li className={styles.movieBox} key={movie.Title}>
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
            ))}
         </div>
    </div>
  )
}

export default MovieCards