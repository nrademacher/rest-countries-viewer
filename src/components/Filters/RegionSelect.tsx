import { useState, useEffect, useRef } from 'react';
import { Countries } from '@/types/countries';
import styles from './RegionSelect.module.scss';

export const RegionSelect = ({
  countries,
  setCountries,
}: {
  countries: Countries;
  setCountries: React.Dispatch<React.SetStateAction<Countries>>;
}) => {
  const [region, setRegion] = useState(`default`);
  const originalCountries = useRef(countries);

  const handleRegionChange = (e: React.BaseSyntheticEvent) => {
    setRegion(e.target.value);
  };

  useEffect(() => {
    if (region === `default`) {
      setCountries(originalCountries.current);
    } else {
      setCountries(
        originalCountries.current.filter(
          (country) => country.region === region,
        ),
      );
    }
  }, [region]);

  return (
    <select
      className={styles.dropdown}
      value={region}
      onChange={handleRegionChange}
      onBlur={() => setRegion(`default`)}
    >
      <option className={styles.region} value="default" disabled>
        Filter by Region
      </option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};
