import type { NextPage } from "next";
import { FormEvent, useState } from "react";
import { validator } from "../validations/LoginValidator";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Spinner } from "../components/Spinner";
import { resetPassword } from "../services/authentication/resetpassword";
import Router from "next/router";

const ResetPassword: NextPage = () => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputStyles = "rounded-lg text-black px-2 py-1";
  const onResetPassword = async (e: FormEvent) => {
    e.preventDefault();
    if (password !== confirmedPassword) {
      alert("Your password doesn't equal your confirmed password");
      return;
    }
    try {
      const response = await resetPassword(email, token as string, password);
      Router.push("/login");
      alert("Your password has been updated successfully.");
    } catch (error: any) {
      alert("failed to reset password");
    }
  };
  return (
    <>
      <div className="flex flex-col h-full items-center justify-center">
        <form onSubmit={(e) => onResetPassword(e)}>
          <div className="bg-navbar-grey flex flex-col p-4 rounded-lg">
            <img
              src="/Logo.png"
              alt="Picture of the logo. It consists of a TV (representing series), a clapperboard (representing movies) and the word anime in Japanese"
              className=" w-24 h-auto mx-auto"
            ></img>
            <h1 className="text-center text-2xl">Login</h1>
            {/* Token */}
            <label htmlFor="token" className="rounded-lg">
              Enter the token you got in the mail
            </label>
            <input
              id="token"
              type="password"
              value={token}
              className={inputStyles}
              onChange={(e) => {
                setToken(e.target.value);
              }}
            ></input>

            {/* email */}
            <label htmlFor="email" className=" rounded-lg">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              className={inputStyles}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            {/* password */}
            <label htmlFor="password" className="rounded-lg">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              className={inputStyles}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            {/* confirmed password */}
            <label htmlFor="confirmedPassword" className="rounded-lg">
              Confirm your password
            </label>
            <input
              id="confirmedPassword"
              type="password"
              value={confirmedPassword}
              className={inputStyles}
              onChange={(e) => {
                setConfirmedPassword(e.target.value);
              }}
            ></input>

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
              Reset password
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
