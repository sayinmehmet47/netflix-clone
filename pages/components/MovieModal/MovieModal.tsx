import React from "react";
import styles from "./MovieModal.module.css";
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
  const path = `https://www.themoviedb.org/t/p/w1280_and_h720_multi_faces/${movieSelected.backdrop_path}`;

  console.log(movieSelected.backdrop_path);

  return (
    <div
      id={styles.noScrollbar}
      className="fixed overflow-y-scroll h-96 z-40  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md bg-zinc-800"
    >
      <Image
        id={styles.lightboxImg}
        width={1280}
        height={720}
        alt="fd"
        src={path}
      />

      <h1>fdsfkl</h1>
      <h1>fdsfkl</h1>

      <h1>fdsfkl</h1>

      <h1>fdsfkl</h1>
      <h1>fdsfkl</h1>
      <h1>fdsfkl</h1>

      <h1>fdsfkl</h1>
      <h1>fdsfkl</h1>
      <h1>fdsfkl</h1>
      <h1>fdsfkl</h1>
      <h1>fdsfkl</h1>
      <h1>fdsfkl</h1>
      <h1>fdsfkl</h1>
    </div>
  );
}
