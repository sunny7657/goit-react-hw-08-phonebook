import { Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import { useForm } from 'react-hook-form';
import { Notify } from 'notiflix';

const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm({
    initialValue: {
      email: '',
      password: '',
    },
  });
  const dispatch = useDispatch();

  const handleFormSubmit = async data => {
    const result = await dispatch(login({ ...data }));

    if (result.meta.requestStatus === 'rejected') {
      Notify.failure('The email or password is incorrect. Please, try again.');
      return;
    }

    Notify.success('Welcome back!');
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
        {...register('password', { required: 'This field is required' })}
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

export default LoginForm;
