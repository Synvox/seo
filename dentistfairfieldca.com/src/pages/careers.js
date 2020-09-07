import React from "react";
import Page from "../components/Page";
import Head from "next/head";

function Careers() {
  return (
    <Page>
      <Head>
        <title>Careers</title>
        <meta name="description" content="You can reach us at 707-422-7633" />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context" : "https://schema.org/",
            "@type" : "JobPosting",
            "title" : "Dental Hygienist",
            "description" : "<p>Our Fairfield CA dental office is seeking a CA licensed hygienist to
            join our friendly team. Experience is preferred but we will consider
            anyone qualified. We are hiring for Weds (1 day a wk) 9-5p. But if
            Tuesdays are your only option, please call, we may be able to use you!
            All certifications for RDH required to be current. CPR must be current.
            Must be easy going, pleasant, friendly.</p>",
            "datePosted" : "2020-09-07",
            "employmentType" : "PART_TIME",
            "hiringOrganization" : {
              "@type" : "Organization",
              "name" : "Mark J. Warner DDS",
              "sameAs" : "https://dentistfairfieldca.com",
              "logo" : "https://dentistfairfieldca.com/logo.jpg"
            },
            "jobLocation": {
            "@type": "Place",
              "address": {
                "@type" : "PostalAddress",
                "streetAddress" : "1291 Oliver Rd",
                "addressLocality" : "Fairfield",
                "addressRegion" : "CA",
                "postalCode" : "94534"
              }
            }
          }
        `,
        }}
      />
      <h2>CA licensed hygienist</h2>
      <p>
        Our Fairfield CA dental office is seeking a CA licensed hygienist to
        join our friendly team. Experience is preferred but we will consider
        anyone qualified. We are hiring for Weds (1 day a wk) 9-5p. But if
        Tuesdays are your only option, please call, we may be able to use you!
        All certifications for RDH required to be current. CPR must be current.
        Must be easy going, pleasant, friendly.
      </p>

      <p>
        Minimum Requirements:
        <ul>
          <li>Current California RDH License</li>
          <li>CPR Certificate</li>
        </ul>
      </p>
      <p>
        Apply by sending an email to{" "}
        <a href="mailto:info@dentistfairfieldca.com">
          info@dentistfairfieldca.com
        </a>
        .
      </p>
    </Page>
  );
}

export default Careers;
