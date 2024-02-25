import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#9ccc65', // light green
    },
    secondary: {
      main: '#5f3e0c', // grey
    },
    text: {
      primary: '#2b2b2b', // dark
    },
    error: {
      main: '#d84315', // red
    },
  },

  typography: {
    h1: {
      fontSize: 60,
    },
    h2: {
      fontSize: 48,
    },
    h3: {
      fontSize: 40,
    },
    h4: {
      fontSize: 20,
    },
    subtitle: {
      fontSize: 20,
    },
    body1: {
      fontSize: 20,
    },
    body2: {
      fontSize: 16,
    },
    allVariants: {
      color: '#2b2b2b', // Default text color
    },
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label': {
            color: '#548b56', //   input label color
          },
          '& label.Mui-focused': {
            color: 'green', //  focused input label
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: '1px solid #795548ab', // border color for input
            },
            '&:hover fieldset': {
              border: '2px solid #795548ab', // border color for hovered input
            },
            '&.Mui-focused fieldset': {
              borderColor: '#795548ab', //  focused input border
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'white',
          backgroundColor: '#795548ab', // brown

          '&:hover': {
            backgroundColor: '#795548d4',
          },
        },
      },
    },
  },
});
