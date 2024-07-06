import { Box, Button, TextField } from '@mui/material';

import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/auth-operations';
import { useForm } from 'react-hook-form';
import { Notify } from 'notiflix';

const RegistrationForm = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { name: '', email: '', password: '' },
  });

  const dispatch = useDispatch();

  const handleFormSubmit = async data => {
    const result = await dispatch(signup({ ...data }));

    if (result.meta.requestStatus === 'rejected') {
      Notify.failure(
        'This email is already in use, or the password is incorrect.'
      );
      return;
    }

    Notify.success('Welcome!');
    reset();
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1.5, minWidth: '360px' },
      }}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <TextField
        type="text"
        name="name"
        label="Name"
        required
        {...register('name', { required: 'This field is required' })}
      />
      <TextField
        type="email"
        name="email"
        label="Email"
        required
        {...register('email', { required: 'This field is required' })}
      />
      <TextField
        type="password"
        name="password"
        label="Password"
        required
        {...register('password', {
          required: 'Please, enter at list 8 symbols',
        })}
      />
      <Button
        type="submit"
        sx={{
          mt: 2,
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default RegistrationForm;
