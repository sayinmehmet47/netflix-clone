import Image from "next/image";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
const base_url = "https://www.themoviedb.org/t/p/w220_and_h330_face//";

type Props = {
  name: String;
  fetchUrl: String;
  width: number;
  height: number;
};

const CarouselComponent: FunctionComponent<Props> = ({
  name,
  fetchUrl,
  width,
  height,
}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://api.themoviedb.org/3${fetchUrl}`
      );
      setMovies(response.data.results);
    }
    fetchData();
  }, [fetchUrl]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  return (
    <div className="bg-black text-white ">
      <h1 className="text-3xl py-5 pl-10 ">{name}</h1>
      <Carousel responsive={responsive} className="pl-10 py-10">
        {movies.map((e) => {
          return (
            <div key={e.id} className="cursor-pointer">
              <div>
                <Image
                  className="rounded"
                  width={width}
                  height={height}
                  alt="fd"
                  src={`${base_url}${e.poster_path}`}
                />
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default CarouselComponent;
