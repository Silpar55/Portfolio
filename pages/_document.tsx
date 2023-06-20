import { Html, Head, Main, NextScript } from "next/document";
import NavBar from "./components/NavBar";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <NavBar />

      <body className="bg-white-300 text-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
