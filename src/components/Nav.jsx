import React from 'react';
import SearchBar from './SearchBar.jsx';
import styles from './Nav.module.css'
import {Link} from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav className={styles.container}>
      <Link to="/" className={styles.link}>
        <span className={styles.title}>Weather App</span>
      </Link>
      <Link to="/about" className={styles.link}>
        <span>About</span>
      </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Nav;
