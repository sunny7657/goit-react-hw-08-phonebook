import { Link, Outlet } from 'react-router-dom';
import NavbarAuth from './NavbarAuth';
import NavbarUser from './NavbarUser';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';

const Navbar = () => {
  const isLogin = false;
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
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
                  style={{ fontSize: '28px', color: ' white' }}
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

      <Outlet />
    </>
  );
};

export default Navbar;
