import { Typography } from '@mui/material';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import {
  selectAuthError,
  selectAuthLoading,
  selectIsLogin,
} from '../redux/selectors';
import { useSelector } from 'react-redux';
import { AppLoader } from 'components/Loader/Loader';
import { Navigate } from 'react-router-dom';
import {
  StyledSignupContainer,
  StyledSignupSection,
} from './SignupPage.styled';

const RegisterPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  const isLogin = useSelector(selectIsLogin);

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <StyledSignupSection>
      <StyledSignupContainer>
        <Typography variant="h1">Registration</Typography>
        {authLoading && <AppLoader />}
        <RegistrationForm />
        {authError && <p>Error: {authError}</p>}
      </StyledSignupContainer>
    </StyledSignupSection>
  );
};

export default RegisterPage;
