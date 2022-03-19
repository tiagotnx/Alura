import Head from 'next/head';

function PageTitle({ children }) {
  return (
    <Head>
      <title>{children}</title>
    </Head>
  );
}

export default PageTitle;