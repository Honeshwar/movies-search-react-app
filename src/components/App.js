
import '../styles/App.css';
import MovieCards from './MovieCards';
import Navbar from './Navbar';
import styles from '../styles/movieCards.module.css';
import {data} from '../data';//array
import { useEffect, useState } from 'react';

function App(props) {
  const {store} = props;
  const [re_Render, set_RE_Render] = useState(false);

  useEffect(() => {
    //subscribe
    store.subscribe(()=>{
      console.log("UPDATED");
      set_RE_Render(true)

    });
    //api call to get data of movie
    const response=data;
    //dispatch action that store this data to redux store
    store.dispatch({
      type:"ADD_MOVIES",
      movies:response,
    });

    console.log('state',store.getState());

  
  }, [])
  
  const data1=store.getState();
  return (
    <div className="App">
      <Navbar/>  
      <div className={styles.movies}>
          <div className={styles.moviesRoute}>
            <button type='button'>Movies</button>
            <button type='button'>Favorites</button>
          </div>

          <div className={styles.movieList}>
              {data1.map((movie,index)=>(
                <MovieCards movie={movie} key={`movie-${index}`}/>
              ))}
          </div>
      </div>
    </div>
  );
}

export default App;
