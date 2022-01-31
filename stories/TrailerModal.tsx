import React from "react";
import "tailwindcss/tailwind.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Button } from "./Button";
interface TrailerModalProps {
  title: string;
  url: string;
  onClick: () => void;
  open: boolean;
  onCloseModal: () => void;
}

export const TrailerModal = ({
  title,
  url,
  onClick,
  open,
  onCloseModal,
}: TrailerModalProps) => {
  return (
    <Modal open={open} onClose={onCloseModal} center closeIcon>
      <h2 className="text-2xl m-2">{title}</h2>
      <iframe
        width="560"
        height="315"
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Button onClick={onClick} text="Close"></Button>
    </Modal>
  );
};
