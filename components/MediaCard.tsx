import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import ReactStars from "react-stars";
import { GenreButton } from "./GenreButton";
import { Button } from "./Button";
import { TrailerModal } from "./TrailerModal";
import { ListModal } from "./ListModal";
import { useState } from "react";
import { watchlist } from "../interfaces/watchlist";
import { MediaCardProps } from "../interfaces/MediaCardProps";
import { getMovie, getShow } from "../services/tmdb/media";
export const MediaCard = ({
  mediaId,
  title,
  imdbRating,
  imageUrl,
  trailerUrl,
  watchlists,
}: MediaCardProps) => {
  const [showTrailerModal, setShowTrailerModal] = useState(false);
  const [showListModal, setShowListModal] = useState(false);
  const url = "https://www.youtube.com/embed/" + trailerUrl.split("?v=")[1];
  return (
    <div className="rounded-lg bg-black w-auto max-w-pic ">
      <img
        className=" h-64 w-60 object-cover rounded-t-lg"
        src={imageUrl}
        alt="The Dark Knight Poster"
      ></img>
      <ReactStars
        count={5}
        value={imdbRating / 2}
        half={true}
        size={30}
        edit={false}
        className="mx-auto w-full -my-6 flex justify-center "
      ></ReactStars>
      <h1 className="text-white mx-auto text-center w-full mt-4 text-2xl">
        {title}
      </h1>
      <div className="justify-center mx-auto items-center flex flex-wrap">
        <Button
          text="Trailer"
          onClick={() => setShowTrailerModal(true)}
        ></Button>
        <TrailerModal
          title="The Dark Knight"
          url={url}
          onClick={() => {
            setShowTrailerModal(false);
          }}
          open={showTrailerModal}
          onCloseModal={() => {
            setShowTrailerModal(false);
          }}
        ></TrailerModal>
        <Button text="Add" onClick={() => setShowListModal(true)}></Button>
        <ListModal
          onCloseButton={() => {
            setShowListModal(false);
          }}
          open={showListModal}
          onCloseModal={() => {
            setShowListModal(false);
          }}
          watchlists={watchlists}
          onAdd={() => {}}
          isInWatchlist={() => true}
          mediaId={34}
        ></ListModal>
      </div>
    </div>
  );
};
