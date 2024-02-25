import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts-operations';
import {
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => dispatch(deleteContact(id))}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText
        primary={<Typography variant="body1">{name}</Typography>}
        secondary={<Typography variant="body2">Tel.: {number}</Typography>}
      />
      <Divider />
    </ListItem>
  );
};
