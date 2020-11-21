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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Ghost Dog Catering",
  "image": "https://ghostdogcatering.com/logo.png",
  "@id": "",
  "url": "https://ghostdogcatering.com",
  "telephone": "",
  "menu": "https://ghostdogcatering.com",
  "servesCuisine": "",
  "acceptsReservations": "false",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "Eagle Mountain",
    "addressRegion": "UT",
    "postalCode": "84005",
    "addressCountry": "US"
  }  
}
          `,
            }}
          />
        </Head>
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}
