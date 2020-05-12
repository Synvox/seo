import App from "next/app";
import styled, { createGlobalStyle } from "styled-components";
import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Head from "next/head";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Welcome to Mark J Warner, DDS</title>
          <meta
            name="description"
            content="General, Cosmetic, Implant, and Family Dentistry in Fairfield, CA We are a Fairfield dental office specializing in helping you with
          all of your dental needs."
          />
        </Head>
        <GlobalStyle />
        <Nav />
        <Content>
          <Component {...pageProps} />
        </Content>
        <Footer />
      </>
    );
  }
}

const Content = styled.div`
  flex-grow: 1;
`;

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, 
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background: #fafafa;
    color: #3E3F42;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",sans-serif;
    font-size: 13px;
    text-rendering: optimizeLegibility;
  }
  *:focus {
    outline: none;
  }
  body.accessability *:not([data-slate-editor='true']):focus {
    outline: 2px solid #7aacfe !important; /* for non-webkit browsers */
    outline: 5px auto -webkit-focus-ring-color !important;
  }
  input:not([type=checkbox]):not([type=radio]), textarea {
    -webkit-appearance: none;
  }
  * {
    -webkit-tap-highlight-color: transparent;
  }
  #__next {
    display: flex;
    flex-direction: column;
  }
  html,body,#__next {
    height:100%;
  }
`;
