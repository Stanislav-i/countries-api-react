import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserSearchQuery, setSearchValue } from 'redux/userQueriesSlice';
import styled from 'styled-components';

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  height: 35px;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-ui-base);
`;

const SearchBox = () => {
    const userSearchQuery = useSelector(selectUserSearchQuery);
    const dispatch = useDispatch();

    const handleUserSearchQuery = e => {
        dispatch(setSearchValue(e.target.value));
    }

    return (
        <InputContainer>

        <Input type='text' value={userSearchQuery} onChange={handleUserSearchQuery}/>
      </InputContainer>
    );
};

export default SearchBox;