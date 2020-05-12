import React from "react";
import styled from "styled-components";
import { darken } from "polished";
import { SITE_WIDTH } from "../vars";
import ScheduleButton from "./ScheduleButton";
import Stack from "./Stack";
import Page from "./Page";
import { Info } from "./Icon";

function Hero() {
  return (
    <Container
      style={{
        backgroundImage: `url(/beach.jpg)`,
      }}
    >
      <Inner>
        <Overlay>
          <Page style={{ margin: 0 }}>
            <h2>
              <Info
                style={{
                  marginRight: "8px",
                  width: "32px",
                  height: "32px",
                  transform: "translateY(5px)",
                }}
              />{" "}
              Important COVID-19 Update
            </h2>
            <p>
              Based on California Gov. Gavin Newsom’ mandate on March 19, 2020,
              all dental offices in this state are only permitted to see
              patients who are experiencing a true dental emergency until
              further notice.
            </p>
            <p>
              <a href="/blog/covid">More Information</a>
            </p>
          </Page>
        </Overlay>
        <Overlay>
          <Stack>
            <h1>
              Looking for a Dentist in Fairfield, CA?
              <small>We specialize in smiles for the whole family.</small>
            </h1>
            <ScheduleButton label="Contact Dr. Warner" />
          </Stack>
        </Overlay>
      </Inner>
    </Container>
  );
}

const Container = styled.div`
  height: 40vh;
  position: relative;
  background-position: center 25%;
  background-size: cover;
  background-color: #433a31;
  text-align: center;
  padding: 40px;
  @media (max-width: 600px) {
    height: auto;
  }
`;

const Inner = styled.div`
  margin: auto;
  max-width: ${SITE_WIDTH};

  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(50px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Overlay = styled.div`
  width: 100%;
  max-width: 400px;
  text-align: left;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 600px) {
    width: 100%;
  }
  &:first-child {
    max-width: 600px;
    @media (max-width: 600px) {
      margin-bottom: 20px;
    }
  }
  h1 {
    font-size: 35px;
    line-height: 1.2em;
    @media (max-width: 600px) {
      font-size: 30px;
    }
    small {
      display: block;
      margin-top: 8px;
      font-size: 20px;
      line-height: 1.2em;
      opacity: 0.8;
      @media (max-width: 600px) {
        font-size: 14px;
      }
    }
  }
`;

export default Hero;
