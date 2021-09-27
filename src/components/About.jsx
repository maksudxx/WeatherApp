import styles from "./About.module.css";
export default function About() {
  return (
    <div>
      <h2  className={styles.title}><u>Weather App</u></h2>
      <p className={styles.parrafo}>
        SPA desarrollada con React en el cursado del bootcamp de{" "}
        <a
          href="http://www.soyhenry.com"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          {" "}
          Soy Henry
        </a>{" "}
        por Facundo Maksud, esta app muestra los climas de las ciudades que son
        consumida desde la api de{" "}
        <a
          className={styles.link}
          href="https://api.openweathermap.org/"
          target="_blank"
          rel="noreferrer"
        >
          Open Weather
        </a>
      </p>

      <h4 className={styles.title}><u>Contacto</u> </h4>
      <div className={styles.contacto}>
        <a
          href="https://www.linkedin.com/in/facundo-maksud/"
          target="_blank"
          rel="noreferrer"
          className={styles.a}
        >
          Linkedin
        </a>
      </div>
      <div className={styles.contacto}>
        <a
          href="https://github.com/maksudxx"
          target="_blank"
          rel="noreferrer"
          className={styles.a}
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
