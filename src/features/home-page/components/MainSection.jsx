import React from "react";
import MovieCard from "./MovieCard";
import {
  breakingBad,
  fifthMovie,
  fourthMovie,
  friends,
  gameOfThrones,
  sixthMovie,
} from "../../../assets";

const movies = [
  {
    img: breakingBad,
    title: "Breaking Bad",
  },
  {
    img: gameOfThrones,
    title: "Game Of Thrones",
  },
  {
    img: friends,
    title: "Friends",
  },
  {
    img: fourthMovie,
    title: "عدنيات",
  },
  {
    img: fifthMovie,
    title: "غناوي",
  },
  {
    img: sixthMovie,
    title: "ركز شوي",
  },
];

const MainSection = () => {
  return (
    <div className="my-10 p-10 shadow-lg rounded-lg">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-5">
        {movies.map((movie, i) => (
          <MovieCard key={i} title={movie.title} img={movie.img} />
        ))}
      </div>
    </div>
  );
};

export default MainSection;
