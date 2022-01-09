import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import profile from "../../public/images/profile.png";
export default function DropdownUser() {
  // const [inLoading, setInLoading] = useState(false);
  const [active, setActive] = useState(false);
  const { data: session, status } = useSession();
  const userImage =
    status === "authenticated" ? `${session.user.image}` : profile;
  console.log(userImage);
  console.log(status);
  console.log(session);
  const handleAccountDropDown = () => {
    setActive(true);
  };
  const handleAccountDropUp = () => {
    setActive(false);
  };

  return (
    <div className="">
      <div className="account-menu relative cursor-pointer mx-4 ">
        <div
          onMouseEnter={handleAccountDropDown}
          onMouseLeave={handleAccountDropUp}
          onClick={() => setActive(!active)}
          className="flex items-center"
        >
          <div className="relative flex  w-8 h-8">
            <Image
              width={40}
              height={40}
              className="mr-3 rounded"
              src={userImage}
              alt="img"
            />
            <IoMdArrowDropup
              onMouseEnter={handleAccountDropDown}
              onMouseLeave={handleAccountDropUp}
              className={`text-nx-gray-200 text-3xl -bottom-7 ${
                active ? "absolute" : "hidden"
              }`}
            />
          </div>
          <IoMdArrowDropdown
            className={`text-2xl ml-1.5 ${
              active
                ? "transform rotate-180 duration-300 ease-out"
                : "transform duration-300 ease-out"
            }`}
          />
        </div>
        <div
          onMouseEnter={handleAccountDropDown}
          onMouseLeave={handleAccountDropUp}
          className={`flex  flex-col border border-solid border-white border-opacity-30  ${
            active
              ? "absolute w-44 pb-5 bg-black/60 text-white right-0 top-14 min-w-full transform duration-150 ease-out"
              : "hidden"
          }`}
        >
          <ul className="h-auto px-0 pt-3 pb-1 w-full">
            <li className="py-1 px-3 hover:underline leading-8 flex">
              <Image
                width={40}
                height={40}
                className="mr-3 rounded"
                src={profile}
                alt="img"
              />
              <span className="ml-3">User</span>
            </li>
            <li className="py-1 px-3 hover:underline leading-8 flex">
              {/* <Image
                width={40}
                height={40}
                className="mr-3"
                src={status === "authenticated" ? session.user.image : profile}
                alt="img"
              /> */}
              <span className="ml-3"> Kids</span>
            </li>
            <li className="py-1 px-3 hover:underline leading-8">
              <span className="ml-2">Profile Settings</span>
            </li>
          </ul>
          <ul className="h-auto px-0 pl-3 w-full border-t border-solid border-white border-opacity-30 ">
            <li className=" hover:underline ">Account</li>
            <li className=" hover:underline ">Help Center</li>
            <li
              className=" hover:underline "
              onClick={() =>
                signOut({ callbackUrl: process.env.NEXT_PUBLIC_BASE_URL })
              }
            >
              Sign Out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
