import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Button } from "./Button";
import { useState } from "react";
interface ListModalProps {
  onCloseButton: () => any;
  open: boolean;
  onCloseModal: () => any;
  watchlists: watchlist[];
  onAdd: () => any;
  isInWatchlist: (mediaId: number, watchlistId: number) => boolean;
  mediaId: number;
}

interface watchlist {
  id: number;
  name: string;
}

export const ListModal = ({
  onCloseButton,
  open,
  onCloseModal,
  watchlists,
  onAdd,
  isInWatchlist,
  mediaId,
}: ListModalProps) => {
  const [chosenWatchlists, setChosenWatchlists] = useState([0]);

  useEffect(() => {
    const newArr = new Array(watchlists.length).fill(0);
    watchlists.forEach((watchlist, index) => {
      if (isInWatchlist(mediaId, watchlist.id)) {
        newArr[index] = 1;
        setChosenWatchlists(newArr);
      }
    });
  }, []);

  return (
    <Modal open={open} onClose={onCloseModal} center closeIcon>
      {watchlists.map((pl, index) => (
        <div key={pl.id}>
          <label htmlFor={pl.name}> {pl.name}</label>
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
              console.log(chosenWatchlists);
            }}
            className="float-right"
          ></input>
        </div>
      ))}
      <div>
        <Button text="Close" onClick={() => onCloseModal()}></Button>
        <Button text="Add" onClick={() => onAdd()}></Button>
      </div>
    </Modal>
  );
};
