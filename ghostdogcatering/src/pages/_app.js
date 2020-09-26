import App from "next/app";
import Provider from "../components/Provider";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
