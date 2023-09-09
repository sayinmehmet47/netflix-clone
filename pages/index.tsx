import Header from './components/header';
import { useSession } from 'next-auth/react';
import prisma from '../lib/prisma';
import { GetServerSideProps } from 'next';
import Navbar from './components/navbar';
import Head from 'next/head';

export default function Home({ feed }) {
  const { data } = useSession();

  return (
    <div className="bg-netflix   h-screen bg-cover bg-center">
      <Head>
        <meta
          name="google-site-verification"
          content="tsIPr7tuwtFUuym9hEuBkGYAe7oZzebwImKTiSXFH0Q"
        />
      </Head>
      <div className="h-screen bg-black/60">
        {/* <Header /> */}
        <Navbar />
      </div>
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const feed = await prisma.favorites.findMany({});
  return { props: { feed } };
};
