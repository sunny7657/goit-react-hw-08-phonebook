import { Box, Button, FormControl, TextField } from '@mui/material';
import theme from 'ThemeProvider/ThemeProvider';
import { useId, useState } from 'react';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleInputChange = evt => {
    const { name, value } = evt.target;
    setState({ ...state, [name]: value });
  };
  // dopysaty logiku submit

  const handleFormSubmit = evt => {
    evt.preventDefault();
    setState({ ...INITIAL_STATE });
  };
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  console.log(nameId);

  const { name, email, password } = state;
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      onSubmit={handleFormSubmit}
    >
      <FormControl>
        <TextField
          type="text"
          name="name"
          label="Name"
          id={nameId}
          required
          value={name}
          onChange={handleInputChange}
          sx={{ color: theme.palette.primary.main }}
        />
        <TextField
          type="email"
          name="email"
          label="Email"
          id={emailId}
          required
          value={email}
          onChange={handleInputChange}
          sx={{ color: theme.palette.primary.main }}
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          id={passwordId}
          required
          value={password}
          onChange={handleInputChange}
          sx={{
            color: theme.palette.primary.main,
            focusColor: theme.palette.secondary.main,
          }}
        />

        <Button
          type="submit"
          sx={{
            mt: 2,
            ...theme.palette.button,
          }}
        >
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};

export default RegistrationForm;
