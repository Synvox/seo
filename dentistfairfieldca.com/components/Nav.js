import React from "react";
import styled from "styled-components";
import { withRouter } from "next/router";

import { SITE_WIDTH, SITE_PADDING } from "../vars";

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
          <ActiveLink href="/new-patient-experience">New Patients</ActiveLink>
          <ActiveLink href="/gallery">Before &amp; After Photos</ActiveLink>
          <ActiveLink href="/blog">Blog</ActiveLink>
          <ActiveLink href="/testimonials">Testimonials</ActiveLink>
          <ActiveLink href="/contact-us">Contact Us</ActiveLink>
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
`;

const Links = styled.div`
  @media (max-width: 600px) {
    width: 100%;
    margin: 10px 0;
    & > * {
      display: block;
    }
  }
`;

const NavLink = styled.a`
  padding: 8px 12px;
  color: inherit;
  text-decoration: none;
  white-space: nowrap;
  position: relative;
  border-radius: 2px;
  margin: 0 1px;
  font-weight: 500;
  display: inline-flex;
  height: 42px;
  justify-content: center;
  align-items: center;
  &::before {
    border-radius: 2px;
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid transparent;
    transform: scale(0.95);
    transition-duration: 0.2s;
  }
  &:hover {
    &::before {
      border-color: #c05237;
      transform: scale(1);
    }
  }
  &.active {
    color: #c05237;
    &::before {
      border-color: #c05237;
      transform: scale(1);
    }
  }
`;
