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
        width: '100%', // Set card width to 100%
        '@media (min-width:600px)': {
          width: 'auto', // Set card width to auto on larger screens
        },
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row', // Ensure items are in a row
          '@media (max-width:600px)': {
            flexDirection: 'column', // Stack items vertically on small screens
            alignItems: 'flex-start', // Align items to start on small screens
          },
        }}
      >
        <Box
          sx={{
            flex: 1, // Allow content to take remaining space
          }}
        >
          <Typography variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tel.: {number}
          </Typography>
        </Box>
        <CardActions
          sx={{
            marginLeft: 'auto',
            '@media (max-width:600px)': {
              marginTop: 1, // Add margin-top on small screens
              marginLeft: 0, // Remove left margin on small screens
            },
          }}
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
