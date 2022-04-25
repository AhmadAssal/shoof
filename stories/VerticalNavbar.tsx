import React from "react";
import "tailwindcss/tailwind.css";
import logo from "../public/Logo.png";
import Image from "next/image";

export const VerticalNavbar = () => {
  return (
    <nav className="bg-black text-white flex h-20 p-2 text-center  items-center">
      <img
        src="/Logo.png"
        alt="Picture of the logo. It consists of a TV (representing series), a clapperboard (representing movies) and the word anime in Japanese"
        className=" w-fit h-full"
      ></img>
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
