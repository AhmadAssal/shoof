export const alert = (message: string) => {
  if (typeof window !== "undefined") {
    window.alert(message);
  }
};
