import React from 'react'
import styles from '../styles/navbar.module.css'
function Navbar() {
  return (
    <div className={styles.navbar}>
     
            <input className={styles.searchInput} type='text' placeholder='search movies here....' required='true'></input>
            <button className={styles.searchBtn} type='submit'>Search</button>
       
    </div>
  )
}

export default Navbar