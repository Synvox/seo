import App from "next/app";
import Head from "next/head";
import Provider from "../components/Provider";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat&family=Teko:wght@500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}
