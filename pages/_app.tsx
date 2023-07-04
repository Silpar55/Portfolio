import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "./components/global/NavBar";
import Footer from "./components/global/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
