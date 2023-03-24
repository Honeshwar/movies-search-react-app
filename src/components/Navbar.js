import React, { useContext, useState } from 'react'
import {useDispatch,ReactReduxContext} from 'react-redux';
import { addMovieFromSearchResultToMoviesList, handleSearchMovie } from '../State_Management/actions';
import styles from "../styles/navbar.module.css"

function Navbar(props) {
const [searchText, setSearchText] = useState('');
const store = useContext(ReactReduxContext).store;
const {result:movie,isMovieInSearchResult} = props.search;

const searchHandler = ()=>{
  //ui api part different so not api call
  // const r= handleSearchMovie(searchText);
  // r?.then((response)=> response.json())//json convert
  // .then((movie)=>{
  //     console.log("Fetch movie from Api ",movie);
  //     store.dispatch( {
  //       type:"ADD_MOVIES_TO_SEARCH_RESULT",
  //       movie:movie,
  //   });
  // });
  // const dispatchFunc = useDispatch();
  // console.log(dispatchFunc);


  store.dispatch(handleSearchMovie(searchText));
}


const addToMoviesClickHandler = ()=>{
  store.dispatch(addMovieFromSearchResultToMoviesList(movie));
}


  return(<>
    <div className={styles.navbar}>
     {/* value=000,in input display 000 */}
      <input onChange={(e)=>setSearchText(e.target.value)} value={searchText} className={styles.searchInput} type='text' placeholder='search movies here....' required></input>
      <button onClick={searchHandler} className={styles.searchBtn} type='submit'>Search</button>
    </div>
    
     {isMovieInSearchResult && 
      <div className={styles.movieSearchBox}>
          <div className={styles.movieBox} >
                <div className={styles.movieImage}>
                    <img src={movie.Poster} alt={movie.Title}></img>
                </div>
                <div className={styles.movieDetails}>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Plot}</p>
                    <div className={styles.addToMoviesBtnmm}>
                        <input className={styles.addToMoviesBtn} type='button' value='Add To Movies' onClick={addToMoviesClickHandler}></input>
                        
                    </div>
                </div>
          </div>
      </div>
     }
    </>

  )
}

export default Navbar