import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { Form, Input, Button } from './ContactForm.styled';

export const ContactForm = () => { 
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    console.log()

    if (contacts.find(({name}) => name.toLowerCase() === form.elements.name.value.toLowerCase())) {
      return alert(`${form.elements.name.value} is already in contacts`);
    }
    
    if (contacts.find(({number}) => number === form.elements.number.value)) {
      return alert(`${form.elements.number.value} is already in contacts`);
    }

    dispatch(addContact({ name: form.elements.name.value, number: form.elements.number.value}));
    form.reset();
  };

    return (
      <Form onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>Name</label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
        />
        <label htmlFor={numberInputId}>Number</label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberInputId}
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
}