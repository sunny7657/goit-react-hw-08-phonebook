import { Typography } from '@mui/material';
import {
  StyledSignupContainer,
  StyledSignupSection,
} from './SignupPage.styled';
import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <StyledSignupSection>
      <StyledSignupContainer>
        <Typography variant="h1">Log in</Typography>
        {/* {authLoading && <AppLoader />} */}
        <LoginForm />
        {/* {authError && <p>Error: {authError}</p>} */}
      </StyledSignupContainer>
    </StyledSignupSection>
  );
};

export default LoginPage;
