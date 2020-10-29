import React, { useState } from "react";
import styled, { css } from "styled-components";

export default function Drawer({ header, children }) {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <Container>
      <Header onClick={() => setIsShowing(!isShowing)}>{header}</Header>
      <Content hide={!isShowing}>{children}</Content>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
`;
const Header = styled.button`
  appearance: none;
  font-size: inherit;
  display: block;
  padding: 20px;
  margin: 0;
  background: none;
  border: 0;
  flex: 1;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  border-radius: 8px;
  transition-duration: 0.2s;
  &:hover {
    background: #0001;
  }
`;
const Content = styled.div`
  overflow: hidden;
  height: auto;
  transition-duration: 2s;
  border-top: 1px solid #ccc;
  padding: 20px;
  ${(p) =>
    p.hide &&
    css`
      display: none;
    `}
`;
