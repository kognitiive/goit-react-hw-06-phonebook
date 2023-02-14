import { Input, Wrapper } from './Filter.styled';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => { 
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const filterInputId = nanoid();
  
  const handleChange = event => {
    const input = event.target;
    dispatch(setFilter(input.value));
  };

    return (
      <Wrapper>
        <label htmlFor={filterInputId}>Find contacts by name</label>
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
          id={filterInputId}
        />
      </Wrapper>
    );
}