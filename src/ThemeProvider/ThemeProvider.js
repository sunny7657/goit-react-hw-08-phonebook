import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#776B5D', // light green________brown
    },
    secondary: {
      main: '#F3EEEA', // grey
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
      fontSize: 50,
    },
    h2: {
      fontSize: 44,
    },
    h3: {
      fontSize: 36,
    },
    h4: {
      fontSize: 22,
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
      color: '#302c27', // Default text color
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
            '& input: -webkit-autofill': {
              WebkitBoxShadow: '0 0 0px 1000px #cddc3957 inset',
            }, // background color for autofill
            // '&::placeholder': {
            //   color: '#ccc', // placeholder color for autofill
            // },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#776B5D',
          backgroundColor: '#B0A695', // brown

          '&:hover': {
            color: '#302c27',
          },
        },
      },
    },
  },
});
