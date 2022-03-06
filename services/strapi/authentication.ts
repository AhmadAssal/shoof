import axios from "axios";
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

export const register = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const response = await axios({
      method: "post",
      url: process.env.REGISTER_URL,
      data: {
        username,
        email,
        password,
      },
    });
    return { status: "register successful", data: response.data };
  } catch (error: any) {
    return {
      status: "failed to register",
      message: error.response.data.error.message,
    };
  }
};
