import { Link, Outlet } from 'react-router-dom';
import NavbarAuth from './NavbarAuth';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import { useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/selectors';
import { NavbarUser } from './NavbarUser';

const Navbar = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <>
      <AppBar position="fixed" sx={{ height: '64px' }}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              <ConnectWithoutContactOutlinedIcon sx={{ fontSize: 28 }} />
            </IconButton>
          </Link>
          <Link to="/contacts" style={{ textDecoration: 'none' }}>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              CONTACTS
            </Typography>
          </Link>
          <Box sx={{ marginLeft: 'auto' }}>
            {isLogin ? <NavbarUser /> : <NavbarAuth />}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Outlet />
    </>
  );
};

export default Navbar;
