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
  try {
    const tokenResponse = await axios.get(
      "http://localhost/sanctum/csrf-cookie"
    );
    const url: string = process.env.NEXT_PUBLIC_REGISTER_URL!;
    const response = await axios.post(url, userData, { withCredentials: true });
    return response;
  } catch (error: any) {
    console.log(error);
  }
};
