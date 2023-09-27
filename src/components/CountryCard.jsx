import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.article`
  border-radius: var(--radii);
  background-color: car(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;
`;

const CardInfoItem = styled.li`
  margin: 0;
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);

  & > b {
    font-weight: var(--fw-bold);
  }
`;

const CardTitle = styled.h3`
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  height: 25px;
  text-align: center;
`;

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
  text-align: center;
`;

export const CountryCard = ({
  name,
  pageName,
  population,
  region,
  capital,
  flag,
}) => {
  return (
    <Link to={`/countryinfo/${pageName}`}>
      <Wrapper>
        <CardImg src={flag} alt={name} />
        <CardInfo>
          <CardTitle>{name}</CardTitle>
          <CardList>
            <CardInfoItem>
              <b>Population</b>: {population}
            </CardInfoItem>
            <CardInfoItem>
              <b>Region</b>: {region}
            </CardInfoItem>
            <CardInfoItem>
              <b>Capital</b>: {capital}
            </CardInfoItem>
          </CardList>
        </CardInfo>
      </Wrapper>
    </Link>
  );
};

export default CountryCard;
