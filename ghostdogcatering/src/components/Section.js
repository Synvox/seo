import React from "react";
import styled from "styled-components";
import { theme } from "../theme";

export default function Section({ children, background = null, style }) {
  return (
    <Container style={style}>
      {Boolean(Background) && <Background>{background}</Background>}
      <Inner>{children}</Inner>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  position: relative;
  display: flex;
  flex: 1;
`;

const Inner = styled.div`
  width: 100%;
  max-width: ${theme.siteWidth};
  margin: auto;
  position: relative;
  z-index: 1;
  text-align: left;
`;
const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;
