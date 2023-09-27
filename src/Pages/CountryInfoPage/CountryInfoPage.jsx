import React, { useEffect } from 'react';
import { Container } from 'components/Container';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  requestCountryInfoThunk,
  selectCountryInfo,
  selectCountryInfoError,
  selectCountryInfoIsLoading,
} from 'redux/countryInfoSlice';
import Loader from 'components/Loader';
import { requestCountriesThunk, selectAllCountries } from 'redux/countryListSlice';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

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
  align-items: center;
`;
const InfoTitle = styled.h2`
  /* font-size: var(--fs-lg); */
  font-weight: var(--fw-bold);
  height: 25px;
  text-align: center;
`;

const InfoText = styled.div`
  margin: 0;
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);
  text-align: center;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

const StyledLi = styled.li`
  display: inline-block;
  margin-left: 5px;
`;

export const CountryInfoPage = () => {
  const { name } = useParams();
  const countryInfo = useSelector(selectCountryInfo);
  const countryInfoLoading = useSelector(selectCountryInfoIsLoading);
  const countryInfoError = useSelector(selectCountryInfoError);
  const dispatch = useDispatch();
  const allCountries = useSelector(selectAllCountries);
  let currencies = [];

  useEffect(() => {
    if (!countryInfo || countryInfo[0].name?.official !== name) {
      dispatch(requestCountryInfoThunk(name));
    }
    
    if (!allCountries) {
      dispatch(requestCountriesThunk())
    }
  }, [name, countryInfo, allCountries, dispatch]);

  const showCountryInfo =
    Array.isArray(countryInfo) &&
    countryInfo.length === 1 &&
    countryInfo[0].name?.official === name &&
    Array.isArray(allCountries);

  if (showCountryInfo) {
    for (const key in countryInfo[0].currencies) {
      currencies.push(key);
    }
  }

  return (
    <Container>
      {countryInfoLoading && <Loader />}
      {countryInfoError && <p>Error occured... Error is {countryInfoError}</p>}
      {showCountryInfo && (
        <Wrapper>
          <CardImg src={countryInfo[0].flags.png} alt={countryInfo[0].name} />
          <InfoSection>
            <InfoTitle>{countryInfo[0].name.common}</InfoTitle>
            <InfoText>
              <b>Official Name:</b> {countryInfo[0].name.official}
            </InfoText>
            <InfoText>
              <b>Capital:</b> {countryInfo[0].capital}
            </InfoText>
            <InfoText>
              <b>Region:</b> {countryInfo[0].region}
            </InfoText>
            <InfoText>
              <b>SubRegion:</b> {countryInfo[0].subregion}
            </InfoText>
            <InfoText>
              <b>Population:</b> {countryInfo[0].population}
            </InfoText>
            {currencies.map(curr => {
              return (
                <InfoText key={curr}>
                  <b>Currencies:</b> {curr}
                </InfoText>
              );
            })}
            <ul>
              <InfoText>
                <b>Languages:</b>
                {Object.values(countryInfo[0].languages).map(lang => {
                  return <StyledLi key={lang}> {lang}</StyledLi>;
                })}
              </InfoText>
            </ul>
            <ul>
              <InfoText>
                <b>Domain:</b>
                {countryInfo[0].tld?.map(dom => {
                  return <StyledLi key={dom}> {dom}</StyledLi>;
                })}
              </InfoText>
            </ul>
            <ul>
              <InfoText>
                <b>Borders On:</b>
                {countryInfo[0].borders ? (
                  countryInfo[0].borders.map(border => {
                    const borderCountry = allCountries?.filter(country=>country.cca3 === border);
                    if (borderCountry[0].name.official === 'Russian Federation') {
                      return null
                    }
                    return <StyledLi key={border}> <Link to={`/countryinfo/${borderCountry[0].name.official}`}>{border}</Link></StyledLi>;
                  })
                ) : (
                  <span> This country does not border anyone</span>
                )}
              </InfoText>
            </ul>
          </InfoSection>
        </Wrapper>
      )}
    </Container>
  );
};

export default CountryInfoPage;
