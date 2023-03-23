
import '../styles/App.css';
import MovieCards from './MovieCards';
import Navbar from './Navbar';
import styles from '../styles/movieCards.module.css';
import { data } from '../data';//array
import { useContext, useEffect } from 'react';
import { ReactReduxContext, useSelector } from "react-redux";
import { addMovies, setFavoriteTab } from '../State_Management/actions';

function App() {
  // console.log("from access through ReactReduxContext",useContext(ReactReduxContext));
  const { store } = useContext(ReactReduxContext);//{store:{},subscription:{},getSeverState:}//props;
    useEffect(() => {
    //subscribe
    // store.subscribe(() => {
    //   console.log("UPDATED");
    //   console.log('state at subscribe', store.getState());
    //   set_RE_Render(true);
    //   // console.log("UPDATED2");
    // });


    //api call to get data of movie
    const response = data;
    //dispatch action that store this data to redux store
    const a = store.dispatch(addMovies(response));
    console.log('dispatch return ', a);
    console.log('state', store.getState());


  }, [store])
 

  //subscribe specific part + extract that part
  const state = useSelector((state)=>state);

  // const { moviesList: movies, favorites: favoriteMoviesList, isFavoriteTab } = store.getState();// return {moviesList:[],favorites:[]}
  const { moviesList: movies, favorites: favoriteMoviesList, isFavoriteTab } = state;
  const displayMovies = isFavoriteTab ? favoriteMoviesList : movies;
  // console.log("state before return",store.getState());

  // create this func here because so at once create not as may time as may movie card comp
  function isFavorite(movie) {
    const index = favoriteMoviesList.indexOf(movie);

    if (index !== -1) {
      return true;//found movie in favoriteMoviesList
    }
    return false;//not found
  }

  // favoriteTabHandler
  const favoriteTabHandler = (favoriteTab) => {
    if (favoriteTab === isFavoriteTab) { return };
    store.dispatch(setFavoriteTab(favoriteTab));//store dispatch the action and pass to reducer

  }
  return (

    <div className="App">
      <Navbar />
      <div className={styles.movies}>
        <div className={styles.tabs}>
          <button className={`moviesTab  ${isFavoriteTab ? '' : 'activeTab'}`} type='button' onClick={() => { favoriteTabHandler(false); }}>Movies</button>
          <button className={`favoriteTab  ${isFavoriteTab ? 'activeTab' : ''}`} type='button' onClick={() => { favoriteTabHandler(true); }}>Favorites</button>
        </div>

        <div className={styles.movieList}>
          {displayMovies.map((movie, index) => (
            <MovieCards
              movie={movie}
              key={`movie-${index}`}
              isFavorite={isFavorite(movie)}
              store={store}
            />
          ))}

          {displayMovies.length === 0 && <div>No favorite movies added yet...</div>}
        </div>
      </div>
    </div>

  );
}

export default App;
