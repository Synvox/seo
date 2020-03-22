import React from "react";
import Page, { Aside } from "../components/Page";
import ScheduleButton from "../components/ScheduleButton";
import Head from "next/head";

function ContactUs() {
  return (
    <Page>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="You can reach us at 707-422-7633" />
      </Head>
      <Aside>
        <img src="/office.jpg" height="80" alt="Mark Warner Office" />
      </Aside>
      <h2>
        Contact Us
        <small>You can reach us at 707-422-7633</small>
      </h2>
      <h3>Fairfield dental office</h3>
      <p>
        The dental office of Mark J. Warner DDS Inc is here to help. Please call
        us at 707-422-7633 with any concerns or questions…or better yet to
        schedule an appointment! We are in the office Monday – Thursdays 9-5pm.
        Don’t be shy, leave a message if we can’t get to the phone so we can
        call you back.
      </p>
      <p>
        Whether it’s for your regular preventative checkup, cleaning or you need
        Dr. Warner to check out a problem, call us. Go ahead, schedule that
        dental procedure you know you really should take care of but have put
        off until now. Give us a call and we’ll make time for you on our
        calendar. Dental appointments are available now.
      </p>
      <p>
        Our Dental Office is convenient to Fairfield, Suisun and Vacaville,
        California.
        <br />
        We are located at 1291 Oliver Rd. Fairfield, CA 94534.
        <br />
        Our Email Address: info@dentistfairfieldca.com.
      </p>
      <ScheduleButton />
    </Page>
  );
}

export default ContactUs;
