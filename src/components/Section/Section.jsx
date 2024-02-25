import { Typography, useTheme } from '@mui/material';

export const Section = ({ title, children }) => {
  const theme = useTheme();
  return (
    <>
      <Typography sx={{ ...theme.typography.h2 }}>{title}</Typography>
      {children}
    </>
  );
};
