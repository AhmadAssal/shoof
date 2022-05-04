import type { NextPage } from "next";
import { FormEvent, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Spinner } from "../components/Spinner";
import { forgetPassword } from "../services/authentication/forgetpassword";
import Router from "next/router";

const ForgetPassword: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const onForgetPassword = async (e: FormEvent) => {
    e.preventDefault();
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email.");
    }
    setIsLoading(true);
    try {
      const forgetPasswordResponse = await forgetPassword(email);
      Router.push("/reset-password?token=" + forgetPasswordResponse.data.token);
    } catch (error: any) {
      setIsLoading(false);
      alert(
        "The email you provided is not associated with an account on Shoof."
      );
    }
  };
  const inputStyles = "rounded-lg text-black px-2 py-1";
  return (
    <>
      <div className="flex flex-col h-full items-center justify-center">
        <form onSubmit={(e) => onForgetPassword(e)}>
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
              className={inputStyles}
            ></input>
            <Modal
              open={isLoading}
              onClose={() => setIsLoading(false)}
              center
              closeIcon
            >
              {isLoading ? (
                <Spinner></Spinner>
              ) : (
                <h3>We have sent you an email. Please check your inbox.</h3>
              )}
            </Modal>
            <button
              className="rounded-lg bg-purple-button my-4 py-1"
              type="submit"
            >
              Send an email
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
