import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import {
  Card,
  CardContent,
  IconButton,
  Typography,
  CardActions,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const ContactItem = ({ contact: { id, name, number }, onEdit }) => {
  const dispatch = useDispatch();

  return (
    <Card
      variant="outlined"
      sx={{
        mb: 2,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: '#f9f9f9',
        '@media (max-width: 600px)': {
          width: '100%',
        },
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '200px',
            }}
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tel.: {number}
          </Typography>
        </Box>
        <CardActions
          sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}
        >
          <IconButton aria-label="edit" onClick={() => onEdit(id)}>
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => dispatch(deleteContact(id))}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};
