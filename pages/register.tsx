import type { NextPage } from "next";
import { FormEvent, useState } from "react";
import { validator } from "../validations/RegisterValidator";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Spinner } from "../components/Spinner";
import { register } from "../services/authentication/register";
import { useLocalStorage } from "usehooks-ts";
import Router from "next/router";

const Register: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [token, setToken] = useLocalStorage("shoof-token", "");
  const [messages, setMessages] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const onRegister = async (e: FormEvent) => {
    e.preventDefault();
    const errorMessages = validator(
      username,
      email,
      password,
      passwordConfirmation
    );
    if (
      errorMessages.username ||
      errorMessages.email ||
      errorMessages.password ||
      errorMessages.passwordConfirmation
    ) {
      setMessages(errorMessages);
      // alert("Please make sure all the input boxes have valid input.");
    } else {
      setMessages({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      });
      setIsLoading(true);
      try {
        const registerResponse = await register(
          username,
          email,
          password,
          passwordConfirmation
        );
        setToken(registerResponse?.data.token);
        setIsLoading(true);
        Router.push("/");
      } catch (error: any) {
        alert("Failed to register.");
        setIsLoading(false);
      }
    }
  };
  const inputStyles = "rounded-lg text-black px-2 py-1";
  const errorStyles = "border-2 border-red-600";
  const errorTextColor = "text-red-300";
  return (
    <>
      <div className="flex flex-col h-full items-center justify-center">
        <form onSubmit={(e) => onRegister(e)}>
          <div className="bg-navbar-grey flex flex-col p-4 rounded-lg">
            <img
              src="/Logo.png"
              alt="Picture of the logo. It consists of a TV (representing series), a clapperboard (representing movies) and the word anime in Japanese"
              className=" w-24 h-auto mx-auto"
            ></img>
            <h1 className="text-center text-2xl">Register</h1>

            {/* username */}
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
              className={
                messages.username === ""
                  ? inputStyles
                  : inputStyles + errorStyles
              }
            ></input>
            <small className={errorTextColor}>{messages.username}</small>

            {/* email */}
            <label htmlFor="email" className=" rounded-lg">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className={
                messages.email === "" ? inputStyles : inputStyles + errorStyles
              }
            ></input>
            <small className={errorTextColor}>{messages.email}</small>

            {/* password */}
            <label htmlFor="password" className="rounded-lg">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className={
                messages.password === ""
                  ? inputStyles
                  : inputStyles + errorStyles
              }
            ></input>
            <small className={errorTextColor}>{messages.password}</small>

            {/* password confirmation */}
            <label htmlFor="password_confirmation" className=" rounded-lg">
              Confirm Password
            </label>
            <input
              id="password_confirmation"
              type="password"
              value={passwordConfirmation}
              onChange={(e) => {
                setPasswordConfirmation(e.target.value);
              }}
              className={
                messages.passwordConfirmation === ""
                  ? inputStyles
                  : inputStyles + errorStyles
              }
            ></input>
            <small className={errorTextColor}>
              {messages.passwordConfirmation}
            </small>
            <Modal
              open={isLoading}
              onClose={() => setIsLoading(false)}
              center
              closeIcon
            >
              <Spinner></Spinner>
            </Modal>
            <button
              className="rounded-lg bg-purple-button my-4 py-1"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
