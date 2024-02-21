import { Link, Outlet } from 'react-router-dom';
import NavbarAuth from './NavbarAuth';
import styles from './navbar-auth.module.css';
import NavbarUser from './NavbarUser';

const Navbar = () => {
  const isLogin = false;

  return (
    <>
      <nav>
        <Link to="/" className={styles.link}>
          Logo
        </Link>

        {isLogin ? <NavbarUser /> : <NavbarAuth />}
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
