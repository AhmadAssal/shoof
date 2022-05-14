import type { NextPage } from "next";
import { FormEvent, useState } from "react";
import { validator } from "../validations/LoginValidator";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Spinner } from "../components/Spinner";
import { login } from "../services/authentication/login";
import { useLocalStorage } from "usehooks-ts";
import Router from "next/router";
import Link from "next/link";

const Login: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useLocalStorage("shoof-token", "");
  const [messages, setMessages] = useState({
    email: "",
    password: "",
  });
  const [credentialsError, setCredentialsError] = useState("");
  const onLogin = async (e: FormEvent) => {
    e.preventDefault();
    setCredentialsError("");
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
        console.log();
        if (error.response.status === 401) {
          setCredentialsError("The credentials you entered are incorrect.");
        } else if (error.response.status === 500) {
          setCredentialsError(
            "Our server has encountered a problem. Sorry about that! Please try again later."
          );
        } else setCredentialsError(error.message);

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
            <h3 className={errorTextColor}>{credentialsError}</h3>
            <label htmlFor="email" className="rounded-lg">
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
              className="rounded-lg bg-purple-button mt-4 py-1"
              type="submit"
            >
              Login
            </button>
            <div className="text-center text-sm mt-2">
              <Link href="/forget-password">
                <a className="block">Forget Password</a>
              </Link>

              <Link href="/register">
                <a className="underline">
                  Don&apos;t have an account? Register instead.
                </a>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
