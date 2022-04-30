import axios from "axios";

export const login = async (email: string, password: string) => {
  const userData = {
    email,
    password,
  };
  const tokenResponse = await axios.get(
    process.env.NEXT_PUBLIC_BACKEND + "/sanctum/csrf-cookie"
  );
  const url: string = process.env.NEXT_PUBLIC_LOGIN_URL!;
  const response = await axios.post(url, userData, { withCredentials: true });
  return response;
};
