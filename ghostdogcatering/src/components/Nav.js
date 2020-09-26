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
          <Flex>
            <Links style={{ justifyContent: "flex-start" }}>
              <NavLink href="#">Features</NavLink>
              <NavLink href="#">Pricing</NavLink>
              <NavLink href="#">Integrations</NavLink>
              <NavLink href="https://blog.skipio.com">Blog</NavLink>
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
  color: ${theme.colors.textMain};
  font-weight: 500;
  padding: 0 20px;
  transition: 0.2s;
  position: relative;
  z-index: 100000;
  ${(p) =>
    p.invert &&
    p.large &&
    css`
      color: ${theme.colors.textInverted};
    `}
  ${(p) =>
    p.large
      ? css`
          height: 120px;
        `
      : css`
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: ${theme.colors.darkBackground};
          /* background: #fffffff8; */
          /* backdrop-filter: blur(15px); */
          box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,
            rgba(0, 0, 0, 0.1) 0px 1.5px 3px;
        `}
`;

const Links = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  & > :not(:last-child) {
    display: inline-block;
    margin-right: 40px;
  }
`;

const NavLink = styled.a`
  color: inherit;
  text-decoration: none;
  white-space: nowrap;
  font-size: 16px;
  &.active {
    font-weight: bold;
  }
`;
