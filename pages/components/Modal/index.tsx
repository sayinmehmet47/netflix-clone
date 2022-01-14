import Image from "next/image";
import React, { useContext, useState } from "react";
import Kids from "../../../public/images/kids.png";

export default function Modal({ props }) {
  const [onPicture, setOnPicture] = useState(false);
  console.log(props);
  const { title, overview } = props;

  return (
    <div
      className=" text-black absolute z-50"
      onMouseEnter={() => setOnPicture(true)}
      onMouseLeave={() => setOnPicture(false)}
    >
      <div
        className={` flex items-center justify-center bg-gray-700 bg-opacity-50  ${
          onPicture ? "scale-150" : "hidden"
        }`}
      >
        <div className="max-w-lg p-6 bg-white divide-y divide-gray-500">
          <div className="mt-4">
            <Image src={Kids} alt="fd" width={320} height={320} />

            <h2>{overview}</h2>
            {/* <button className="px-4 py-2 text-white bg-red-600 rounded">
              Cancel
            </button>
            <button className="px-4 py-2 text-white bg-green-600 rounded">
              Save
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
