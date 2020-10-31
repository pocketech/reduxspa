import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: { main: '#B3424A' },
    secondary: { main: '#227C9D' },
  },
  typography: {
    fontFamily: ["Roboto", "Helvetica", "Arial", 'Noto Sans JP', 'sans-serif'].join(","),
    button: {
      textTransform: 'none'
    }
  },
  props: {
    MuiTextField: {
      variant: 'outlined'
    },
    MuiCheckbox: {
      color: "primary"
    },
    MuiRadio: {
      color: "primary"
    },
    MuiSwitch: {
      color: "primary"
    },
  }
});

export default theme;