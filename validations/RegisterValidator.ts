export const validator = (
  email: string,
  username: string,
  password: string,
  passwordConfirmation: string
) => {
  if (email.includes(" ")) {
    if (typeof window !== "undefined") {
      window.alert("Your email can not contain whitespace");
    }
    return;
  }
};
