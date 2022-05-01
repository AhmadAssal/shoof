import React from "react";
import "tailwindcss/tailwind.css";
import axios from "axios";
import Router from "next/router";
import { useLocalStorage } from "usehooks-ts";

interface LogoutProps {
  className: string;
}
export const LogoutButton = ({ className }: LogoutProps) => {
  const onClick = async () => {
    const shoofToken = localStorage.getItem("shoof-token")?.replaceAll('"', "");
    if (!shoofToken) {
      alert("You are not signed in");
      Router.push("/login");
    }
    try {
      const logoutResponse = await axios.post(
        process.env.NEXT_PUBLIC_BACKEND! + "/api/logout",
        {},
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${shoofToken}` },
        }
      );
      localStorage.removeItem("shoof-token");
      Router.push("/login");
    } catch (error: any) {
      if (error.response.status === 401) {
        alert("You are already logged out.");
      }
    }
  };
  return (
    <button
      className={`bg-gray-700 rounded-lg p-2 text-white ${className}`}
      onClick={onClick}
    >
      Log Out
    </button>
  );
};
