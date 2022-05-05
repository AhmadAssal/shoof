import axios from "axios";

export const forgetPassword = async (email: string) => {
  const tokenResponse = await axios.get(
    process.env.NEXT_PUBLIC_BACKEND + "sanctum/csrf-cookie"
  );
  const userData = {
    email,
  };
  const forgetPasswordResponse = await axios.post(
    process.env.NEXT_PUBLIC_BACKEND! + "api/forget-password/",
    userData,
    { withCredentials: true }
  );
  return forgetPasswordResponse;
};
