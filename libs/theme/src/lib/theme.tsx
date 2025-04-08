'use client'
import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'rgb(27, 26, 26)',
      paper: 'rgba(30, 30, 30, 0.95)',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
    fontFamily: `"Roboto", "Arial", sans-serif`,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        html: {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
      },
    },
  },
})
