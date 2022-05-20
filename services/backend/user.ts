import axios from "axios";

export const getUser = async (token: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.get(
    process.env.NEXT_PUBLIC_BACKEND + "api/user",
    config
  );
  return response.data;
};
