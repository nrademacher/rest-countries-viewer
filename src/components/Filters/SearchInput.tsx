import { useState, useEffect, useRef } from 'react';
import { Fzf } from 'fzf';
import { Countries, Country } from '@/types/countries';
import styles from './SearchInput.module.scss';

type FzfCountryResult = {
  end: number;
  item: Country;
  positions: Set<number>;
  score: number;
  start: number;
};

export const SearchInput = ({
  countries,
  setCountries,
}: {
  countries: Countries;
  setCountries: React.Dispatch<React.SetStateAction<Countries>>;
}) => {
  const originalCountries = useRef(countries);
  const [query, setQuery] = useState(``);
  const [results, setResults] = useState<null | FzfCountryResult[]>(null);

  const fzf = new Fzf(originalCountries.current, {
    selector: (item) => item.name,
  });

  useEffect(() => {
    if (query === ``) {
      setCountries(originalCountries.current);
    }

    const exactMatch = originalCountries.current.find(
      (country) => country.name.toLowerCase() === query.toLowerCase(),
    );

    if (exactMatch) {
      setCountries([exactMatch]);
    } else {
      setResults(fzf.find(query));
      if (!results) return;

      const fzfResult = results.map((result) => result.item);
      setCountries(fzfResult);
    }
  }, [query]);

  const handleChange = (e: React.BaseSyntheticEvent) => {
    setQuery(e.target.value);
  };

  return (
    <section className={styles.search}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.icon}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for a country..."
      />
    </section>
  );
};
