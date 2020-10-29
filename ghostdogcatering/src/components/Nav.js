import React, { useState } from "react";
import styled, { css } from "styled-components";
import Section from "./Section";
import Flex from "./Flex";
import { theme } from "../theme";
import Link from "next/link";
import classNames from "classnames";
import { withRouter } from "next/router";
import useScrollTriggers from "../hooks/useScrollTriggers";

export default function Nav({ invert = false }) {
  const [large, setLarge] = useState(true);
  useScrollTriggers(({ fromTop }) => {
    setLarge(fromTop <= 0);
  });

  return (
    <>
      <Container large={large} invert={invert}>
        <Section fullWidth>
          <Flex justifyContent="space-around">
            <Title>Ghost Dog Catering</Title>
            <Links>
              <NavLink href="#">Home</NavLink>
              <NavLink href="#">Our Food</NavLink>
              <NavLink href="#">Contact</NavLink>
            </Links>
          </Flex>
        </Section>
      </Container>
      {!large && <Stub />}
    </>
  );
}

const ActiveLink = withRouter(function ActiveLink({
  router,
  children,
  href,
  activeClassName = "active",
  using: Using = NavLink,
  ...otherProps
}) {
  const className = classNames({
    [activeClassName]: router.pathname === href,
  });

  return (
    <Link href={href}>
      <Using href={href} className={className} {...otherProps}>
        {children}
      </Using>
    </Link>
  );
});

const Stub = styled.div`
  height: 120px;
`;

const Container = styled.div`
  display: flex;
  color: white;
  font-weight: 500;
  padding: 0 20px;
  transition: 0.2s;
  position: relative;
  z-index: 100000;
  height: 120px;
  background: ${theme.colors.darkBackground};
  font-family: "Teko", sans-serif;
  ${(p) =>
    p.invert &&
    p.large &&
    css`
      /* color: ${theme.colors.textInverted}; */
    `}
  ${(p) =>
    p.large
      ? css``
      : css`
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: ${theme.colors.darkBackground};
          /* background: #fffffff8; */
          /* backdrop-filter: blur(15px); */
          box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,
            rgba(0, 0, 0, 0.1) 0px 1.5px 3px;
        `}
`;

const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  @media (max-width: 600px) {
    justify-content: center;
    margin-top: 20px;
  }
  & > :not(:last-child) {
    display: inline-block;
    margin-right: 40px;
  }
`;

const NavLink = styled.a`
  color: inherit;
  text-decoration: none;
  white-space: nowrap;
  &.active {
    font-weight: bold;
  }
`;

const Title = styled.h1`
  @media (max-width: 600px) {
    text-align: center;
  }
`;
