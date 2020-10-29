import React from "react";
import styled, { css } from "styled-components";

export default function Flex({
  direction = "row",
  justifyContent = "space-between",
  children,
}) {
  return (
    <Container direction={direction} justifyContent={justifyContent}>
      {children}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: ${(p) => p.justifyContent};
  ${(p) =>
    p.direction === "row" &&
    css`
      flex-direction: row;
      @media (max-width: 600px) {
        flex-direction: column;
      }
    `}
  ${(p) =>
    p.direction === "column" &&
    css`
      flex-direction: column;
    `}
`;
