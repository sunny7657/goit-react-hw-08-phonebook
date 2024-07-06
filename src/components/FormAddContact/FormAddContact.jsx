import { Notify } from 'notiflix';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-operations';
import { selectContacts } from '../../redux/selectors';
import { Box, Button, TextField } from '@mui/material';

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
        '& .MuiTextField-root': { m: 1.5, minWidth: '280px' },
      }}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <TextField
        label="Name"
        required
        placeholder="Adam Smith"
        {...register('name', { required: 'This field is required' })}
      />
      <TextField
        label="Number"
        required
        placeholder="000-00-00"
        {...register('number', {
          required: 'This field is required',
          minLength: {
            value: 7,
            message: 'Please, enter the number 000-00-00',
          },
          pattern: /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
        })}
      />
      <Button
        type="submit"
        sx={{
          mt: 2,
        }}
      >
        Add contact
      </Button>
    </Box>
  );
};

export default FormAddContact;
