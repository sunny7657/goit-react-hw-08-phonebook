import { Alert, Typography } from '@mui/material';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { selectAuthError, selectAuthLoading } from '../redux/selectors';
import { useSelector } from 'react-redux';
import { AppLoader } from 'components/Loader/Loader';
import {
  StyledSignupContainer,
  StyledSignupSection,
} from './SignupPage.styled';

const RegisterPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  return (
    <StyledSignupSection>
      <StyledSignupContainer>
        <Typography variant="h1">Registration</Typography>
        {authLoading && <AppLoader />}
        <RegistrationForm />
        {authError && (
          <Alert variant="outlined" severity="error">
            Error: {authError}
          </Alert>
        )}
      </StyledSignupContainer>
    </StyledSignupSection>
  );
};

export default RegisterPage;
