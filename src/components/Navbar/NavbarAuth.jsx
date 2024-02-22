import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar-auth.module.css';
import { Button } from '@mui/material';

const NavbarAuth = () => {
  return (
    <>
      <NavLink to="/signup" className={styles.link}>
        <Button color="inherit">Sign up</Button>
      </NavLink>
      <NavLink to="/login" className={styles.link}>
        <Button color="inherit">Log in</Button>
      </NavLink>
    </>
  );
};

export default NavbarAuth;
