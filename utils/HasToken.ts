export const hasToken = () => {
  if (typeof window !== "undefined") {
    if (window.localStorage.getItem("shoof-token")) {
      return true;
    } else return false;
  }
};
