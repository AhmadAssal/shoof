import axios from "axios";

export const resetPassword = async (
  email: string,
  token: string,
  password: string
) => {
  const userData = {
    email,
    newPassword: password,
  };
  const url = process.env.NEXT_PUBLIC_RESET_PASSWORD!;
  const resetPasswordResponse = await axios.post(url, userData);
  return resetPasswordResponse;
};
