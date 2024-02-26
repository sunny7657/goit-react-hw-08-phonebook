import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

const NavbarAuth = () => {
  return (
    <>
      <NavLink to="/signup">
        <Button sx={{ backgroundColor: 'transparent' }}>Sign up </Button>
      </NavLink>

      <NavLink to="/login">
        <Button sx={{ backgroundColor: 'transparent' }}>Log in</Button>
      </NavLink>
    </>
  );
};

export default NavbarAuth;
