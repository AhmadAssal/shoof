import { ErrorMessages } from "../types/ErrorMessages";
export const validator = (
  username: string,
  email: string,
  password: string,
  passwordConfirmation: string
) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let messages: ErrorMessages = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };
  if (!username) {
    messages.username = "Your username can not be empty.";
  }
  if (username.includes(" ")) {
    messages.username = "Your username can not include whitespace.";
  }
  if (!emailRegex.test(email)) {
    messages.email = "Please enter a valid email.";
  }
  if (!password) {
    messages.password = "Your password can not be empty.";
  }
  if (password.includes(" ")) {
    messages.password = "Your password can not include whitespace.";
  }

  if (!passwordConfirmation) {
    messages.passwordConfirmation = "Please confirm your password.";
  }
  if (passwordConfirmation.includes(" ")) {
    messages.passwordConfirmation =
      "Your password confirmation can not include whitespace.";
  }

  if (password !== passwordConfirmation) {
    messages.passwordConfirmation = "Your passwords do not match.";
  }
  return messages;
};
