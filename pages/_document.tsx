import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body className="dark">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
