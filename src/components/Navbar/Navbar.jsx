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
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Link to="/">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 1 }}
              >
                <ConnectWithoutContactOutlinedIcon
                  style={{ fontSize: '28px', color: '#2b2b2b' }}
                />
              </IconButton>
            </Link>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              CONTACTS
            </Typography>
            {isLogin ? <NavbarUser /> : <NavbarAuth />}
          </Toolbar>
        </AppBar>
      </Box>

      <Toolbar />

      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default Navbar;
