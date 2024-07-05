import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '../../redux/selectors';
import { Button } from '@mui/material';
import { logout } from '../../redux/auth/auth-operations';

export const NavbarUser = () => {
  const { name } = useSelector(selectUserName);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <div>
      {name}
      <Button onClick={onLogout} variant="text" color="primary">
        Log out
      </Button>
    </div>
  );
};
