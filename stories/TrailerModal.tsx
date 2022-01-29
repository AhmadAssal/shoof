import React from "react";
import "tailwindcss/tailwind.css";

interface TrailerModalProps {
  text: string;
  onClick: () => void;
}

export const TrailerModal = ({
  text = "Add",
  onClick = () => {},
}: TrailerModalProps) => {
  return (
    <button
      className="bg-gray-700 rounded-lg p-2 text-white m-2"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
