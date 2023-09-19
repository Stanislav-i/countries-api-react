import React from 'react';
import styled from 'styled-components';
import SearchBox from './SearchBox';
import RegionSelection from './RegionSelection';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
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