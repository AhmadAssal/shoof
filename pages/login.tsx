import type { NextPage } from "next";
import { FormEvent, useState } from "react";
import { validator } from "../validations/LoginValidator";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Spinner } from "../components/Spinner";
import { login } from "../services/authentication/login";
import { useLocalStorage } from "usehooks-ts";
import Router from "next/router";

const Login: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useLocalStorage("shoof-token", "");
  const [messages, setMessages] = useState({
    email: "",
    password: "",
  });
  const onLogin = async (e: FormEvent) => {
    e.preventDefault();
    const errorMessages = validator(email, password);
    if (errorMessages.email || errorMessages.password) {
      setMessages(errorMessages);
    } else {
      setMessages({
        email: "",
        password: "",
      });
      setIsLoading(true);
      try {
        const loginResponse = await login(email, password);
        setToken(loginResponse?.data.token);
        setIsLoading(true);
        Router.push("/");
      } catch (error: any) {
        alert("The credentials you entered are incorrect.");
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
        <form onSubmit={(e) => onLogin(e)}>
          <div className="bg-navbar-grey flex flex-col p-4 rounded-lg">
            <img
              src="/Logo.png"
              alt="Picture of the logo. It consists of a TV (representing series), a clapperboard (representing movies) and the word anime in Japanese"
              className=" w-24 h-auto mx-auto"
            ></img>
            <h1 className="text-center text-2xl">Login</h1>
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
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
