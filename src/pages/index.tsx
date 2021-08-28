import Head from 'next/head';
import { useState } from 'react';
import { Header, CountryCardGrid, Filters } from '../components';
import { Countries } from '../types/countries';

export default function Home({ countries }: { countries: Countries }) {
  const [countryList, setCountryList] = useState(countries);

  return (
    <>
      <Head>
        <title>REST Countries</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Filters
        countries={countryList}
        setCountries={(c) => setCountryList(c)}
      />
      <CountryCardGrid countries={countryList} />
    </>
  );
}

export async function getStaticProps() {
  const raw = await fetch(`https://restcountries.eu/rest/v2/all`);
  const countries = await raw.json();

  return {
    props: {
      countries: JSON.parse(JSON.stringify(countries)),
    },
  };
}
