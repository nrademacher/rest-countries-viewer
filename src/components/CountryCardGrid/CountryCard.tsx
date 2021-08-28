import Link from 'next/link';
import NumberFormat from 'react-number-format';
import { Country } from '../../types/countries';
import styles from './CountryCard.module.scss';

type CountryCard = Pick<Country, 'name' | 'population' | 'region' | 'capital'>;
type CountryCardProps = CountryCard & { id: string; flagUrl: string };

export const CountryCard = ({
  id,
  flagUrl,
  name,
  population,
  region,
  capital,
}: CountryCardProps) => (
  <Link href={`/countries/${id}`}>
    <a className={styles.card}>
      <section className={styles.cardImageContainer}>
        <img
          className={styles.cardImage}
          src={flagUrl}
          alt={`${name}'s flag'`}
        />
      </section>
      <section className={styles.cardTextContainer}>
        <h2 className={styles.cardTitle}>{name}</h2>
        <article className={styles.cardItems}>
          <div className={styles.cardItem}>
            <h3>Population:</h3>
            <NumberFormat
              value={population}
              displayType="text"
              thousandSeparator
            />
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
    </a>
  </Link>
);
