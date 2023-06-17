'use client';

import styles from './page.module.css';
import {Typography} from '@mui/material';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Typography variant={'h1'}>shaon</Typography>
      </div>
    </main>
  );
}
