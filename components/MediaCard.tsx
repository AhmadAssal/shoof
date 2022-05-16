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
import { TmdbVideoResponse } from "../interfaces/tmdbVideoResponse";
export const MediaCard = ({
  mediaId,
  mediaType,
  watchlists,
  className,
}: MediaCardProps) => {
  const [showTrailerModal, setShowTrailerModal] = useState(false);
  const [showListModal, setShowListModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [imdbRating, setImdbRating] = useState(0);
  const [title, setTitle] = useState("");
  const [trailerUrl, setTrailerUrl] = useState(
    "https://www.youtube.com/embed/"
  );
  const [posterUrl, setPosterUrl] = useState(
    "https://image.tmdb.org/t/p/original"
  );
  const [trailerExists, setTrailerExists] = useState(true);
  useEffect(() => {
    if (mediaType === "show") {
      getShow(mediaId).then((response) => {
        if (response.status === "failed to get show") {
          setErrorMessage(true);
        } else {
          setTitle(response.data.name);
          setImdbRating(response.data.vote_average);

          //extract trailer key
          const videos = response.data.videos.results.filter(
            (video: TmdbVideoResponse) => video.type === "Trailer"
          );
          if (videos?.[0]?.key) {
            setTrailerUrl(trailerUrl + videos?.[0]?.key);
          } else {
            setTrailerExists(false);
          }
          setPosterUrl(posterUrl + response.data.poster_path);
        }
      });
    } else {
      getMovie(mediaId).then((response) => {
        if (response.status === "failed to get movie") {
          setErrorMessage(true);
        } else {
          setTitle(response.data.original_title);
          setImdbRating(response.data.vote_average);

          //extract trailer key
          const videos = response.data.videos.results.filter(
            (video: TmdbVideoResponse) => video.type === "Trailer"
          );
          setTrailerUrl(trailerUrl + videos[0]?.key);
          setPosterUrl(posterUrl + response.data.poster_path);
        }
      });
    }
  }, []);

  return (
    <div className={className + " rounded-lg bg-black w-auto max-w-pic"}>
      <img
        className="h-64 w-60 object-cover rounded-t-lg"
        src={posterUrl}
        alt={title + "Poster"}
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
          text={trailerExists ? "Trailer" : "No Trailer Found"}
          onClick={() => setShowTrailerModal(true)}
          disabled={!trailerExists}
        ></Button>
        <TrailerModal
          title={title}
          url={trailerUrl}
          onClick={() => {
            setShowTrailerModal(false);
          }}
          open={showTrailerModal}
          onCloseModal={() => {
            setShowTrailerModal(false);
          }}
        ></TrailerModal>
        <Button
          text="Add"
          onClick={() => setShowListModal(true)}
          disabled={false}
        ></Button>
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
