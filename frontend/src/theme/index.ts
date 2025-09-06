import { createTheme } from '@mui/material';
import { components } from './components';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
      contrastText: '#fff',
    },
    success: {
      main: '#2e7d32',
      light: '#4caf50',
      dark: '#1b5e20',
      contrastText: '#fff',
    },
    error: {
      main: '#d32f2f',
      light: '#ef5350',
      dark: '#c62828',
      contrastText: '#fff',
    },
    warning: {
      main: '#ed6c02',
      light: '#ff9800',
      dark: '#e65100',
      contrastText: '#fff',
    },
    info: {
      main: '#0288d1',
      light: '#03a9f4',
      dark: '#01579b',
      contrastText: '#fff',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.6,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.7,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0,0,0,0.05)',
    '0px 3px 6px rgba(0,0,0,0.07)',
    '0px 3px 8px rgba(0,0,0,0.08)',
    '0px 4px 10px rgba(0,0,0,0.09)',
    '0px 5px 12px rgba(0,0,0,0.10)',
    '0px 5px 14px rgba(0,0,0,0.11)',
    '0px 6px 16px rgba(0,0,0,0.12)',
    '0px 7px 18px rgba(0,0,0,0.13)',
    '0px 8px 20px rgba(0,0,0,0.14)',
    '0px 9px 22px rgba(0,0,0,0.15)',
    '0px 10px 24px rgba(0,0,0,0.16)',
    '0px 11px 26px rgba(0,0,0,0.17)',
    '0px 12px 28px rgba(0,0,0,0.18)',
    '0px 13px 30px rgba(0,0,0,0.19)',
    '0px 14px 32px rgba(0,0,0,0.20)',
    '0px 15px 34px rgba(0,0,0,0.21)',
    '0px 16px 36px rgba(0,0,0,0.22)',
    '0px 17px 38px rgba(0,0,0,0.23)',
    '0px 18px 40px rgba(0,0,0,0.24)',
    '0px 19px 42px rgba(0,0,0,0.25)',
    '0px 20px 44px rgba(0,0,0,0.26)',
    '0px 21px 46px rgba(0,0,0,0.27)',
    '0px 22px 48px rgba(0,0,0,0.28)',
    '0px 24px 50px rgba(0,0,0,0.30)',
  ],
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  components: components,
});