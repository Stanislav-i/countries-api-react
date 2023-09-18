import React from 'react';
import { Container } from 'components/Container';
import { useParams } from 'react-router-dom';

export const CountryInfoPage = () => {
const {name} = useParams();
console.log(name);

    return (
        <Container>
            
        </Container>
    );
};

export default CountryInfoPage;