import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { validator } from "../validations/RegisterValidator";

const Register: NextPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const onRegister = () => {
    validator(email, username, password, passwordConfirmation);
  };

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
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="rounded-lg text-black px-2 py-1"
        ></input>

        <label htmlFor="email" className=" rounded-lg">
          Email
        </label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="rounded-lg text-black px-2 py-1"
        ></input>

        <label htmlFor="password" className="rounded-lg">
          Password
        </label>
        <input
          id="password"
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="rounded-lg text-black px-2 py-1"
        ></input>

        <label htmlFor="password_confirmation" className=" rounded-lg">
          Confirm Password
        </label>
        <input
          id="password_confirmation"
          type="text"
          value={passwordConfirmation}
          onChange={(e) => {
            setPasswordConfirmation(e.target.value);
          }}
          className="rounded-lg text-black px-2 py-1"
        ></input>
        <button
          className="rounded-lg bg-purple-button my-4 py-1"
          onClick={() => {
            onRegister();
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
