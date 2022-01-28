import React from "react";
import "tailwindcss/tailwind.css";
import ReactStars from "react-stars";

interface MediaCardProps {
  imageUrl: string;

  title: string;

  imdbRating: number;

  userRating: number;

  trailerUrl: string;

  genres: string[];
}

export const MediaCard = ({
  title = "The Dark Knight",
  imdbRating = 9.0,
  userRating = 9.2,
  imageUrl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  trailerUrl = "https://www.youtube.com/watch?v=EXeTwQWrcwY",
  genres = ["Action", "Superhero", "Drama"],
}: MediaCardProps) => {
  return (
    <div className="group bg-blue-600 w-max">
      <img
        className=" h-64 w-48"
        src={imageUrl}
        alt="The Dark Knight Poster"
      ></img>
      <ReactStars
        count={5}
        value={5}
        size={30}
        edit={false}
        className="justify-items-center  mx-auto w-full -my-6 flex justify-center "
      ></ReactStars>
      <h1 className="text-white mx-auto text-center w-full my-4">{title}</h1>
      {/* {
        genres.map(genre => <></>)
      } */}
    </div>
  );
};
