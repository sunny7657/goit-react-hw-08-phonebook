import { Typography } from '@mui/material';
import { theme } from '../ThemeProvider/ThemeProvider';
import React from 'react';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';

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
