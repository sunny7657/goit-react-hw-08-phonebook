// import { BtnStyled } from 'components/Button/Button.styled';
import { Notify } from 'notiflix';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/contacts-operations';
import { Button, TextField } from '@mui/material';

export const FormAddContact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleInputChange = evt => {
    const { value } = evt.target;
    if (evt.target.name === 'name') {
      setName(value);
    } else if (evt.target.name === 'number') {
      setNumber(value);
    }
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const doesExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (doesExist) {
      return alert(`${name} is already in contacts.`);
    }

    dispatch(addContact({ name, number }));
    Notify.success('The contact was created');

    setName('');
    setNumber('');
  };

  return (
    // <Box
    //   component="form"
    //   sx={{
    //     '& .MuiTextField-root': { m: 1, width: '25ch' },
    //   }}
    //   noValidate
    //   // autoComplete="off"
    // >
    <form onSubmit={handleFormSubmit}>
      <TextField
        type="text"
        name="name"
        label="Name"
        required
        placeholder="Adam Smith"
        value={name}
        onChange={handleInputChange}
      />
      <TextField
        type="tel"
        name="number"
        label="Number"
        required
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
        placeholder="000-00-00"
        value={number}
        onChange={handleInputChange}
      />

      <Button type="submit" color="inherit">
        Add contact
      </Button>
    </form>
    // </Box>
  );
};
