import Image from "next/image";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
const base_url = "https://www.themoviedb.org/t/p/w220_and_h330_face//";
export default function CarouselComponent({ name, fetchUrl }) {
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
  console.log(movies);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="bg-black text-white">
      <h1 className="text-3xl py-5 pl-10">{name}</h1>
      <Carousel responsive={responsive} className="pl-10 py-10">
        {movies.map((e) => {
          return (
            <div key={e.id} className="transform hover:scale-105">
              <Image
                width={250}
                height={350}
                alt="fd"
                src={`${base_url}${e.poster_path}`}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
