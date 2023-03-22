
import '../styles/App.css';
import MovieCards from './MovieCards';
import Navbar from './Navbar';
import styles from '../styles/movieCards.module.css';
import {data} from '../data';//array
import { useContext, useEffect, useState } from 'react';
import {ReactReduxContext} from 'react-redux';
import {addMovies} from '../actions'

function App(props) {
  // console.log("from access through ReactReduxContext",useContext(ReactReduxContext));
  const {store} = useContext(ReactReduxContext);//{store:{},subscription:{},getSeverState:}//props;
  const [re_Render, set_RE_Render] = useState(false);

  useEffect(() => {
    //subscribe
    store.subscribe(()=>{
      console.log("UPDATED");
      console.log('state at subscribe',store.getState());
      set_RE_Render(true);
      // console.log("UPDATED2");
    });
    //api call to get data of movie
    const response=data;
    //dispatch action that store this data to redux store
    store.dispatch(addMovies(response));

    console.log('state',store.getState());

  
  }, [])
  
  const {moviesList:movies,favorites:favoriteMoviesList} = store.getState();// return {moviesList:[],favorites:[]}
  // console.log("state before return",store.getState());

// create this func here because so at once create not as may time as may movie card comp
  function isFavorite(movie){
    const index = favoriteMoviesList.indexOf(movie);

    if(index !== -1){
      return true;//found movie in favoriteMoviesList
    }
    return false;//not found
  }
  return (
    
    <div className="App">
      <Navbar/>  
      <div className={styles.movies}>
          <div className={styles.moviesRoute}>
            <button type='button'>Movies</button>
            <button type='button'>Favorites</button>
          </div>

          <div className={styles.movieList}>
              {movies.map((movie,index)=>(
                <MovieCards
                 movie={movie} 
                 key={`movie-${index}`}
                 isFavorite={isFavorite(movie)}
                 setState={{set_RE_Render,re_Render}}
                 />
              ))}
          </div>
      </div>
    </div>

  );
}

export default App;
