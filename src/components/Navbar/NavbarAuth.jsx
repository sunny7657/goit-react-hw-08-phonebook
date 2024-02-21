import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar-auth.module.css';

const NavbarAuth = () => {
  return (
    <div className={styles.block}>
      <NavLink to="/signup" className={styles.link}>
        Sign up
      </NavLink>{' '}
      |{' '}
      <NavLink to="/login" className={styles.link}>
        Log in
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
