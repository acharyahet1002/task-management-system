import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    sidebar: {
      dark: '#33691E',
      main: '#8BC34A',
      light: '#AED581',
      contrastText: '#fff',
    },
    button: {
      dark: '#33691E',
      main: '#8BC34A',
      light: '#AED581',
      contrastText: '#fff',
    },
    input: {
      dark: '#33691E',
      main: '#8BC34A',
      light: '#AED581',
      contrastText: '#fff',
    },
    text: {
      dark: '#33691E',
      main: '#8BC34A',
      light: '#AED581',
      contrastText: '#fff',
    },
  },
  typography: {
    h1: {
      fontSize: 96,
      fontWeight: 'normal',
      letterSpacing: -1.5,
    },
    h2: {
      fontSize: 60,
      letterSpacing: -0.5,
    },
    h3: {
      fontSize: 48,
      letterSpacing: 0,
    },
    h4: {
      fontSize: 34,
      letterSpacing: 0.25,
    },
    h5: {
      fontSize: 24,
      letterSpacing: 0,
    },
    h6: {
      fontSize: 20,
      letterSpacing: 0.15,
    },
    subtitle1: {
      fontSize: 16,
      letterSpacing: 0.15,
    },
    subtitle2: {
      fontSize: 14,
      letterSpacing: 0.1,
    },
    body1: {
      fontSize: 16,
      letterSpacing: 0.5,
    },
    body2: {
      fontSize: 14,
      letterSpacing: 0.25,
    },
    button: {
      fontSize: 14,
      letterSpacing: 1.25,
      textTransform: 'uppercase',
    },
    caption: {
      fontSize: 14,
      letterSpacing: 1.25,
    },
    overline: {
      fontSize: 10,
      letterSpacing: 1.5,
      textTransform: 'uppercase',
    },
  },
})
