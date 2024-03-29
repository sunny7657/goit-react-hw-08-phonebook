import { ContactItem } from '../ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts-operations';
import { AppLoader } from '../Loader/Loader';
import { Alert, List } from '@mui/material';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <AppLoader />}
      {error && (
        <Alert variant="outlined" severity="error">
          Error: {error}
        </Alert>
      )}
      {Boolean(contacts.length) && (
        <List sx={{ width: '100%', maxWidth: 280, bgcolor: 'transparent' }}>
          {contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </List>
      )}
    </div>
  );
};
