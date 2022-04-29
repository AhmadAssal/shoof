export const validator = (
  email: string,
  username: string,
  password: string,
  passwordConfirmation: string
) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!username) {
    if (typeof window !== "undefined") {
      window.alert("Your username can not be empty.");
    }
    return;
  }
  if (username.includes(" ")) {
    if (typeof window !== "undefined") {
      window.alert("Your username can not include whitespace.");
    }
    return;
  }

  if (!emailRegex.test(email)) {
    if (typeof window !== "undefined") {
      window.alert("Please enter a valid email.");
    }
    return;
  }

  if (!email) {
    if (typeof window !== "undefined") {
      window.alert("Your email can not be empty.");
    }
    return;
  }
  if (email.includes(" ")) {
    if (typeof window !== "undefined") {
      window.alert("Your email can not contain whitespace.");
    }
    return;
  }
  if (!password) {
    if (typeof window !== "undefined") {
      window.alert("Your password can not be empty.");
    }
    return;
  }
  if (password.includes(" ")) {
    if (typeof window !== "undefined") {
      window.alert("Your password can not include whitespace.");
    }
    return;
  }

  if (!passwordConfirmation) {
    if (typeof window !== "undefined") {
      window.alert("Please confirm your password.");
    }
    return;
  }
  if (passwordConfirmation.includes(" ")) {
    if (typeof window !== "undefined") {
      window.alert("Your password confirmation can not include whitespace.");
    }
    return;
  }

  if (password !== passwordConfirmation) {
    if (typeof window !== "undefined") {
      window.alert("Your passwords do not match.");
    }
    return;
  }
};
