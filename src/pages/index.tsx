import Head from 'next/head';
import { Header } from '../components';

export default function Home({ countries }) {
  return (
    <>
      <Head>
        <title>REST Countries</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {countries.map((country) => (
        <div key={country.name}>{country.name}</div>
      ))}
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
