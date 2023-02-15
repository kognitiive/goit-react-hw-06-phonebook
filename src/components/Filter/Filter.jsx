import { Input, Wrapper } from './Filter.styled';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => { 
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const filterInputId = nanoid();
  
  const handleChange = event => {
    const input = event.target;
    dispatch(setFilter(input.value));
  };

  if (contacts.length < 2) {
    return null
  }

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