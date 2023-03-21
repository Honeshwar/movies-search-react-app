
import '../styles/App.css';
import MovieCards from './MovieCards';
import Navbar from './Navbar';
import styles from '../styles/movieCards.module.css';
import {data} from '../data';//array

function App() {
  return (
    <div className="App">
      <Navbar/>  
      <div className={styles.movies}>
          <div className={styles.moviesRoute}>
            <button type='button'>Movies</button>
            <button type='button'>Favorites</button>
          </div>

          <div className={styles.movieList}>
              {data.map((movie,index)=>(
                <MovieCards movie={movie} key={`movie-${index}`}/>
              ))}
          </div>
      </div>
    </div>
  );
}

export default App;
