import React from "react";
import Hero from "../components/Hero";
import Page, { Aside } from "../components/Page";
import Head from "next/head";

function Index() {
  return (
    <>
      <Head>
        <title>Welcome to Mark J Warner, DDS</title>
        <meta
          name="description"
          content="General, Cosmetic, Implant, and Family Dentistry in Fairfield, CA We are a Fairfield dental office specializing in helping you with
          all of your dental needs."
        />
      </Head>
      <Hero />
      <Page>
        <Aside>
          <img
            src="/stock-office.jpeg"
            style={{
              objectFit: "cover",
              height: "200px"
            }}
          />
        </Aside>
        <h2>
          Welcome to Mark J Warner, DDS
          <small>
            General, Cosmetic, Implant, and Family Dentistry in Fairfield, CA
          </small>
          <small>
            We are a Fairfield dental office specializing in helping you with
            all of your dental needs.
          </small>
        </h2>
        <h3>FREE Dental Consultation</h3>

        <p>
          You have a lot of choices in Fairfield when it comes to finding a
          dentist near you. We also understand that you may have been putting
          off going to the dentist for a long time. Let our FREE consultation
          replace your possible fear of the dentist, along with any concerns
          about time and money. This is our way of introducing ourselves to you,
          so that you feel confident in taking the next steps toward dental
          health. We proudly provide the highest quality of dental treatments to
          families in Fairfield, Vacaville, Travis Air Force Base, Vallejo,
          Napa, and surrounding areas. Call us right away to Schedule Your Free
          Dental Consult 707-422-7633. (Consult will be free and last
          approximately 15 minutes.) We hope this will help you feel more
          comfortable with using us as your dental office. If you choose not to,
          no harm, no foul!
        </p>
        <h3> Dedicated Staff</h3>

        <p>
          We cannot wait to help you improve your oral health. Our aim is to
          make you feel right at home. Our staff of dental professional are not
          only highly skilled, but are the friendliest dentist, hygienists, and
          dental assistants in town. They will do their best to make you feel
          happy and comfortable each time you come in.
        </p>
        <h3>Comprehensive Cosmetic and Restorative Dental Care</h3>

        <p>
          Besides offering white fillings and crowns for natural-looking
          restorations, we also provide cosmetic dentistry services like teeth
          whitening, bonding, and porcelain veneers. Have missing or damaged
          teeth? Ask us about implant dentistry. You deserve to have a great
          smile and healthy teeth and gums.
        </p>
        <p>
          Easily accessible from I-80, our Fairfield CA dentist office on Oliver
          Road serves Fairfield, Vacaville, and surrounding Solano County
          communities.
        </p>
        <Aside>
          <iframe
            src="https://maps.google.com/maps?q=mark+j.+warner+dds+dentist+fairfield+ca&amp;gl=us&amp;hl=en&amp;t=m&amp;ie=UTF8&amp;view=map&amp;cid=17604434272364569871&amp;ll=38.259143,-122.067053&amp;spn=0.008087,0.011566&amp;z=16&amp;iwloc=A&amp;output=embed"
            height="480"
            width="540"
            frameborder="0"
            marginwidth="0"
            marginheight="0"
            scrolling="no"
          />
        </Aside>
      </Page>
    </>
  );
}

export default Index;
