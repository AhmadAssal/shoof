import React from "react";
import "tailwindcss/tailwind.css";

interface GenreProps {
  title: string;
}

export const GenreButton = ({ title = "The Dark Knight" }: GenreProps) => {
  return (
    <p className="border-2 border-gray-800 rounded-md p-2 m-1  text-white w-max font-bold inline-block text-xs ">
      {title}
    </p>
  );
};
