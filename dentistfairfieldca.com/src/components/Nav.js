import React from "react";
import styled from "styled-components";
import { withRouter } from "next/router";
import Link from "next/link";
import { SITE_WIDTH, SITE_PADDING, THEME_COLOR } from "../vars";
import { darken } from "polished";
import Icon, { MapMarker, Phone } from "./Icon";
import Head from "next/head";

function Nav() {
  return (
    <>
      <Head>
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
  "description": "General, Cosmetic, Implant, and Family Dentistry in Fairfield, CA We are a Fairfield dental office specializing in helping you with
  all of your dental needs.",
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
  "areaServed": ["Fairfield CA"],
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
  }
}
        `
          }}
        />
      </Head>
      <Wrapper>
        <TopBanner>
          <TopBannerInner>
            <a href="https://goo.gl/maps/iBFZRr8xEWGY8gJR9">
              <MapMarker /> <span>1291 Oliver Rd Fairfield, CA 94534</span>
            </a>
            <a href="tel:707-422-7633">
              <Phone /> <span>Call Now (707) 422-7633</span>
            </a>
          </TopBannerInner>
        </TopBanner>
        <Container>
          <Inner>
            <a href="/">
              <Logo>
                <img
                  src="/logo.jpg"
                  height="80"
                  alt="Mark J. Warner DDS Inc. General Dentistry"
                />
              </Logo>
            </a>
            <Links>
              <LinksHorizontal>
                <ActiveLink href="/">Home</ActiveLink>
                <ActiveLink href="/about-us">About Us</ActiveLink>
                <ActiveLink href="/treatments">Treatments</ActiveLink>
                {/* <ActiveLink href="/new-patient-experience">New Patients</ActiveLink> */}
                {/* <ActiveLink href="/gallery">Before &amp; After Photos</ActiveLink> */}
                <ActiveLink href="/blog">Blog</ActiveLink>
                {/* <ActiveLink href="/testimonials">Testimonials</ActiveLink> */}
                <ActiveLink href="/contact-us">Contact Us</ActiveLink>
              </LinksHorizontal>
              <SubscribeButton href="https://reviews.solutionreach.com/vs/mark_j_warner_dds/appt">
                Request Appointment
              </SubscribeButton>
            </Links>
          </Inner>
        </Container>
      </Wrapper>
    </>
  );
}

export default Nav;

const ActiveLink = withRouter(function ActiveLink({
  router,
  children,
  href,
  activeClassName = "active",
  ...otherProps
}) {
  return (
    <Link href={href}>
      <NavLink
        href={href}
        {...otherProps}
        className={router.pathname === href ? "active" : undefined}
      >
        {children}
      </NavLink>
    </Link>
  );
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.nav`
  border-bottom: 1px solid #eee;
  background: #fff;
`;

const Logo = styled.h1`
  @media (max-width: 1023px) {
    margin: 40px 0;
  }
`;

const Inner = styled.div`
  margin: auto;
  max-width: ${SITE_WIDTH};
  padding: 0 ${SITE_PADDING};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  @media (max-width: 1023px) {
    flex-direction: column;
    height: unset;
  }
  & > :first-child {
    flex-grow: 1;
  }
`;

const NavLink = styled.a`
  padding: 8px 20px;
  color: inherit;
  text-decoration: none;
  white-space: nowrap;
  position: relative;
  font-weight: 500;
  display: inline-flex;
  height: 42px;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  color: #676767;
  &.active {
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    background: white;
    color: ${THEME_COLOR};
  }
`;

const Links = styled.div`
  border-radius: 7px;
  background: #f8f8f8;
  padding: 4px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05) inset;
  @media (max-width: 1023px) {
    width: 100%;
    margin: 10px 0;
    & > * {
      display: flex;
      justify-content: flex-start;
    }
  }
`;

const LinksHorizontal = styled.div`
  display: inline-flex;
  flex-direction: row;
  @media (max-width: 1023px) {
    width: 100%;
    padding-right: 4px;
    & > * {
      flex-grow: 1;
      padding: 8px 0;
    }
  }
`;

const SubscribeButton = styled.a`
  background: ${THEME_COLOR};
  color: white;
  height: 42px;
  padding: 0 20px;
  margin-left: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 7px;
  font-size: 14px;
  &:active {
    background: ${darken(0.1, THEME_COLOR)};
  }
  @media (max-width: 1023px) {
    width: 100%;
    margin-left: 0px;
    margin-top: 4px;
  }
`;

const TopBanner = styled.div`
  background: ${THEME_COLOR};
`;

const TopBannerInner = styled.div`
  margin: auto;
  max-width: ${SITE_WIDTH};
  padding: 0 ${SITE_PADDING};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  min-height: 40px;
  color: white;
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
  }
  color: white;
  a {
    color: white;
    text-decoration: none;
  }
  & > * {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    min-height: 40px;
    margin-left: 32px;
    @media (max-width: 1023px) {
      margin-left: 0px;
    }
    ${Icon} {
      margin-right: 8px;
    }
  }
`;
