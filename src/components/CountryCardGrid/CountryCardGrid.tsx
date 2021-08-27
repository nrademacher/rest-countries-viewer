import Link from 'next/link';
import { CountryCard } from './CountryCard';
import styles from './CountryCardGrid.module.scss';

export const CountryCardGrid = ({ countries }) => (
  <section className={styles.grid}>
    {countries &&
      countries.map((country) => (
        <CountryCard
          id={country.alpha3Code}
          key={country.name}
          flagUrl={country.flag}
          name={country.name}
          region={country.region}
          capital={country.capital}
          population={String(country.population)}
        />
      ))}
  </section>
);
