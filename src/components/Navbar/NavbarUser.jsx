import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography } from '@mui/material';
import { logout } from '../../redux/auth/auth-operations';
import { Notify } from 'notiflix';
import { selectUserName } from '../../redux/selectors';

export const NavbarUser = () => {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();

  const onLogout = async () => {
    const result = await dispatch(logout());

    if (result.meta.requestStatus === 'rejected') {
      Notify.failure('Oops... Something went wrong. Please, try again!');
      return;
    }

    Notify.success('You have successfully logged out.');
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="body1" sx={{ mr: 2 }}>
        {name || 'User'}
      </Typography>
      <Button onClick={onLogout} variant="text" color="primary">
        Log out
      </Button>
    </div>
  );
};
