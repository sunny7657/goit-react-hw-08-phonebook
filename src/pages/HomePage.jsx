import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        hangingPunctuationHeight: '100vh',
        padding: 3,
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
            <Typography variant="h1" component="h1" gutterBottom>
              Welcome!
            </Typography>
            <Typography variant="h3" component="h2" gutterBottom>
              Please, sign up or log in to access your own phonebook!
            </Typography>
            <Box sx={{ mt: 2 }}>
              <NavLink to="/signup">
                <Typography variant="h6" color="primary">
                  Sign Up
                </Typography>
              </NavLink>
              <Typography variant="h6" color="textSecondary" sx={{ my: 1 }}>
                or
              </Typography>
              <NavLink to="/login">
                <Typography variant="h6" color="primary">
                  Log In
                </Typography>
              </NavLink>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
