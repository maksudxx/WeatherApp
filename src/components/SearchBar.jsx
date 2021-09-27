import React, { useState } from "react";
import styles from './Searchbar.module.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('')
    }}className={styles.container}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
        className={styles.texto}
      />
      <input type="submit" value="Agregar" className={styles.boton}/>
    </form>
  );
}
