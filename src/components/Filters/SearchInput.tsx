import { useState, useEffect, useRef } from 'react';
import { Fzf } from 'fzf';

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
  }, [query]);

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

  return <input type="text" value={query} onChange={handleChange} />;
};
