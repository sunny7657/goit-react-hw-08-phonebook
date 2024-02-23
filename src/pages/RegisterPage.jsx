import { Typography } from '@mui/material';
import theme from 'ThemeProvider/ThemeProvider';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import React from 'react';

const RegisterPage = () => {
  return (
    <main>
      <Typography variant="h1" sx={theme.typography.heading}>
        Registration
      </Typography>
      <RegistrationForm />
    </main>
  );
};

export default RegisterPage;
