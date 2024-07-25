import { Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/auth-operations';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Notify } from 'notiflix';

const registrationSchema = Yup.object().shape({
  name: Yup.string()
    .required('This field is required')
    .matches(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
  email: Yup.string()
    .email('Invalid email address')
    .required('This field is required')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required('This field is required')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/,
      'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number'
    ),
});

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const dispatch = useDispatch();

  const handleFormSubmit = async data => {
    const result = await dispatch(signup({ ...data }));

    if (result.meta.requestStatus === 'rejected') {
      Notify.failure(
        'This email is already in use, or the password is incorrect. Please, try again.'
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
        label="Name"
        error={!!errors.name}
        helperText={errors.name?.message}
        {...register('name')}
      />
      <TextField
        type="email"
        label="Email"
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register('email')}
      />
      <TextField
        type="password"
        label="Password"
        error={!!errors.password}
        helperText={errors.password?.message}
        {...register('password')}
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
