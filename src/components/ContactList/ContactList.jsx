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
import { Grid } from '@mui/material';

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
      {error && <p>Error: {error}</p>}
      {Boolean(contacts.length) && (
        <Grid container spacing={1}>
          {contacts.map(contact => (
            // <Grid item key={contact.id} xs={6}>

            <ContactItem contact={contact} key={contact.id} />

            // </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};
