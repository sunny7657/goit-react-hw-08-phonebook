import { Box, Button, FormControl, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/auth-operations';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const dispatch = useDispatch();

  const handleInputChange = evt => {
    const { name, value } = evt.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    dispatch(signup({ ...state }));

    setState({ ...INITIAL_STATE });
  };

  const { name, email, password } = state;

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1.5, minWidth: '360px' },
      }}
      onSubmit={handleFormSubmit}
    >
      <FormControl>
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

        <Button
          type="submit"
          sx={{
            mt: 2,
          }}
        >
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};

export default RegistrationForm;
