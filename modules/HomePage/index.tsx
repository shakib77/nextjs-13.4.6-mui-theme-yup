'use client';

import {Card, CardContent, Container, Grid, Typography} from '@mui/material';

const CardComponent = ({post}: any) => {
  return (
    <Card sx={{height: '100%'}}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {post.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {post.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

const HomePage = ({data}: {data: any[]}) => {
  console.log(data);
  return (
    <Container maxWidth={'lg'}>
      <Grid container spacing={3}>
        {data &&
          data.length > 0 &&
          data.map((post: any) => (
            <Grid key={post.id} item xs={3}>
              <CardComponent post={post} />
            </Grid>
          ))}
      </Grid>
      {/*<main>
        <Typography variant={'h1'}>shaon</Typography>
      </main>*/}
    </Container>
  );
};

export default HomePage;
