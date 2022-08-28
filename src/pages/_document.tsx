import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body className="bg-white font-inter text-primary  dark:bg-black dark:text-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
