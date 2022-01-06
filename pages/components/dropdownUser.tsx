import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
export default function DropdownUser() {
  // const [inLoading, setInLoading] = useState(false);
  const [active, setActive] = useState(false);
  const handleAccountDropDown = () => {
    setActive(true);
  };
  const handleAccountDropUp = () => {
    setActive(false);
  };

  return (
    <div>
      <div className="account-menu relative cursor-pointer mx-4">
        <div
          onMouseEnter={handleAccountDropDown}
          onMouseLeave={handleAccountDropUp}
          onClick={() => setActive(!active)}
          className="flex items-center"
        >
          <div className="relative flex  w-8 h-8  ">
            <img
              className=" w-full rounded"
              src="https://occ-0-4451-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
              alt=""
            ></img>
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
          className={`flex flex-col border border-solid border-white border-opacity-30  ${
            active
              ? "absolute w-44 bg-opac-100 right-0 top-14 min-w-full transform duration-150 ease-out"
              : "hidden"
          }`}
        >
          <ul className="h-auto px-0 pt-3 pb-1 w-full">
            <li className="py-1 px-3 hover:underline leading-8 flex">
              <img
                className="mr-3"
                src="https://occ-0-4451-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYnnca7HCf0z4YHtIK5R8MIGCeMyodAsxBYSBmMkYHqjSw46VWWyNQirfwxT-CkbxPkp-G84Wu-iOMwGG-r9QAs.png?r=f71"
                alt=""
              ></img>
              User
            </li>
            <li className="py-1 px-3 hover:underline leading-8 flex">
              <img
                className="mr-3"
                src="https://occ-0-4451-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABf9uIfUy3k75jnjPf-M5wZdrjcXMLe04_P5az0_eAPb3dECf_y_hunxCmOg5febcU6DyIEc1L18SK7t1vmE6s5o.png?r=fcd"
                alt=""
              ></img>
              Kids
            </li>
            <li className="py-1 px-3 hover:underline leading-8">
              Profil Yönetimi
            </li>
          </ul>
          <ul className="h-auto px-0 py-3 w-full border-t border-solid border-white border-opacity-30 ">
            {/* {translate("browse.navbar.account-card.account", {
              returnObjects: true,
            }).map((links, index) => (
              <li key={index} className="py-1 px-3 hover:underline leading-4">
                {links}
              </li>
            ))} */}
            <button className="py-1 px-3 hover:underline leading-4"></button>
          </ul>
        </div>
      </div>
    </div>
  );
}
