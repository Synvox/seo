import React from "react";
import styled from "styled-components";
import { theme } from "../theme";

export default function Timp() {
  return (
    <Container>
      <BumpTop />
      <TimpContainer>
        <FadeBottom />
        <FadeTop />
      </TimpContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  top: 30vmin;
`;

const BumpTop = styled.div`
  background: ${theme.colors.darkBackground};
  height: 20%;
`;

const TimpContainer = styled.div`
  background: url("/timp.jpg");
  background-size: 100%;
  background-position: top center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: relative;
`;

const FadeBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20%;
  background-image: linear-gradient(
    transparent,
    ${theme.colors.darkBackground}
  );
`;

const FadeTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 10%;
  background-image: linear-gradient(
    ${theme.colors.darkBackground},
    transparent
  );
`;
