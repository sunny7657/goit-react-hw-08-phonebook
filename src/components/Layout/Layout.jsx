import { Box, Container, CssBaseline, useTheme } from '@mui/material';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';

const Layout = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Box
        component="main"
        sx={{
          flex: 1,
          minHeight: 'calc(100vh - 64px - 56px )',
          paddingTop: '32px',
          paddingBottom: '28px',
          [theme.breakpoints.up('sm')]: {
            paddingTop: '46px',
            paddingBottom: '46px',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ paddingTop: 4, paddingBottom: 2 }}>
          {children}
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
