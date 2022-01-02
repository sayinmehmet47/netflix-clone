import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../public/images/Netflix_Logo2.png";
import { GoMarkGithub } from "react-icons/go";
import { signIn } from "next-auth/react";
export default function Login() {
  const [email, setEmail] = useState<any | null>(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn("email", { email });
  };
  return (
    <div className="bg-netflix  h-full bg-cover bg-center ">
      <nav className="bg-black/40">
        <li className="cursor-pointer">
          <Image src={logo} width={220} height={100} alt="logo" />
        </li>
      </nav>
      <div className="flex justify-center h-screen align-middle  bg-black/40">
        {/* <Header /> */}

        <div className="w-screen max-w-lg items-center">
          <form
            className="max-w-lg mx-10 shadow-md rounded px-8 py-20 mb-4 bg-black/80"
            onSubmit={handleSubmit}
          >
            <h1 className="text-white text-4xl mb-4">Sign In</h1>
            {/* <div className="mb-4 pt-4">
              <input
                className="bg-gray-600 shadow appearance-none rounded w-full px-3 py-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              ></input>
            </div> */}
            <div className="mb-6">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-600 shadow appearance-none rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type={"email"}
                placeholder="email"
              ></input>
            </div>
            <div className="">
              <button
                className="block w-full bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <div className="text-gray-300  mt-4 flex justify-between">
                <div>
                  <input type="checkbox" value="fd" className="mx-2" />
                  <label htmlFor="checkbox">Remember me</label>
                </div>
                <a href="" className="">
                  Need Help?
                </a>
              </div>
              <div className="text-gray-300 mt-4 ">
                <div
                  className="flex align-middle cursor-pointer"
                  onClick={() => signIn("github")}
                >
                  <p>Login with Github </p>
                  <GoMarkGithub className="ml-2 mt-1" />
                </div>
                <p className="my-4">New to Netflix?</p>
                <p className="text-sm my-4">
                  This page is protected by Google reCAPTCHA to ensure you`re
                  not a bot.
                  <a href="dfd" className="text-sky-400">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
