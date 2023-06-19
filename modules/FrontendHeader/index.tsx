'use client';

import {
  AppBar,
  Box,
  CssBaseline,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import Link from 'next/link';

const PREFIX = 'frontend-header';
const classes = {
  link: `${PREFIX}-link`,
};

const StyledBox = styled(Box)(({theme}) => ({
  display: 'flex',
  marginBottom: '85px',

  [`& .${classes.link}`]: {
    color: theme.palette.common.white,
    textDecoration: 'none',
    padding: '10px',
    margin: '3px',
  },
}));

const FrontendHeader = () => {
  return (
    <StyledBox>
      <CssBaseline />
      <AppBar component='nav'>
        <Toolbar>
          <>
            <Link href={'/'} className={classes.link}>
              <Typography variant={'body1'}>Home</Typography>
            </Link>
            <Link href={'/admin'} className={classes.link}>
              <Typography variant={'body1'}>Dashboard</Typography>
            </Link>
          </>
        </Toolbar>
      </AppBar>
    </StyledBox>
  );
};

export default FrontendHeader;
