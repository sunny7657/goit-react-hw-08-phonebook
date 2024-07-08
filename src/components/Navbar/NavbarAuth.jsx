import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

const NavbarAuth = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <NavLink to="/signup" style={{ textDecoration: 'none' }}>
        <Button variant="outlined" color="primary">
          Sign up
        </Button>
      </NavLink>
      <NavLink to="/login" style={{ textDecoration: 'none' }}>
        <Button variant="outlined" color="primary">
          Log in
        </Button>
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
