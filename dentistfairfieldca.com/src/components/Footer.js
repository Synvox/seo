import React from "react";
import styled from "styled-components";
import { PAGE_WIDTH, SITE_PADDING } from "../vars";

function Footer() {
  return (
    <Container>
      <Inner>
        <H2>Mark J. Warner DDS Inc. General Dentistry</H2>
        <H3>Fairfield California Dentist Office</H3>
        <Address>
          1291 Oliver Rd Fairfield, CA 94534
          <br />
          Phone: 707-422-7633
          <br />
          Hours: Mon-Thu 9:00 AM – 5:00 PM
          <br />
          Closed Friday, Saturday, and Sunday
        </Address>
        <Center>
          Copyright © 2019 · 1291 Oliver Rd · Fairfield CA · 94534 ·
          707-422-7633
        </Center>
      </Inner>
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
  border-top: 1px solid #eee;
  background: #fff;
`;

const Inner = styled.div`
  margin: auto;
  max-width: ${PAGE_WIDTH};
  padding: ${SITE_PADDING};
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const H2 = styled.h2`
  font-size: 2em;
  margin-bottom: 10px;
`;

const H3 = styled.h2`
  font-size: 1.4em;
  margin-bottom: 10px;
`;

const Address = styled.div`
  font-size: 1.2em;
  line-height: 1.4em;
`;

const Center = styled.div`
  text-align: center;
  margin: 3em 0;
`;