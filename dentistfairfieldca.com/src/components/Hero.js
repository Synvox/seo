import React from "react";
import styled from "styled-components";
import { darken } from "polished";
import { SITE_WIDTH, THEME_COLOR } from "../vars";

function Hero() {
  return (
    <Container
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1495004984586-0dc339ad4b2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3400&q=80)`
      }}
    >
      <Inner>
        <Overlay>
          <h1>
            Looking for a Dentist in Fairfield, CA?
            <small>We specialize in smiles for the whole family.</small>
          </h1>
          <SubscribeButton href="https://reviews.solutionreach.com/vs/mark_j_warner_dds/appt">
            Request Appointment
          </SubscribeButton>
        </Overlay>
      </Inner>
    </Container>
  );
}

const Container = styled.div`
  height: 50vh;
  position: relative;
  background-position: center 25%;
  background-size: cover;
  background-color: #433a31;
  text-align: center;
  @media (max-width: 600px) {
    height: auto;
  }
`;

const Inner = styled.div`
  margin: auto;
  max-width: ${SITE_WIDTH};
  padding: 40px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Overlay = styled.div`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 3px;
  width: 380px;
  text-align: left;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  @media (max-width: 600px) {
    width: 100%;
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

const SubscribeButton = styled.a`
  margin-top: 2em;
  background: ${THEME_COLOR};
  color: white;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 7px;
  font-size: 14px;
  &:active {
    background: ${darken(0.1, THEME_COLOR)};
  }
`;

export default Hero;