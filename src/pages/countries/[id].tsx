import type { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import NumberFormat from 'react-number-format';
import { Header } from '../../components';
import { Country as CountryType } from '@/types/countries';
import styles from '../../styles/Country.module.scss';

export default function Country({ country }: { country: CountryType }) {
  return (
    <>
      <Header />
      <main className={styles.detailsPage}>
        <Link href="/">
          <button type="button" className={styles.backButton}>
            &#8592; Back
          </button>
        </Link>
        <article className={styles.countryDetails}>
          <section className={styles.detailsFlag}>
            <img src={country.flag} alt={country.name} />
          </section>
          <section className={styles.detailsText}>
            <h2 className={styles.title}>{country.name}</h2>
            <article className={styles.detailItems}>
              <section className={styles.itemsColumn}>
                <div className={styles.item}>
                  <h3>Native Name:</h3>
                  <span>{` ${country.nativeName}`}</span>
                </div>
                <div className={styles.item}>
                  <h3>Population:</h3>
                  <NumberFormat
                    value={country.population}
                    displayType="text"
                    thousandSeparator
                  />
                </div>
                <div className={styles.item}>
                  <h3>Region:</h3>
                  <span>{` ${country.region}`}</span>
                </div>
                <div className={styles.item}>
                  <h3>Sub Region:</h3>
                  <span>{` ${country.subregion}`}</span>
                </div>
                <div className={styles.item}>
                  <h3>Capital:</h3>
                  <span>{` ${country.capital}`}</span>
                </div>
              </section>
              <section className={styles.itemsColumn}>
                <div className={styles.item}>
                  <h3>Top Level Domain:</h3>
                  <span>{` ${country.topLevelDomain[0]}`}</span>
                </div>
                <div className={styles.item}>
                  <h3>Currencies:</h3>
                  <span>{` ${country.currencies[0].name}`}</span>
                </div>
                <div className={styles.item}>
                  <h3>Languages:</h3>
                  <span>{` ${country.languages[0].name}`}</span>
                </div>
              </section>
            </article>
            <section className={styles.borderCountries}>
              <h3>Border Countries:</h3>
              {country.borders.map((border) => (
                <Link key={border} href={`/countries/${border}`}>
                  <span>{border}</span>
                </Link>
              ))}
            </section>
          </section>
        </article>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const raw = await fetch(`https://restcountries.eu/rest/v2/all`);
  const countries = await raw.json();

  const paths = countries.map((country: CountryType) => ({
    params: { id: country.alpha3Code },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const raw = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${params?.id}`,
  );
  const country = await raw.json();

  return {
    props: {
      country: JSON.parse(JSON.stringify(country)),
    },
  };
};
