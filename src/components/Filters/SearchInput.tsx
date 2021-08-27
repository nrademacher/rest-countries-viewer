import { useState, useEffect, useRef } from 'react';
import { Fzf } from 'fzf';
import styles from './SearchInput.module.scss';

export const SearchInput = ({
  countries,
  setCountries,
}: {
  countries: any;
  setCountries: any;
}) => {
  const originalCountries = useRef(countries);
  const [query, setQuery] = useState(``);
  const [results, setResults] = useState<null | typeof countries>(null);

  useEffect(() => {
    if (query === ``) {
      setCountries(originalCountries.current);
    }
  }, [query, setCountries]);

  const fzf = new Fzf(originalCountries.current, {
    selector: (item: any) => item.name,
  });

  const handleChange = (e: any) => {
    setQuery(e.target.value);
    const exactMatch = originalCountries.current.find(
      (country) => country.name.toLowerCase() === query.toLowerCase(),
    );

    if (exactMatch) {
      setCountries([exactMatch]);
    } else {
      setResults(fzf.find(query));
      if (!results) return;
      setCountries(results.map((result) => result.item));
    }
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
