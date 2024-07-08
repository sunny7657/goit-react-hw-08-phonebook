import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import React from 'react';
import { Alert, Typography, Box, Paper } from '@mui/material';
import { selectAuthError, selectAuthLoading } from '../redux/selectors';
import { useSelector } from 'react-redux';
import { AppLoader } from 'components/Loader/Loader';

const SignupPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: theme => theme.palette.background.paper,
        padding: 3,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: 600,
          width: '100%',
          padding: 3,
          backgroundColor: theme => theme.palette.background.default,
          borderRadius: 2,
          boxShadow: theme => theme.shadows[3],
        }}
      >
        <Typography variant="h1" component="h1" gutterBottom>
          Sign Up
        </Typography>
        {authLoading && <AppLoader />}
        <RegistrationForm />
        {authError && (
          <Alert variant="outlined" severity="error" sx={{ mt: 2 }}>
            Error: {authError}
          </Alert>
        )}
      </Paper>
    </Box>
  );
};

export default SignupPage;
