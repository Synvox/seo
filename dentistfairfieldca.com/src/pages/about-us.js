import React from "react";
import Page, { Aside } from "../components/Page";
import ScheduleButton from "../components/ScheduleButton";
import Head from "next/head";

function AboutUs() {
  return (
    <Page>
      <Head>
        <title>Welcome to Mark J Warner, DDS</title>
        <meta
          name="description"
          content="General, Cosmetic, Implant, and Family Dentistry in Fairfield, CA We are a Fairfield dental office specializing in helping you with
          all of your dental needs."
        />
      </Head>
      <Aside>
        <iframe
          src="https://www.youtube.com/embed/YwGUMn3wXOM"
          width="560"
          height="315"
          frameborder="0"
          allowFullScreen="allowfullscreen"
        ></iframe>
      </Aside>
      <h2>
        About Us <small>Dr. Mark Warner</small>
      </h2>
      <h3>General Dentist</h3>
      <p>
        Fairfield has been home to Dr. Mark Warner for most of his life. After
        graduating from Armijo High School, he attended BYU in Utah and then
        dental school in Virginia. In 1993 Dr. Mark Warner graduated with his
        DDS from Virginia Commonwealth University, Medical College of Virginia –
        School of Dentistry. He returned to Fairfield and worked as an associate
        dentist with his father, James Warner, until he bought the dental
        practice from him in 1999. He has been married to Kristin since 1988 and
        they have four children.
      </p>
      <p>
        Dr. Warner is joined by an amazing staff, here to take care of all of
        your dental needs. He has 3 hygienists, two dental assistants, and two
        helping in the front office. They all do a great job at making you feel
        comfortable and at ease.
      </p>
      <p>
        Mark J. Warner DDS is a leading dentist in Fairfield, CA. Call Dr.
        Warner’s Dental office at 707-422-7633 to schedule your appointment
        today.
      </p>
      <ScheduleButton />
    </Page>
  );
}

export default AboutUs;
