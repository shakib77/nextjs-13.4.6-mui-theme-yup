import {TypographyOptions} from '@mui/material/styles/createTypography';

export enum Fonts {
  LIGHT = 300,
  REGULAR = 400,
  MEDIUM = 500,
  SEMI_BOLD = 600,
  BOLD = 700,
}
export const typography = (): TypographyOptions => {
  return {
    htmlFontSize: 16,
    fontWeightLight: Fonts.LIGHT,
    fontWeightRegular: Fonts.REGULAR,
    fontWeightMedium: Fonts.MEDIUM,
    fontWeightBold: Fonts.BOLD,
    h1: {
      fontWeight: Fonts.BOLD,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: Fonts.BOLD,
      fontSize: '1.875rem',
    },
    h3: {
      fontWeight: Fonts.BOLD,
      fontSize: '1.25rem',
    },
    h4: {
      fontWeight: Fonts.BOLD,
      fontSize: '1.125rem',
    },
    h5: {
      fontWeight: Fonts.SEMI_BOLD,
      fontSize: '0.875rem',
    },
    h6: {
      fontWeight: Fonts.MEDIUM,
      fontSize: '1.25rem',
    },
    subtitle1: {
      fontWeight: Fonts.REGULAR,
      fontSize: '1.25rem',
    },
    subtitle2: {
      fontWeight: Fonts.MEDIUM,
      fontSize: '1rem',
    },
    body1: {
      fontWeight: Fonts.REGULAR,
      fontSize: '1rem',
    },
    body2: {
      fontWeight: Fonts.REGULAR,
      fontSize: '0.875rem',
    },
    caption: {
      fontWeight: Fonts.REGULAR,
      fontSize: '0.75rem',
    },
    button: {
      fontWeight: Fonts.MEDIUM,
      fontSize: '1.25rem',
    },
    overline: {
      fontWeight: Fonts.REGULAR,
      fontSize: '0.75rem',
    },
  };
};
