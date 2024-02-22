import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts-operations';
import { IconButton, ListItem, ListItemText } from '@mui/material';
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
      <ListItemText primary={name} secondary={`Tel.: ${number}`} />

      {/* <Button
        onClick={() => dispatch(deleteContact(id))}
        type="button"
        color="inherit"
        size="small"
      >
        <DeleteIcon />
      </Button> */}
    </ListItem>
  );
};
