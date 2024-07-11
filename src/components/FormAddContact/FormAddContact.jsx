import { Notify } from 'notiflix';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-operations';
import { selectContacts } from '../../redux/selectors';
import { Box, Button, TextField, Grid } from '@mui/material';

const FormAddContact = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: { name: '', number: '' },
  });

  const handleFormSubmit = data => {
    const doesExist = contacts.some(contact => contact.name === data.name);

    if (doesExist) {
      Notify.failure('You have the contact with this name');
      return;
    }

    dispatch(addContact(data));
    reset();
    Notify.success('The contact was created');
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        p: 2,
        backgroundColor: 'background.paper',
        borderRadius: 2,
        boxShadow: 3,
      }}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            required
            fullWidth
            placeholder="Adam Smith"
            {...register('name', { required: 'This field is required' })}
            sx={{
              mb: 2,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Number"
            required
            fullWidth
            placeholder="000-00-00"
            {...register('number', {
              required: 'This field is required',
              minLength: {
                value: 7,
                message: 'Please, enter the number 000-00-00',
              },
              pattern: /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
            })}
            sx={{
              mb: 2,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              mt: 2,
              mb: 1,
            }}
          >
            Add contact
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FormAddContact;
