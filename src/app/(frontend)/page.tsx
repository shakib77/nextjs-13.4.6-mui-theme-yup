import dynamic from 'next/dynamic';

const DynamicHomePage = dynamic(() => import('../../../modules/HomePage'), {
  loading: () => <p>Loading...</p>,
});

async function getData() {
  try {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/posts?start=0&_limit=10',
    );

    return res.json();
  } catch (e) {
    console.log('e', e);
    return [];
    // throw e;
  }
}

export default async function Home() {
  const data = await getData();
  // console.log('data->', data);
  return (
    <>
      <DynamicHomePage data={data} />
    </>
  );
}
