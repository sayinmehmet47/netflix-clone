import { GetStaticProps } from "next";
import React from "react";
import { getData } from "./api/randomMovie";
import { getServerSideProps } from "./gr-en";

export default function Browse({ movies }) {
  console.log(movies);
  const { poster_path } = movies;
  const path = `https://www.themoviedb.org/t/p/w1280_and_h720_multi_faces/${poster_path}`;
  return (
    <div
      className={` h-screen bg-cover  bg-center text-white border-b-8 border-b-solid border-b-slate-400`}
      style={{ backgroundImage: `url(${path})` }}
    >
      <nav className="grid grid-cols-2 py-2 text-white  bg-black/60">
        <div className="flex col-span-full ml-10">
          <div className="text-white  mt-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=""
              fill="none"
              viewBox="0 0 300 81.387"
              width="10vw"
              height="8vh"
            >
              <g fill="#e50914">
                <path d="M256.09 76.212c4.178.405 8.354.84 12.52 1.29l9.198-22.712 8.743 24.807c4.486.562 8.97 1.152 13.44 1.768l-15.328-43.501L299.996 0H287.01l-.135.186-8.283 20.455L271.32.003h-12.822l13.237 37.565-15.644 38.644zM246.393 75.322V0h-12.817v74.265c4.275.33 8.552.684 12.817 1.056M150.113 71.11c3.46 0 6.916.026 10.366.054V43.492h15.397V31.708H160.48v-19.91h17.733V0h-30.6v71.12c.831 0 1.666-.013 2.5-.01M110.319 71.83c4.27-.152 8.544-.28 12.824-.384V11.8h11.98V.003H98.339V11.8h11.982v60.03h-.002zM12.295 79.772V34.897L27.471 77.96c4.667-.524 9.341-1.017 14.028-1.483V.001H29.201v46.483L12.825.001H0v81.384h.077c4.063-.562 8.14-1.096 12.218-1.613M85.98 11.797V.001H55.377V75.202a1100.584 1100.584 0 0 1 30.578-2.211V61.184c-5.916.344-11.82.74-17.71 1.181V43.497h15.397V31.706H68.245V11.797H85.98zM203.614 60.62V-.003h-12.873v71.876c10.24.376 20.44.9 30.606 1.56V61.619c-5.9-.381-11.81-.712-17.733-1" />
              </g>
            </svg>
          </div>
          <ul className="flex ml-10 mt-4">
            <li className="mx-2">Home</li>
            <li className="mx-2">TV Shows</li>
            <li className="mx-2">Movies</li>
            <li className="mx-2">New & Popular</li>
            <li className="mx-2">My List</li>
          </ul>
        </div>
        <ul className="flex ml-10  pt-3 col-end-6 mr-10">
          <li className="mx-2">Search</li>
          <li className="mx-2">Kids</li>
          <li className="mx-2">Bell</li>
          <li className="mx-2">User</li>
          <li className="mx-2">My List</li>
        </ul>
      </nav>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const movies = await getData();

  console.log(movies);
  return {
    props: { movies },
  };
};
