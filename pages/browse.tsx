import { GetStaticProps } from "next";
import React from "react";
import { getData } from "./api/randomMovie";
import { BsPlayFill } from "react-icons/bs";
import { IoAlertCircleOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import CarouselComponent from "./components/Carousel";
import fetchRequest from "./fetchRequest";
import DropdownUser from "./components/dropdownUser";
export default function Browse({ movies }) {
  console.log(movies);
  const { poster_path, original_title, overview } = movies;
  const firstLine = overview.split(".")[0];
  const path = `https://www.themoviedb.org/t/p/w1280_and_h720_multi_faces/${poster_path}`;
  return (
    <div>
      <div
        className={` h-screen bg-cover  bg-center text-gray-100 `}
        style={{ backgroundImage: `url(${path})` }}
      >
        <nav className="grid grid-cols-2 py-2  text-white  bg-black/60">
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
          <ul className="flex ml-10  pt-3 col-end-6 mr-10 align-middle">
            <BsSearch className="mt-1" />
            <li className="mx-2">Kids</li>
            <BsBell className="mt-1" />
            <DropdownUser />
          </ul>
        </nav>
        <div className="absolute left-20 top-1/4 w-2/5">
          <h1 className="text-5xl mb-3">{original_title}</h1>
          <h1>{firstLine ? firstLine : "fdsf"}.</h1>
          <div className="flex mt-5">
            <button className="bg-white text-black rounded whitespace-nowrap mr-5 px-8 py-3 xlm:px-5 xlm:py1 flex items-center">
              <BsPlayFill className="text-3xl" />
              <p className="mx-5 text=2xl">Play</p>
            </button>
            <button className="bg-gray-400  rounded whitespace-nowrap px-8 py-3 xlm:px-5 xlm:py1 flex items-center">
              <IoAlertCircleOutline className="text-3xl" />
              <p className="text-black mx-5">More Info</p>
            </button>
          </div>
        </div>
      </div>
      <CarouselComponent
        name="Netflix Originals"
        fetchUrl={fetchRequest.trendingFetch}
      />
      <CarouselComponent
        name="Trending Now"
        fetchUrl={fetchRequest.topRatedFetch}
      />
      <CarouselComponent
        name="Comedies"
        fetchUrl={fetchRequest.comedyMovieFetch}
      />
      <CarouselComponent
        name="Actions"
        fetchUrl={fetchRequest.actionMovieFetch}
      />
      <CarouselComponent
        name="Horror"
        fetchUrl={fetchRequest.horrorMovieFetch}
      />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const movies = await getData();

  return {
    props: { movies },
  };
};