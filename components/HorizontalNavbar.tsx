import React from "react";
import "tailwindcss/tailwind.css";
import logo from "../public/Logo.png";
import Image from "next/image";
import { LogoutButton } from "./LogoutButton";
export const HorizontalNavbar = () => {
  return (
    <nav className="text-white flex h-16 w-full text-center items-center">
      <a href="/cinema/" className="mx-4">
        Cinema
      </a>
      <a href="/tv/" className="mx-4">
        TV
      </a>
      <a href="/anime/" className="mx-4">
        Anime
      </a>
      <LogoutButton className="ml-auto mr-2"></LogoutButton>
    </nav>
  );
};
