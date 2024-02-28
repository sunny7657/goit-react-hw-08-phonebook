import { Box, Button, FormControl, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const LoginForm = () => {
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
    dispatch(login({ ...state }));

    setState({ ...INITIAL_STATE });
  };

  const { email, password } = state;

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

export default LoginForm;
