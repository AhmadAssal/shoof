export const hasToken = () => {
  if (typeof window !== "undefined") {
    // console.log(typeof window);
    if (window.localStorage.getItem("shoof-token")) {
      return true;
    } else return false;
  }
};
