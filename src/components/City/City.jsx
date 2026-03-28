import styles from './City.module.css';

export default function City({city}){
    if (!city) return null;
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>{city.name}</h2>
            <div className={styles.info}>
                <div className={styles.infoItem}>
                    <span className={styles.label}>Temperatura</span>
                    <span className={styles.value}>{city.temp} ºC</span>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.label}>Clima</span>
                    <span className={styles.value}>{city.weather}</span>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.label}>Viento</span>
                    <span className={styles.value}>{city.wind} km/h</span>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.label}>Nubosidad</span>
                    <span className={styles.value}>{city.clouds}%</span>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.label}>Latitud</span>
                    <span className={styles.value}>{city.latitud}º</span>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.label}>Longitud</span>
                    <span className={styles.value}>{city.longitud}º</span>
                </div>
            </div>
        </div>   
    )
}