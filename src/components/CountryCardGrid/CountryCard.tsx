import styles from './CountryCard.module.scss';

type CountryCardProps = {
  flagUrl: string;
  name: string;
  population: string;
  region: 'Africa' | 'America' | 'Asia' | 'Europe' | 'Oceania';
  capital: string;
};

export const CountryCard = ({
  flagUrl,
  name,
  population,
  region,
  capital,
}: CountryCardProps) => (
  <article className={styles.card}>
    <section className={styles.cardImageContainer}>
      <img className={styles.cardImage} src={flagUrl} alt={`${name}'s flag'`} />
    </section>
    <section className={styles.cardTextContainer}>
      <h2 className={styles.cardTitle}>{name}</h2>
      <article className={styles.cardItems}>
        <div className={styles.cardItem}>
          <h3>Population:</h3>
          <span>{` ${population}`}</span>
        </div>
        <div className={styles.cardItem}>
          <h3>Region:</h3>
          <span>{region}</span>
        </div>
        <div className={styles.cardItem}>
          <h3>Capital:</h3>
          <span>{capital}</span>
        </div>
      </article>
    </section>
  </article>
);
