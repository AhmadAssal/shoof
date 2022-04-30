import { LoginErrorMessages } from "../types/ErrorMessages";
export const validator = (email: string, password: string) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let messages: LoginErrorMessages = {
    email: "",
    password: "",
  };

  if (!emailRegex.test(email)) {
    messages.email = "Please enter a valid email.";
  }
  if (!password) {
    messages.password = "Your password can not be empty.";
  }
  if (password.includes(" ")) {
    messages.password = "Your password can not include whitespace.";
  }
  return messages;
};
