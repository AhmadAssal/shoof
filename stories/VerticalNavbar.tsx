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
      <a href="/html/" className="mx-4">
        HTML
      </a>
      <a href="/css/" className="mx-4">
        CSS
      </a>
      <a href="/js/" className="mx-4">
        JavaScript
      </a>
      <a href="/python/" className="mx-4">
        Python
      </a>
    </nav>
  );
};
