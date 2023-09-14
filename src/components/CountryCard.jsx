import styled from "styled-components";

const Wrapper = styled.article`
border-radius: var(--radii);
  background-color: car(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden
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

const CardInfoItem = styled.p`
    padding: 0;
    margin: 0;
    font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);

  & > b {
    font-weight: var(--fw-bold);
  }
`;

export const CountryCard = ({name, population, region, capital, flag}) => {
    return (
        <Wrapper>
        <CardImg src={flag} alt={name} />
        <CardInfo>
        <h3>{name}</h3>
        <CardInfoItem><b>Population</b>: {population}</CardInfoItem>
        <CardInfoItem><b>Region</b>: {region}</CardInfoItem>
        <CardInfoItem><b>Capital</b>: {capital}</CardInfoItem>
        </CardInfo>
        </Wrapper>
    );
};

export default CountryCard;