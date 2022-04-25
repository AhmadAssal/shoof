import React from "react";
import "tailwindcss/tailwind.css";
import logo from "../public/Logo.png";
import Image from "next/image";

interface VerticalNavbarProps {
  className?: string;
}

export const VerticalNavbar = (props: VerticalNavbarProps) => {
  return (
    <nav
      className={
        "bg-navbar-grey text-white  h-screen  p-2 text-center  items-center rounded-r-3xl " +
        props.className
      }
    >
      <img
        src="/Logo.png"
        alt="Picture of the logo. It consists of a TV (representing series), a clapperboard (representing movies) and the word anime in Japanese"
        className=" w-24 h-auto"
      ></img>
      <a className="my-4">Top 2022 Movies</a>
      <a className="my-4">Top 2021 Movies</a>
      <a className="my-4">Top 2020 Movies</a>
    </nav>
  );
};
