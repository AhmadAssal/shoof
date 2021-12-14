import React from "react";
import "tailwindcss/tailwind.css";

interface MediaCardProps {
  primary?: boolean;

  imageUrl: string;

  title: string;

  imdbRating: number;

  userRating: number;

  trailerUrl: string;

  //availableOn
}

export const MediaCard = ({
  primary = true,
  title = "The Dark Knight",
  imdbRating = 9.0,
  userRating = 9.2,
  imageUrl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  trailerUrl = "https://www.youtube.com/watch?v=EXeTwQWrcwY",
}) => {
  return (
    <img
      className="m-2 h-64 w-48"
      src={imageUrl}
      alt="The Dark Knight Poster"
    ></img>
  );
};