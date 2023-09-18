import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  requestCountriesThunk,
  selectAllCountries,
  selectcountriesError,
  selectcountriesIsLoading,
} from 'redux/countryListSlice';
import CountryCard from 'components/CountryCard';
import Loader from 'components/Loader';
import styled from 'styled-components';
import { Container } from 'components/Container';

const List = styled.section`
    /* width: 380px; */
    padding: 2rem 0;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;

    @media (min-width: 380px) {
      width: 320px;
    }

    @media (min-width: 768px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;

    padding: 2.5rem 0;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }
`;


export const HomePage = () => {
  const allCountries = useSelector(selectAllCountries);
  const isLoading = useSelector(selectcountriesIsLoading);
  const error = useSelector(selectcountriesError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestCountriesThunk("asia"));
  }, [dispatch]);

  const showCountires = Array.isArray(allCountries) && allCountries.length > 0;

  console.log(allCountries);

  return (
    <Container>
        {isLoading && <Loader />}
      {error && <p>Error occured... Error is {error}</p>}
      <List>
        {showCountires &&
          allCountries.map(({ name, population, region, capital, flags, fifa}) => {
            if(name.official === 
                "Russian Federation") 
            return null
            
           return <li key={name.official}>
            <CountryCard
              name={name.official}
              population={population}
              region={region}
              capital={capital}
              flag={flags.png}
              fifa={fifa}
            />
          </li>
})}
      </List>
    </Container>
  );
};

export default HomePage;
