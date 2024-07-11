import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/filter-slice';
import { Box, TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: 2, // Margin bottom
      }}
    >
      <TextField
        type="search"
        name="filter"
        label="Find contacts"
        onChange={changeFilter}
        size="small"
        fullWidth
        sx={{
          maxWidth: '400px', // Maximum width for larger screens
        }}
      />
    </Box>
  );
};
