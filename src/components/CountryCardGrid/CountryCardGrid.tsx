import { CountryCard } from './CountryCard';
import { Countries } from '../../types/countries';
import styles from './CountryCardGrid.module.scss';

export const CountryCardGrid = ({ countries }: { countries: Countries }) => (
  <section className={styles.grid}>
    {countries.length &&
      countries.map((country) => (
        <CountryCard
          id={country.alpha3Code}
          key={country.name}
          flagUrl={country.flag}
          name={country.name}
          region={country.region}
          capital={country.capital}
          population={country.population}
        />
      ))}
  </section>
);
