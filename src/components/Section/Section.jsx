import { Typography } from '@mui/material';
import { theme } from '../../ThemeProvider/ThemeProvider';

export const Section = ({ title, children }) => (
  <>
    <Typography sx={{ ...theme.typography.h2 }}>{title}</Typography>
    {children}
  </>
);
