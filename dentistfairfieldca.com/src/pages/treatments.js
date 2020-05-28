import React from "react";
import Page, { Aside } from "../components/Page";
import ScheduleButton from "../components/ScheduleButton";
import Head from "next/head";

function AboutUs() {
  return (
    <Page>
      <Head>
        <title>Treatments</title>
      </Head>
      <Aside>
        <img src="/stock-office.jpeg" />
      </Aside>
      <h2>Treatments</h2>
      <h3>Cleaning and Preventative Services</h3>

      <p>
        Prevention is the best medicine. We recommend having your teeth cleaned
        with our hygienist and an exam with Dr. Warner every six months (or more
        often if necessary) so that if problems occur they can be spotted early.
      </p>

      <h3>Root Canals, Dental Crowns, and Restorative Dentistry</h3>
      <p>
        Restorative dentist uses variety of materials, ceramics and polymers to
        recreate your smile and repair damaged teeth.   During many restorative
        dental procedures, your dentist will use a combination of different
        materials to ensure the effectiveness of restoration as a long term
        solution.
      </p>
      <p>
        Restorative dentistry involves complete dental care and restoration of
        damaged teeth especially when it comes to repairing oral and dental
        tissues. In its broadest sense, restorative dentistry is any dental
        process that restores old teeth into new, more vibrant ones.
      </p>
      <p>Restorative dentistry is a dental care including:</p>
      <ul>
        <li> Fillings</li>
        <li> Crowns, Inlays, and Onlays</li>
        <li> Dental Implants</li>
        <li> Crown and Bridgework</li>
        <li> Complete Plans for Full Mouth Reconstruction</li>
      </ul>
      <h3>Invisalign -Clear Wireless Braces</h3>

      <p>
        An alternative to metal braces, these flexible appliances have distinct
        benefits over traditional orthodontics.{" "}
        <strong>
          New in our office! Introducing the new  iTero Element® scanner.
        </strong>
      </p>

      <h3>Dental Implants</h3>
      <p>
        Dental implants have been used to replace teeth for over 30 years. They
        are a long-term solution that allows your lost or damaged teeth to be
        replaced.   Dental implants are titanium alloy screws placed into the
        jawbone to take the place of missing teeth roots. Bone actually attaches
        to the implant after a few months. Once that happens a replacement tooth
        is able to be attached.  Implants can replace individual missing teeth
        or be used to support a removable denture
      </p>

      <h3>Cosmetic Dentistry</h3>
      <ul>
        <li>Teeth Whitening</li>
        <li>Veneers</li>
        <li>Bonding</li>
        <li>White Resin Restorations</li>
      </ul>

      <h3>Bridges</h3>
      <ul>
        <li>Traditional bridge</li>
        <li>Cantilever bridge</li>
      </ul>

      <h3>Emergency services</h3>
      <ScheduleButton />
    </Page>
  );
}

export default AboutUs;
