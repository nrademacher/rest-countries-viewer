import { Meta, Story } from '@storybook/react';

import { CountryCardGrid } from './CountryCardGrid';
import { Country } from '@/types/countries';

const config: Meta = {
  title: `rest-countries-viewer/CountryCardGrid`,

  parameters: {
    component: CountryCardGrid,
  },
};

const sampleCountry: Country = {
  name: `Colombia`,
  topLevelDomain: [`.co`],
  alpha2Code: `CO`,
  alpha3Code: `COL`,
  callingCodes: [`57`],
  capital: `Bogotá`,
  altSpellings: [`CO`, `Republic of Colombia`, `República de Colombia`],
  region: `Americas`,
  subregion: `South America`,
  population: 48759958,
  latlng: [4, -72],
  demonym: `Colombian`,
  area: 1141748,
  gini: 55.9,
  timezones: [`UTC-05:00`],
  borders: [`BRA`, `ECU`, `PAN`, `PER`, `VEN`],
  nativeName: `Colombia`,
  numericCode: `170`,
  currencies: [
    {
      code: `COP`,
      name: `Colombian peso`,
      symbol: `$`,
    },
  ],
  languages: [
    {
      iso639_1: `es`,
      iso639_2: `spa`,
      name: `Spanish`,
      nativeName: `Español`,
    },
  ],
  translations: {
    de: `Kolumbien`,
    es: `Colombia`,
    fr: `Colombie`,
    ja: `コロンビア`,
    it: `Colombia`,
    br: `Colômbia`,
    pt: `Colômbia`,
    nl: `Colombia`,
    hr: `Kolumbija`,
    fa: `کلمبیا`,
  },
  flag: `https://restcountries.eu/data/col.svg`,
  regionalBlocs: [
    {
      acronym: `PA`,
      name: `Pacific Alliance`,
      otherAcronyms: [],
      otherNames: [`Alianza del Pacífico`],
    },
    {
      acronym: `USAN`,
      name: `Union of South American Nations`,
      otherAcronyms: [`UNASUR`, `UNASUL`, `UZAN`],
      otherNames: [
        `Unión de Naciones Suramericanas`,
        `União de Nações Sul-Americanas`,
        `Unie van Zuid-Amerikaanse Naties`,
        `South American Union`,
      ],
    },
  ],
  cioc: `COL`,
};

const dummyCountries = new Array(10).fill(0).map(() => sampleCountry);

export default config;

export const GridExample: Story = () => (
  <CountryCardGrid countries={dummyCountries} />
);