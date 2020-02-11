import React from "react";
import styled from "styled-components";
import { PAGE_WIDTH, SITE_PADDING } from "../vars";
import Icon, {
  MapMarker,
  Phone,
  Instagram,
  Twitter,
  Pinterest,
  Facebook,
  LinkedIn
} from "./Icon";
import Stack from "./Stack";

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
          <Stack horizontal>
            <a href="https://www.instagram.com/dentistfairfieldca/">
              <Instagram />
            </a>
            <a href="https://twitter.com/markwarnerdds">
              <Twitter />
            </a>
            <a href="https://pinterest.com/markwarnerdds">
              <Pinterest />
            </a>
            <a href="https://www.facebook.com/markwarnerdentistry/">
              <Facebook />
            </a>
            <a href="https://www.linkedin.com/company/mark-j-warner-dds-inc">
              <LinkedIn />
            </a>
          </Stack>
        </Center>
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
  a {
    color: inherit;
  }
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
