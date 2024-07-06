import { ContactItem } from '../ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/contacts-operations';
import { AppLoader } from '../Loader/Loader';
import { Alert, Box } from '@mui/material';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleEditContact = id => {
    // Tu dodaj logikę edycji kontaktu, na przykład otwarcie modala z formularzem edycji
    console.log('Edit contact with id:', id);
  };

  return (
    <Box sx={{ padding: 2 }}>
      {isLoading && <AppLoader />}
      {error && (
        <Alert variant="outlined" severity="error">
          Error: {error}
        </Alert>
      )}
      {Boolean(contacts.length) && (
        <Box>
          {contacts.map(contact => (
            <ContactItem
              key={contact.id}
              contact={contact}
              onEdit={handleEditContact}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};
