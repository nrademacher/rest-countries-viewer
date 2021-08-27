import { SearchInput } from './SearchInput';
import styles from './Filters.module.scss';

export const Filters = ({
  countries,
  setCountries,
}: {
  countries: any;
  setCountries: any;
}) => (
  <section className={styles.filters}>
    <SearchInput countries={countries} setCountries={setCountries} />
  </section>
);
