import { Alert, Typography } from '@mui/material';
import {
  StyledSignupContainer,
  StyledSignupSection,
} from './SignupPage.styled';
import LoginForm from 'components/LoginForm/LoginForm';
import {
  selectAuthError,
  selectAuthLoading,
  selectIsLogin,
} from '../redux/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AppLoader } from 'components/Loader/Loader';

const LoginPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  const isLogin = useSelector(selectIsLogin);

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <StyledSignupSection>
      <StyledSignupContainer>
        <Typography variant="h1">Log in</Typography>
        {authLoading && <AppLoader />}
        <LoginForm />
        {authError && (
          <Alert variant="outlined" severity="error">
            Error: {authError}
          </Alert>
        )}
      </StyledSignupContainer>
    </StyledSignupSection>
  );
};

export default LoginPage;
