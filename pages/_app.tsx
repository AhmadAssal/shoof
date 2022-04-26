import type { AppProps } from "next/app";
import "../styles/globals.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
