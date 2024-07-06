import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        textAlign: 'center',
        bgcolor: '#f3eeea',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        position: 'relative',
        bottom: 0,
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} My Contacts App
      </Typography>
    </Box>
  );
};

export default Footer;
