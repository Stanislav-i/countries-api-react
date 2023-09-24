import React, { useEffect } from 'react';
import { Container } from 'components/Container';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-top: 1.5rem;

    @media (min-width: 380px) {
      width: 320px;
    }

    @media (min-width: 768px) {
    width: 800px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2.5rem 0;
  }

  @media (min-width: 1024px) {
    width: 100%;
  }
`;

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoSection = styled.div`
    width: 100%;
    height: 100%;
`;
const InfoTitle = styled.h2`
    font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  height: 25px;
  text-align: center;  
`;

export const CountryInfoPage = () => {
const {name} = useParams();
const countryInfo = {
    name: null,
    nativeName: null,
    capital: null,
    currencies: [],
    flag: null,
    languages: {},
    population: null,
    region: null,
    subregion: null,
    borders: [],
    domain: null,
}

useEffect (() => {
    const getSearchedCountries = async () => {
        const normalizedName = name.toLocaleLowerCase();
        try {
            const {data} = await axios(`https://restcountries.com/v3.1/name/${normalizedName}`);
            countryInfo.name = data[0].name.common;
            countryInfo.nativeName =data[0].name.nativeName;
            countryInfo.capital =data[0].capital;
            countryInfo.currencies =data[0].currencies;
            countryInfo.flag =data[0].flags.png;
            countryInfo.languages =data[0].languages;
            countryInfo.population =data[0].population;
            countryInfo.region =data[0].region;
            countryInfo.subregion =data[0].subregion;
            countryInfo.borders =data[0].borders;
            countryInfo.domain =data[0].tld;
            return console.log(countryInfo, countryInfo.flag);
        }
        catch (error) {
            return error(error.message);
        }
      };
      getSearchedCountries();
})


// const showCountryInfo = Array.isArray(countryInfo) && countryInfo.length === 1;
const showCountryInfo = true;
    return (
        <Container>
{  showCountryInfo &&          
                <Wrapper>
<CardImg src={"https://flagcdn.com/w320/gr.png"} alt={countryInfo.name} />
<InfoSection>
<InfoTitle>{name}</InfoTitle>
</InfoSection>
              </Wrapper>}
        </Container>
    );
};

export default CountryInfoPage;