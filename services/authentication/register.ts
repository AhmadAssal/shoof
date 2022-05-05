import axios from "axios";

export const register = async (
  username: string,
  email: string,
  password: string,
  passwordConfirmation: string
) => {
  const userData = {
    name: username,
    email,
    password,
    password_confirmation: passwordConfirmation,
  };
  const tokenResponse = await axios.get(
    process.env.NEXT_PUBLIC_BACKEND + "sanctum/csrf-cookie"
  );
  const url: string = process.env.NEXT_PUBLIC_BACKEND! + "api/register";
  const response = await axios.post(url, userData, { withCredentials: true });
  return response;
};
