import Header from "./components/header";
import { useSession } from "next-auth/react";
import prisma from "../lib/prisma";
import { GetServerSideProps } from "next";
export default function Home({ feed }) {
  const { data } = useSession();

  console.log(feed.filter((e) => e.userId === data?.user.id));
  // console.log(data?.user.id);
  return (
    <div>
      <Header />
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const feed = await prisma.favorites.findMany({});
  return { props: { feed } };
};
