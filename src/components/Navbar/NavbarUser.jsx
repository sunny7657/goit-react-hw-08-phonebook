import { useSelector } from 'react-redux';
import { selectorUserName } from '../../redux/selectors';
import { Button } from '@mui/material';

export const NavbarUser = () => {
  const userName = useSelector(selectorUserName);
  return (
    <div>
      {userName}
      <Button
        variant="text"
        color="secondary"
        sx={{ backgroundColor: 'transparent' }}
      >
        Log out
      </Button>
    </div>
  );
};
