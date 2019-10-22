import React from "react";
import styled from "styled-components";
import { withRouter } from "next/router";

import { SITE_WIDTH, SITE_PADDING, THEME_COLOR } from "../vars";
import { darken } from "polished";

function Nav() {
  return (
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
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/about-us">About Us</ActiveLink>
          <ActiveLink href="/treatments">Treatments</ActiveLink>
          {/* <ActiveLink href="/new-patient-experience">New Patients</ActiveLink> */}
          {/* <ActiveLink href="/gallery">Before &amp; After Photos</ActiveLink> */}
          <ActiveLink href="/blog">Blog</ActiveLink>
          {/* <ActiveLink href="/testimonials">Testimonials</ActiveLink> */}
          <ActiveLink href="/contact-us">Contact Us</ActiveLink>
          <SubscribeButton href="https://reviews.solutionreach.com/vs/mark_j_warner_dds/appt">
            Request Appointment
          </SubscribeButton>
        </Links>
      </Inner>
    </Container>
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
    <NavLink
      href={href}
      {...otherProps}
      className={router.pathname === href ? "active" : undefined}
    >
      {children}
    </NavLink>
  );
});

const Container = styled.nav`
  border-bottom: 1px solid #eee;
  background: #fff;
`;

const Logo = styled.h1`
  @media (max-width: 600px) {
    margin: 10px 0;
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
  @media (max-width: 600px) {
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
  @media (max-width: 600px) {
    width: 100%;
    margin: 10px 0;
    & > * {
      display: flex;
      justify-content: flex-start;
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
  @media (max-width: 600px) {
    width: 100%;
    margin-left: 0px;
    margin-top: 4px;
  }
`;
