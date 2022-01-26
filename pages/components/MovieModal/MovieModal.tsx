import React, { useEffect, useState } from "react";
import styles from "./MovieModal.module.css";
import {
  AiFillCloseCircle,
  AiOutlineLike,
  AiOutlineDislike,
} from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import { FiPlayCircle } from "react-icons/fi";
import { MdAddCircle } from "react-icons/md";
import Image from "next/image";
type Props = {
  setModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  movieSelected: {
    backdrop_path: string;
    title: string;
    overview: string;
    name: string;
    release_date: Date;
    first_air_date: Date;
    vote_average: Number;
  };
};

export default function MovieModal({
  setModalVisibility,
  movieSelected,
}: Props) {
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(
      `https://www.themoviedb.org/t/p/w1280_and_h720_multi_faces/${movieSelected?.backdrop_path}`
    );
  }, [movieSelected]);

  console.log(movieSelected);

  return (
    <div
      id={styles.noScrollbar}
      className="fixed overflow-y-scroll h-96 z-40  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md bg-zinc-800"
    >
      {path && (
        <Image
          id={styles.lightboxImg}
          width={1280}
          height={720}
          alt="fd"
          src={path}
        />
      )}

      {/* <h1>{path}</h1> */}
      <button
        className="fixed top-2 right-3"
        onClick={() => setModalVisibility(false)}
      >
        <AiFillCloseCircle className="text-3xl " />
      </button>

      <div className=" flex relative bottom-12 left-2">
        <button className="bg-white px-5 rounded py-1 mx-1">
          <FiPlayCircle className="md:text-3xl text-black" />
        </button>
        <MdAddCircle className="md:text-3xl mx-1" />
        <AiOutlineLike className="md:text-3xl mx-1" />
        <AiOutlineDislike className="md:text-3xl mx-1" />
      </div>
      <div className="relative bottom-8 mx-5">
        <h1 className="text-green-500 text-2xl font-bold">
          {movieSelected?.vote_average}
          <span className="text-lg text-white ml-2">
            {" "}
            {movieSelected?.title}
          </span>
        </h1>
        <h3 className="text-sm">{movieSelected?.overview}</h3>
      </div>
    </div>
  );
}
