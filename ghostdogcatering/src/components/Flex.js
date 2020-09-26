import React from "react";
import styled from "styled-components";

export default function Flex({
  direction = "row",
  justifyContent = "space-between",
  children,
}) {
  return (
    <Container style={{ flexDirection: direction, justifyContent }}>
      {children}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
`;
