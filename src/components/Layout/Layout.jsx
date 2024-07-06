import { Box, Container, CssBaseline } from '@mui/material';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: 'calc(100vh - 64px )',
        }}
      >
        <Box
          component="main"
          sx={{
            flex: 1,
            paddingTop: '64px',
            paddingBottom: '56px',
          }}
        >
          <Container maxWidth="lg" sx={{ paddingTop: 4, paddingBottom: 2 }}>
            {children}
          </Container>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
