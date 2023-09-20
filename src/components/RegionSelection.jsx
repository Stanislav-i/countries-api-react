import React from 'react';
import { useDispatch } from 'react-redux';
import { setRegion } from 'redux/userQueriesSlice';

const RegionSelection = () => {
    const dispatch = useDispatch();

    const onOptionChange = e => {
        dispatch(setRegion(e.target.value))
    }
    
    return (
<form >
        <section>
          <h3>Choose region</h3>
          <label>
            Europe
            <input
              type="radio"
              name="region"
              value="Europe"
              onChange={onOptionChange}
              defaultChecked
            />
          </label>
          <label>
            Asia
            <input
              type="radio"
              name="region"
              value="Asia"
              onChange={onOptionChange}
            />
          </label>
          <label>
          Oceania
            <input
              type="radio"
              name="region"
              value="Oceania"
              onChange={onOptionChange}
            />
          </label>
          <label>
          Africa
            <input
              type="radio"
              name="region"
              value="Africa"
              onChange={onOptionChange}
            />
          </label>
          <label>
          Americas
            <input
              type="radio"
              name="region"
              value="Americas"
              onChange={onOptionChange}
            />
          </label>
        </section>
      </form>
    );
};

export default RegionSelection;