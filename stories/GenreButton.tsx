import React from "react";
import "tailwindcss/tailwind.css";

interface GenreProps {
  title: string;
}

export const GenreButton = ({ title = "The Dark Knight" }: GenreProps) => {
  return (
    <p className="bg-gray-400 p-2 m-1 rounded-lg text-white w-max font-bold inline-block text-xs">
      {title}
    </p>
  );
};
