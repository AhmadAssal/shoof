/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Button } from "./Button";
import { useState } from "react";
import { watchlist } from "../interfaces/watchlist";
import { WatchlistWithItems } from "../interfaces/WatchlistWithItems";
import {
  addItemToWatchlist,
  removeItemFromWatchlist,
} from "../services/backend/watchlist";

interface ListModalProps {
  onCloseButton: () => void;
  open: boolean;
  onCloseModal: () => void;
  watchlists: WatchlistWithItems[];
  isInWatchlist: (mediaId: number, watchlistId: WatchlistWithItems) => boolean;
  mediaId: number;
}

export const ListModal = ({
  open,
  onCloseModal,
  watchlists,
  isInWatchlist,
  mediaId,
}: ListModalProps) => {
  const [chosenWatchlists, setChosenWatchlists] = useState([0]);

  useEffect(() => {
    const newArr = new Array(watchlists.length).fill(0);
    watchlists.forEach((watchlist, index) => {
      if (isInWatchlist(mediaId, watchlist)) {
        newArr[index] = 1;
        setChosenWatchlists(newArr);
      }
    });
  }, []);
  return (
    <Modal open={open} onClose={onCloseModal} center closeIcon>
      {watchlists.length ? (
        watchlists.map((pl, index) => (
          <div
            key={pl.id}
            className="grid grid-cols-2 items-center" // justify-items-center"
          >
            <label htmlFor={pl.name} className="text-black mx-4 justify-start">
              {" "}
              {pl.name}
            </label>
            <input
              id={pl.name}
              type="checkbox"
              name={pl.name}
              defaultChecked={chosenWatchlists[index] === 1 ? true : false}
              value={pl.id}
              onChange={() => {
                let newArr = chosenWatchlists;
                if (newArr[index] == 1) {
                  newArr[index] = 0;
                } else newArr[index] = 1;
                setChosenWatchlists(newArr);
              }}
              className="items-center justify-self-center"
            ></input>
          </div>
        ))
      ) : (
        <p>
          You have no playlists. Create some playlists to add this movie/show.
        </p>
      )}
      <div>
        <Button
          text="Close"
          onClick={() => onCloseModal()}
          disabled={false}
        ></Button>
        {/* <Button text="Add" onClick={() => onAdd()} disabled={false}></Button> */}
      </div>
    </Modal>
  );
};
