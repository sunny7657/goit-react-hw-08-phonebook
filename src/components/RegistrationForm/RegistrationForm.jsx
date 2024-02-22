import { Box, Button, FormControl, TextField } from '@mui/material';
import { useState } from 'react';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = evt => {
    const { value } = evt.target;
    if (evt.target.name === 'name') {
      setName(value);
    } else if (evt.target.name === 'email') {
      setEmail(value);
    } else if (evt.target.name === 'password') {
      setPassword(value);
    }
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
  };

  return (
    <>
      <h1>Registration</h1>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        // autoComplete="off"
      >
        <FormControl onSubmit={handleFormSubmit}>
          <TextField
            type="text"
            name="name"
            label="Name"
            required
            value={name}
            onChange={handleInputChange}
          />
          <TextField
            type="email"
            name="email"
            label="Email"
            required
            value={email}
            onChange={handleInputChange}
          />
          <TextField
            type="password"
            name="password"
            label="Password"
            required
            value={password}
            onChange={handleInputChange}
          />

          <Button color="inherit" type="submit">
            Submit
          </Button>
        </FormControl>
      </Box>
    </>
  );
};

export default RegistrationForm;
