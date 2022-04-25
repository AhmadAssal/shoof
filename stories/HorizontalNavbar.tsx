import React from "react";
import "tailwindcss/tailwind.css";
import logo from "../public/Logo.png";
import Image from "next/image";

export const HorizontalNavbar = () => {
  return (
    <nav className="text-white flex h-16  w-screen text-center  items-center">
      <a href="/cinema/" className="mx-4">
        Cinema
      </a>
      <a href="/tv/" className="mx-4">
        TV
      </a>
      <a href="/anime/" className="mx-4">
        Anime
      </a>
    </nav>
  );
};
