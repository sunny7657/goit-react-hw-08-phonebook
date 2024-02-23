import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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
    button: {
      color: 'white',
      backgroundColor: '#B0BEC5',
      '&:hover': {
        backgroundColor: '#90A4AE',
      },
    },
    input: {},
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

    // Custom style for the title
    sectionTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: 'blue',
    },
    components: {
      // Style for input label color
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: '#333', // Customize color for input label
          },
        },
      },
      // Style for button
      MuiButton: {
        styleOverrides: {
          root: {
            color: 'white', // Text color of the button
            backgroundColor: '#9ccc65', // Background color of the button
            '&:hover': {
              backgroundColor: '#8cb252', // Background color of the button on hover
            },
          },
        },
      },
    },
  },
});

export default theme;
