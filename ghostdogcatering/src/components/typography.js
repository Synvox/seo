import styled from "styled-components";
import Stack from "./Stack";

export const Heading = styled.h2`
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-family: "Teko", sans-serif;
  text-align: center;
  position: relative;
  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 80px;
    bottom: 0;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    background: #7e27a9;
  }
`;

export const Heading2 = styled(Heading)`
  font-size: clamp(2rem, 2vw, 2rem);
  &::after {
    display: none;
  }
`;

export const P = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  li:not(:last-child) {
    margin-bottom: 0.5em;
  }
`;

export const Padding = styled.div`
  padding: 100px 20px;
  @media (max-width: 20px) {
    padding: 20px;
  }
`;

const BlockquoteContainer = styled.blockquote`
  margin: 0;
  p {
    padding: 15px;
    background: #eee;
    border-radius: 5px;
  }
`;

const Cite = styled.cite`
  display: block;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  text-align: right;
`;

export function Blockquote({ children, cite }) {
  return (
    <BlockquoteContainer>
      <Stack space={1}>
        <P>{children}</P>
        <footer>
          <Cite>{cite}</Cite>
        </footer>
      </Stack>
    </BlockquoteContainer>
  );
}
