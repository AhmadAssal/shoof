const dotenv = require("dotenv");
dotenv.config({ path: "../" + "/.env" });
const axios = require("axios").default;
export const login = async (identifier: string, password: string) => {
  try {
    const response = await axios({
      method: "post",
      url: process.env.LOGIN_URL,
      data: {
        identifier,
        password,
      },
    });
    return { status: "login successful", data: response.data };
  } catch (error: any) {
    return {
      status: "failed to login",
      message: error.response.data.error.message,
    };
  }
};
