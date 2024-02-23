import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter-slice';
import { Box, TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1.5, width: '35ch' },
      }}
    >
      <TextField
        type="search"
        name="filter"
        label="Find contacts by name"
        onChange={changeFilter}
        size="small"
      />
    </Box>
  );
};
