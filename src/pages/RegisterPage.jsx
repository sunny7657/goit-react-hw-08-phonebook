import { Typography } from '@mui/material';
import { theme } from '../ThemeProvider/ThemeProvider';
import React from 'react';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import {
  selectAuthError,
  selectAuthLoading,
  selectIsLogin,
} from '../redux/selectors';
import { useSelector } from 'react-redux';
import { AppLoader } from 'components/Loader/Loader';
import { Navigate } from 'react-router-dom';

const RegisterPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  const isLogin = useSelector(selectIsLogin);

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <main>
      <Typography variant="h1" sx={theme.typography.heading}>
        Registration
      </Typography>
      {authLoading && <AppLoader />}
      <RegistrationForm />
      {authError && <p>Error: {authError}</p>}
    </main>
  );
};

export default RegisterPage;
