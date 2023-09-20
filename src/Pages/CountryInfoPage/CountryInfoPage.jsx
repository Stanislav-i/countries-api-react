import React from 'react';
import { Container } from 'components/Container';
// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectAllCountries } from 'redux/countryListSlice';

export const CountryInfoPage = () => {
// const {name} = useParams();
// const allCountries = useSelector(selectAllCountries);


// const getSearchedCountries = () => {
//     const normalizedFilter = name.toLocaleLowerCase();
//     return allCountries?.filter(country =>
//       country.name.official.toLocaleLowerCase().includes(normalizedFilter)
//     );
//   };

// const countryInfo = getSearchedCountries();

// console.log(name);

// const showCountryInfo = Array.isArray(countryInfo) && countryInfo.length === 1;

    return (
        <Container>
{/* {  showCountryInfo &&          <div>
              name={countryInfo[0].name.official}
              population={countryInfo[0].population}
              region={countryInfo[0].region}
              capital={countryInfo[0].capital}
              flag={countryInfo[0].flags.png}
              fifa={countryInfo[0].fifa}
              </div>} */}
        </Container>
    );
};

export default CountryInfoPage;