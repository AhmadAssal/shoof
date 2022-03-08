import React from "react";
import "tailwindcss/tailwind.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled: boolean;
}

export const Button = ({ text, onClick, disabled }: ButtonProps) => {
  return (
    <button
      className="bg-gray-700 rounded-lg p-2 text-white m-2"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
