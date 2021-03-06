import Image from "next/image";

import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import Link from "next/link";
import MovieModal from "./MovieModal/MovieModal";
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
  const [loading, setLoading] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [movieSelected, setMovieSelection] = useState();

  const handleClick = (movie) => {
    setModalVisibility(true);
    setMovieSelection(movie);
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const response = await axios.get(
        `https://api.themoviedb.org/3${fetchUrl}`
      );
      setMovies(response.data.results);
      setLoading(false);
    }
    fetchData();
  }, [fetchUrl]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 3,
    },
  };
  return (
    <div className="bg-black text-white">
      <h1 className="text-3xl py-5 px-10 ">{name}</h1>

      <Carousel
        customTransition="all .5s ease-in-out"
        transitionDuration={500}
        swipeable
        draggable
        responsive={responsive}
        className="w-full "
      >
        {!loading ? (
          movies.map((e, index) => {
            return (
              <div key={index} className="cursor-pointer hover:scale-110">
                <div>
                  <Image
                    onClick={() => handleClick(e)}
                    className="rounded shadow-xl"
                    width={width}
                    height={height}
                    alt="fd"
                    src={`${base_url}${e.poster_path}`}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </Carousel>
      {modalVisibility && (
        <MovieModal
          movieSelected={movieSelected}
          setModalVisibility={setModalVisibility}
        />
      )}
    </div>
  );
};
export default CarouselComponent;
