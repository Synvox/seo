import type { LinksFunction } from "@remix-run/cloudflare";
import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css";
import { Layout } from "./components/Layout";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff"></meta>
        <Meta />
        <Links />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
{
  "@context": "http://www.schema.org",
  "@type": "Dentist",
  "name": "Mark J. Warner DDS Inc. General Dentistry",
  "url": "https://dentistfairfieldca.com/",
  "logo": "https://dentistfairfieldca.com/logo.jpg",
  "image": "https://dentistfairfieldca.com/office.jpg",
  "founder": "Mark J. Warner",
  "telephone": "+17074227633",
  "description": "General, Cosmetic, Implant, and Family Dentistry in Fairfield, CA We are a Fairfield dental office specializing in helping you with all of your dental needs.",
  "address" : {
    "@type" : "PostalAddress",
    "streetAddress" : "1291 Oliver Rd",
    "addressLocality" : "Fairfield",
    "addressRegion" : "CA",
    "postalCode" : "94534"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "38.2549139",
    "longitude": "-122.0676612"
  },
  "sameAs":"https://www.facebook.com/markwarnerdentistry/",
  "areaServed": ["Fairfield CA", "Vacaville CA"],
  "openingHours": "Mo, Tu, We, Th, Fr 9:00-17:00",
  "hasMap": "https://www.google.com/maps/place/Mark+J.+Warner+DDS+Inc.+General+Dentistry/@38.2547503,-122.0680119,18.94z/data=!4m5!3m4!1s0x0:0xf44f83b2cc00a50f!8m2!3d38.2548902!4d-122.067621",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Office",
    "telephone": "+17074227633"
  },
  "review" : {
    "@type" : "Review",
    "author" : {
      "@type" : "Person",
      "name" : "Moni Guevara"
    },
    "reviewRating" : {
      "@type" : "Rating",
      "ratingValue" : "5 stars"
    },
    "reviewBody" : "Overall this is the best dentist office I have ever been to. I have been going here for about 9 years now, and I can honestly say that the Dr. And staff have always made me feel welcome, comfortable, and have always made  going to the dentist something I actually look forward to!! Me and my mother have both gotten cosmetic AND  general Dentistry done here and the results have been amazing every single time. From Invisalign, to bridges, to cleanings, everything is done efficiently and skillfully. Love love love this Dentist office and wouldn't think twice about recommending it to EVERYONE AND ANYONE! 😃"
  },
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "doctorate degree",
    "about": "Dental Surgery",
    "recognizedBy": {
      "@type": "Organization",
      "name": "Virginia Commonwealth University, Medical College of Virginia – School of Dentistry",
      "url": "https://dentistry.vcu.edu/"
    }
  },
  "priceRange":"$"
}
        `,
          }}
        />
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
