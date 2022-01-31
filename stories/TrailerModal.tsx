import React from "react";
import "tailwindcss/tailwind.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

interface TrailerModalProps {
  text: string;
  onClick: () => void;
  open: boolean;
  onCloseModal: () => void;
}

export const TrailerModal = ({
  text = "Add",
  onClick = () => {},
  open = false,
  onCloseModal = () => {},
}: TrailerModalProps) => {
  return (
    <Modal open={open} onClose={onCloseModal} center>
      <h2>Simple centered modal</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
        risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit
        risus, sed porttitor quam.
      </p>
    </Modal>
  );
};
