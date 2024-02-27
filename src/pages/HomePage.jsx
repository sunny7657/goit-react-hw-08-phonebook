import { StyledHomeSection, StyledHomeContainer } from './HomePage.styled';
import { Typography } from '@mui/material';

const HomePage = () => {
  return (
    <StyledHomeSection>
      <StyledHomeContainer>
        <Typography variant="h1">Welcome!</Typography>
        {/* <Typography variant="h3">
          Please, sign up / log in to access your own phonebook!
        </Typography> */}
      </StyledHomeContainer>
    </StyledHomeSection>
  );
};

export default HomePage;
