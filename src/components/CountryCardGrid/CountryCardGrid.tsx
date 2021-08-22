import { CountryCard } from './CountryCard';
import styles from './CountryCardGrid.module.scss';

export const CountryCardGrid = ({ countries }) => (
  <section className={styles.grid}>
    {countries.map((country) => (
      <CountryCard
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
