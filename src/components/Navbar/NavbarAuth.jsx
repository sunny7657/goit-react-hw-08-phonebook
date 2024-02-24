import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

const NavbarAuth = () => {
  return (
    <>
      <NavLink to="/signup">
        <Button color="inherit">Sign up</Button>
      </NavLink>
      <NavLink to="/login">
        <Button color="inherit">Log in</Button>
      </NavLink>
    </>
  );
};

export default NavbarAuth;
