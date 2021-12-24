import Header from "./components/header";
import { useSession } from "next-auth/react";
import prisma from "../lib/prisma";
import { GetServerSideProps } from "next";
import Navbar from "./components/navbar";
export default function Home({ feed }) {
  const { data } = useSession();

  console.log(feed.filter((e) => e.userId === data?.user.id));
  console.log(data?.user.id);
  return (
    <div className="bg-netflix  h-screen bg-cover bg-center text-white">
      <div className="h-screen bg-black/60 ">
        {/* <Header /> */}
        <Navbar />
        <div className="relative text-center w-full h-full py-40 px-5">
          <h1 className=" text-5xl  font-semibold mx-4">
            Unlimited movies, TV shows, and more.
          </h1>
          <h2 className="text-2xl font-medium mt-3">
            Watch anywhere. Cancel anytime.
          </h2>
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const feed = await prisma.favorites.findMany({});
  return { props: { feed } };
};
