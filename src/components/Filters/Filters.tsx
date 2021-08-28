import { SearchInput } from './SearchInput';
import { RegionSelect } from './RegionSelect';
import { Countries } from '../../types/countries';
import styles from './Filters.module.scss';

export const Filters = ({
  countries,
  setCountries,
}: {
  countries: Countries;
  setCountries: React.Dispatch<React.SetStateAction<Countries>>;
}) => (
  <section className={styles.filters}>
    <SearchInput countries={countries} setCountries={setCountries} />
    <RegionSelect countries={countries} setCountries={setCountries} />
  </section>
);
