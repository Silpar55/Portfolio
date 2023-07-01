import { Html, Head, Main, NextScript } from "next/document";
import NavBar from "./components/global/NavBar";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white-300 text-slate-900 ">
        <NavBar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
