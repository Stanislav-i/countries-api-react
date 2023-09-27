import React from 'react';
import styled from 'styled-components';
import SearchBox from './SearchBox';
import RegionSelection from './RegionSelection';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  padding: 2rem 0;
  margin: 0 auto;

  @media (min-width: 380px) {
    width: 320px;
  }

  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 0;
  }

  @media (min-width: 1024px) {
  }
`;

export const UserQueries = () => {
  return (
    <Wrapper>
      <SearchBox />
      <RegionSelection />
    </Wrapper>
  );
};

export default UserQueries;
