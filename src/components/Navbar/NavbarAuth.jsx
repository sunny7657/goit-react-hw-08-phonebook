import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Box } from '@mui/material';

const NavbarAuth = () => {
  return (
    <Box display="flex" gap={2}>
      <Button
        component={NavLink}
        to="/signup"
        sx={{ backgroundColor: 'transparent' }}
      >
        Sign up
      </Button>
      <Button
        component={NavLink}
        to="/login"
        sx={{ backgroundColor: 'transparent' }}
      >
        Log in
      </Button>
    </Box>
  );
};

export default NavbarAuth;
