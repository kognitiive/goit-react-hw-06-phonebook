import {ContactForm} from '../ContactForm/ContactForm';
import {Filter} from '../Filter/Filter';
import {ContactsList} from '../ContactsList/ContactsList';

import { Container } from './App.styled';

export const App = () => {
  return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter/>
        <ContactsList/>
      </Container>
    );
};
