import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#9ccc65', // light green
    },
    secondary: {
      main: '#78909c', // grey
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
      color: '#90A4AE',
    },
    sectionTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: 'blue',
    },
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-root': {
            borderColor: 'rgba(0, 0, 0, 0.8)',
          },
        },
      },
    },
    MuiInputLabel: {
      // Corrected to MuiInputLabel
      styleOverrides: {
        root: {
          color: '#78909c', // Customize color for input label
        },
      },
    },
    MuiOutlinedInput: {
      // Added MuiOutlinedInput to target the input itself
      styleOverrides: {
        root: {
          borderColor: '#78909c', // Customize border color for input
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'white',
          backgroundColor: '#795548ab',
          '&:hover': {
            backgroundColor: '#795548d4',
          },
        },
      },
    },
  },
});
