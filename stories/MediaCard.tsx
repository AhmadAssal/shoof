import React from "react";
import "tailwindcss/tailwind.css";
import ReactStars from "react-stars";
import { GenreButton } from "./GenreButton";
import { Button } from "./Button";
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
    <div className="group bg-blue-600 w-auto max-w-pic">
      <img
        className=" h-64 w-60 object-cover"
        src={imageUrl}
        alt="The Dark Knight Poster"
      ></img>
      <ReactStars
        count={5}
        value={5}
        size={30}
        edit={false}
        className="mx-auto w-full -my-6 flex justify-center "
      ></ReactStars>
      <h1 className="text-white mx-auto text-center w-full mt-4 text-2xl">
        {title}
      </h1>
      <div
        id="genre_div"
        className="max-w-min justify-center mx-auto items-center flex flex-wrap"
      >
        {genres.map((genre, index) => (
          <GenreButton title={genre} key={index}></GenreButton>
        ))}
      </div>
      <div className="justify-center mx-auto items-center flex flex-wrap">
        <Button text="Trailer" onClick={() => {}}></Button>
        <Button text="Add" onClick={() => console.log("yo")}></Button>
      </div>
    </div>
  );
};
