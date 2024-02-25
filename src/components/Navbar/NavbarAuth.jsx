import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

const NavbarAuth = () => {
  return (
    <>
      <Button color="inherit">
        <NavLink to="/signup">Sign up </NavLink>
      </Button>

      <NavLink to="/login">
        <Button color="inherit">Log in</Button>
      </NavLink>
    </>
  );
};

export default NavbarAuth;
