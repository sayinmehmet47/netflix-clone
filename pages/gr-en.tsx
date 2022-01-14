import Header from "./components/header";
import { signIn, useSession } from "next-auth/react";
import prisma from "../lib/prisma";
import { GetServerSideProps } from "next";
import Navbar from "./components/navbar";
import Image from "next/image";
import Tv from "../public/images/tv.png";
import mobile from "../public/images/mobile.jpg";
import devicePile from "../public/images/devicePile.png";
import kids from "../public/images/kids.png";
import Dropdown from "./components/dropdown";
import Footer from "./components/footer";
import { useState } from "react";
import Modal from "./components/Modal";

export default function Home({ feed }) {
  const [email, setEmail] = useState<any | null>(null);
  const { data } = useSession();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    signIn("email", { email });
  };
  // console.log(feed.filter((e) => e.userId === data?.user.id));
  // console.log(data?.user.id);
  return (
    <div>
      <div className="bg-netflix  h-screen bg-cover bg-center text-white border-b-8 border-b-solid border-b-slate-400">
        <div className="h-screen bg-black/60 ">
          {/* <Header /> */}
          <Navbar />
          <div className="relative text-center w-full h-full py-40 px-5">
            <h1 className=" text-3xl  font-semibold mx-4 sm:text-5xl">
              Unlimited movies, TV shows, and more.
            </h1>
            <h2 className="text-xl font-medium mt-3 sm:text-2xl">
              Watch anywhere. Cancel anytime.
            </h2>
            <div className="flex justify-center">
              <form className="m-4 flex flex-col" onSubmit={handleSubmit}>
                <h1 className="text-xl mt-2 text-center  text-white mb-2">
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </h1>
                <div className="">
                  <input
                    className="md:p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white md:w-8/12 w-10/12 p-2"
                    placeholder="Email Adress"
                    onChange={(e) => setEmail(e.target.value)}
                    type={"email"}
                  />
                  <button
                    type="submit"
                    className="md:px-10  bg-red-700  text-white font-bold md:p-4 uppercase mt-4 p-2 "
                  >
                    Get Started
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* 1 */}
      <div className=" md:flex bg-black text-white justify-center align-center border-b-8 border-b-solid border-b-slate-600 pb-5">
        <div className="flex-col relative justify-center align-center w-full my-auto p-8 text-left ml-5">
          <h1 className="text-5xl font-bold">Enjoy on your TV.</h1>
          <p className="text-2xl mt-5">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="w-full justify-center flex">
          <Image
            className="object-scale-down "
            width={450}
            height={350}
            src={Tv}
            alt="fd"
          ></Image>
          <div className="absolute max-w-xs mt-12 pt-8">
            <video
              autoPlay
              muted
              loop
              playsInline
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
            ></video>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className=" md:flex bg-black text-white justify-center align-center border-b-8 border-b-solid border-b-slate-600 pb-5">
        <div className="w-full justify-center flex">
          <Image
            className="object-scale-down "
            width={450}
            height={350}
            src={mobile}
            alt="fd"
          ></Image>
        </div>
        <div className="flex-col relative justify-center align-center w-full my-auto p-8 text-left ml-5">
          <h1 className="text-5xl font-bold">
            Download your shows to watch offline.
          </h1>
          <p className="text-2xl mt-5">
            Save your favorites easily and always have something to watch.
          </p>
        </div>
      </div>
      {/* 3 */}
      <div className=" md:flex bg-black text-white justify-center align-center border-b-8 border-b-solid border-b-slate-600 pb-5">
        <div className="flex-col relative justify-center align-center w-full my-auto p-8 text-left ml-5">
          <h1 className="text-5xl font-bold">
            Download your shows to watch offline.
          </h1>
          <p className="text-2xl mt-5">
            Save your favorites easily and always have something to watch.
          </p>
        </div>
        <div className="w-full justify-center flex">
          <Image
            className="object-scale-down z-40"
            width={530}
            height={510}
            src={devicePile}
            alt="fd"
          ></Image>
          <div className="absolute max-w-xs pt-16 mt-14 z-30">
            <video
              autoPlay
              muted
              loop
              playsInline
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
            ></video>
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className=" md:flex bg-black text-white justify-center align-center border-b-8 border-b-solid border-b-slate-600 pb-5">
        <div className="w-full justify-center flex">
          <Image
            className="object-scale-down "
            width={450}
            height={350}
            src={kids}
            alt="fd"
          ></Image>
        </div>
        <div className="flex-col relative justify-center align-center w-full my-auto p-8 text-left ml-5">
          <h1 className="text-5xl font-bold">
            Download your shows to watch offline.
          </h1>
          <p className="text-2xl mt-5">
            Save your favorites easily and always have something to watch.
          </p>
        </div>
      </div>
      {/* 5 */}
      <div className="flex-col bg-black text-white text-center pt-10 justify-center align-center border-b-8 border-b-solid border-b-slate-600 pb-5">
        <h1 className="text-5xl font-bold">Frequently Asked Questions</h1>
        <Dropdown />
        <div className="flex justify-center">
          <form className="m-4 flex flex-col" onSubmit={handleSubmit}>
            <h1 className="text-xl mt-2 text-center  text-white mb-2">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h1>
            <div className="">
              <input
                className="md:p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white md:w-8/12 w-10/12 p-2"
                placeholder="Email Adress"
                onChange={(e) => setEmail(e.target.value)}
                type={"email"}
              />
              <button className="md:px-10  bg-red-600  text-white font-bold md:p-4 uppercase mt-4 p-2 ">
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const feed = await prisma.favorites.findMany({});
  return { props: { feed } };
};
