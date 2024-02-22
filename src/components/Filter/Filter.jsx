import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter-slice';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <>
      {/* <p>Find contacts by name:</p> */}

      <TextField
        type="search"
        name="filter"
        label="Find contacts by name"
        // placeholder="Find contact"
        onChange={changeFilter}
      />
    </>
  );
};
