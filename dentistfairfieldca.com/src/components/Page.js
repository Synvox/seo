import React from "react";
import styled from "styled-components";
import { SITE_WIDTH, SITE_PADDING, THEME_COLOR, PAGE_WIDTH } from "../vars";

function Page({ children, style }) {
  return (
    <Container style={style}>
      <Inner>{children}</Inner>
    </Container>
  );
}

const Container = styled.article`
  text-align: center;
  margin: 40px 0;
  h2 {
    font-size: 30px;
    vertical-align: center;
  }
  h3 {
    font-size: 20px;
  }
  h2,
  h3 {
    margin: 1em 0;
    small {
      font-size: 0.6em;
      display: block;
      margin: 0.5em 0;
      color: ${THEME_COLOR};
      font-style: italic;
    }
  }
  p {
    font-size: 18px;
    line-height: 1.4em;
    margin-bottom: 2em;
    max-width: 60ch;
  }
  ul,
  li {
    font-size: 18px;
    line-height: 1.5em;
  }
  img:not(.raw),
  iframe:not(.raw) {
    width: 100%;
    max-width: 100%;
    margin-bottom: 40px;
    border-radius: 7px;
    &:before,
    &:after {
      display: block;
      content: "";
      width: 100%;
      height: 2px;
    }

    @media (max-width: 600px) {
      margin-bottom: 20px;
    }
  }
  @media (max-width: 600px) {
    margin: 20px 0;
  }
`;

const Inner = styled.div`
  margin: auto;
  max-width: ${PAGE_WIDTH};
  padding: ${SITE_PADDING};
  text-align: left;
`;

export const Aside = styled.aside`
  width: 100%;
  & > img,
  & > iframe {
    width: 100%;
    min-height: 20vh;
    margin-bottom: 40px;
    border-radius: 7px;
    @media (max-width: 600px) {
      margin-bottom: 20px;
    }
  }
`;

export default Page;
