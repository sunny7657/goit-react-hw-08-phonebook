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
      <TextField
        type="search"
        name="filter"
        label="Find contacts by name"
        onChange={changeFilter}
        style={{}}
      />
    </>
  );
};
