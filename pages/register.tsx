import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Register: NextPage = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <div className="bg-navbar-grey flex flex-col p-4 rounded-lg">
        <img
          src="/Logo.png"
          alt="Picture of the logo. It consists of a TV (representing series), a clapperboard (representing movies) and the word anime in Japanese"
          className=" w-24 h-auto mx-auto"
        ></img>
        <h1 className="text-center text-2xl">Register</h1>
        <label htmlFor="username" className=" rounded-lg">
          Username
        </label>
        <input
          id="username"
          type="text"
          className=" rounded-lg text-black px-2 py-1"
        ></input>

        <label htmlFor="email" className=" rounded-lg">
          Email
        </label>
        <input
          id="email"
          type="text"
          className=" rounded-lg text-black px-2 py-1"
        ></input>

        <label htmlFor="password" className="rounded-lg">
          Password
        </label>
        <input
          id="password"
          type="text"
          className=" rounded-lg text-black px-2 py-1"
        ></input>

        <label htmlFor="password_confirmation" className=" rounded-lg">
          Confirm Password
        </label>
        <input
          id="password"
          type="text"
          className=" rounded-lg text-black px-2 py-1"
        ></input>
        <button className="rounded-lg bg-purple-button my-4 py-1">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
