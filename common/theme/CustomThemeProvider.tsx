'use client';

import {ReactNode} from 'react';
import {createTheme, Theme, ThemeProvider} from '@mui/material';
import {typography} from './typography';
import palette from './palette';

const theme: Theme = createTheme({
  palette: palette,
  typography: typography,
});
const CustomThemeProvider = ({children}: {children: ReactNode}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
