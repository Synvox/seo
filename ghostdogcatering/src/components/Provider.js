import React from "react";
import { createGlobalStyle } from "styled-components";
import { theme } from "../theme";
import { normalize } from "polished";

export default function Provider({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  body,html {
    margin:0;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin:0;
  }
 *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",sans-serif;
    font-size: 14px;
    text-rendering: optimizeLegibility;
    background: white;
  
  }
`;
