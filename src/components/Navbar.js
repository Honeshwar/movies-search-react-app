import React, { useContext, useState } from 'react'
import {useDispatch,ReactReduxContext, connect, useSelector} from 'react-redux';
import { addMovieFromSearchResultToMoviesList, handleSearchMovie } from '../State_Management/actions';
import styles from "../styles/navbar.module.css"

function Navbar(props) {
const [searchText, setSearchText] = useState('');
// const store = useContext(ReactReduxContext).store;
// const {result:movie,isMovieInSearchResult} = props.search;

// const {store} = props;
console.log("store in navbar",props);
const state = useSelector((state)=>state);
console.log("state after useSelector/ after any change in Redux Store",state);

const {result:movie,isMovieInSearchResult} = state.search;

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


  props.dispatch(handleSearchMovie(searchText));
}


const addToMoviesClickHandler = ()=>{
  props.dispatch(addMovieFromSearchResultToMoviesList(movie));
}


  return(<>
    <div className={styles.navbar}>
    <h1 style={{color:"white",position:"fixed",top:'-15',left:20}}>MOVIES HUNT</h1>
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

function mapStateToProps(state){
  return {
    search:state.search,
  }
}
function mapDispatchToProps(dispatch){
  return {
    dispatch
  }
}

// const connectedAppComponent = connect(mapStateToProps)(App)
const connectedNavbarComponent = connect(mapStateToProps,mapDispatchToProps)//return HOC
(Navbar);//return wrapper component(use so an comp pass props to app component ma)

export default connectedNavbarComponent;
// export default Navbar