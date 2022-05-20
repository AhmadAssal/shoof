import React from "react";
import "tailwindcss/tailwind.css";
import { LogoutButton } from "./LogoutButton";
import { hasToken } from "../utils/HasToken";
export const HorizontalNavbar = () => {
  return (
    <nav className="text-white flex h-16 w-full text-center items-center sticky top-0 bg-black z-10">
      <a href="/cinema/" className="mx-4">
        Cinema
      </a>
      <a href="/tv/" className="mx-4">
        TV
      </a>
      <a href="/anime/" className="mx-4">
        Anime
      </a>
      {hasToken() ? (
        <LogoutButton className="ml-auto mr-8"></LogoutButton>
      ) : (
        <></>
      )}
    </nav>
  );
};
