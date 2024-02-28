import { Alert, Typography } from '@mui/material';
import {
  StyledSignupContainer,
  StyledSignupSection,
} from './SignupPage.styled';
import LoginForm from 'components/LoginForm/LoginForm';
import { selectAuthError, selectAuthLoading } from '../redux/selectors';
import { useSelector } from 'react-redux';
import { AppLoader } from 'components/Loader/Loader';

const LoginPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

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
