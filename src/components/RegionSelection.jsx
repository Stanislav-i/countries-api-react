import React from 'react';
import { useDispatch } from 'react-redux';
import { setRegion } from 'redux/userQueriesSlice';
import styled from 'styled-components';

const RadioButtonForm = styled.form`
    text-align: center;
`;

const RadioButtonSection = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
gap: 10px;
`;

const RbDiv = styled.span`
  cursor: pointer;
  background-color: var(--colors-ui-base);
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  display: flex;
  align-items: center;
  padding: 2px 10px;
`;

const RbNane = styled.span`
  font-weight: 600;
  margin-right: 5px;
  text-align: center;
`;

const RegionSelection = () => {
    const dispatch = useDispatch();

    const onOptionChange = e => {
        dispatch(setRegion(e.target.value))
    }
    
    return (
<RadioButtonForm >
          <h3>Choose region</h3>
          <RadioButtonSection>
          <label>
          <RbDiv>
            <RbNane>Europe</RbNane>
            <input
              type="radio"
              name="region"
              value="Europe"
              onChange={onOptionChange}
              defaultChecked
            />
            </RbDiv>
          </label>
          <label>
          <RbDiv>
            <RbNane>Asia</RbNane>
            <input
              type="radio"
              name="region"
              value="Asia"
              onChange={onOptionChange}
            />
            </RbDiv>
          </label>
          <label>
          <RbDiv>
          <RbNane>Oceania</RbNane>
            <input
              type="radio"
              name="region"
              value="Oceania"
              onChange={onOptionChange}
            />
            </RbDiv>
          </label>
          <label>
          <RbDiv>
          <RbNane>Africa</RbNane>
            <input
              type="radio"
              name="region"
              value="Africa"
              onChange={onOptionChange}
            />
            </RbDiv>
          </label>
          <label>
          <RbDiv>
          <RbNane>Americas</RbNane>
            <input
              type="radio"
              name="region"
              value="Americas"
              onChange={onOptionChange}
            />
            </RbDiv>
          </label>
          </RadioButtonSection>
      </RadioButtonForm>
    );
};

export default RegionSelection;