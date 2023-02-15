import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { ContactListStl, ListItem, Button, Text } from './ContactsList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = (contacts, filter) => {
    if (contacts.length === 0) {
      return [];
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  if (contacts.length === 0) {
    return(<Text>
              You have no contacts yet
            </Text>)
  }

  return (
    <ContactListStl>
      {visibleContacts(contacts, filter).map(({ name, number, id }) => {
        return (
          <ListItem key={id}>
            <Text>
              {name}: {number}
            </Text>
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </ListItem>
        );
      })}
    </ContactListStl>
  );
};