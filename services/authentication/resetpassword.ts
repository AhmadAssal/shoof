import axios from "axios";

export const resetPassword = async (
  email: string,
  token: string,
  password: string
) => {
  const userData = {
    email,
    token,
    newPassword: password,
  };
  const url = process.env.NEXT_PUBLIC_BACKEND! + "api/reset-password";
  const resetPasswordResponse = await axios.post(url, userData);
  return resetPasswordResponse;
};
