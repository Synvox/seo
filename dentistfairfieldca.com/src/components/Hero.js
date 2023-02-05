import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { darken } from "polished";
import { SITE_WIDTH } from "../vars";
import ScheduleButton from "./ScheduleButton";
import Stack from "./Stack";
import Page from "./Page";
import { Info } from "./Icon";

const slideSrcs = [
  "/slider/a.jpeg",
  "/slider/b.jpeg",
  "/slider/c.jpeg",
  "/slider/d.jpeg",
  "/slider/e.jpeg",
];

const wait = () => new Promise((r) => setTimeout(r, 6400));

function Hero() {
  const [srcs, setSrcs] = useState([slideSrcs[0]]);
  useEffect(() => {
    async function loadLazy() {
      for (let i = 1; i < slideSrcs.length; i++) {
        await wait();
        const src = slideSrcs[i];
        setSrcs((existing) => [...existing, src]);
      }
    }

    if (typeof window !== "undefined") loadLazy();
  }, []);

  return (
    <Container>
      <Inner>
        <Slider>
          {srcs.map((src) => (
            <Slide
              key={src}
              alt="Person smiling"
              style={{
                backgroundImage: `url("${src}")`,
              }}
            />
          ))}
          <Caption>
            <Page style={{ margin: 0, padding: 0 }}>
            </Page>
          </Caption>
        </Slider>
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
  height: 640px;
  position: relative;
  background-position: center 25%;
  background-size: cover;
  text-align: center;
  padding: 40px;
  border-bottom: 1px solid #eee;
  background: #f8f8f8;
  @media (max-width: 600px) {
    height: auto;
    padding: 10px;
  }
`;

const Inner = styled.div`
  margin: auto;
  max-width: ${SITE_WIDTH};

  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(50px); */
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); */
  /* border-radius: 7px; */
  overflow: hidden;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Overlay = styled.div`
  width: 100%;
  max-width: 400px;
  text-align: left;
  padding: 60px;
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

const Slider = styled.div`
  height: 100%;
  flex: 1;
  position: relative;
  background: black;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const fadeIn = keyframes`
  0% {
    opacity:0;
  }
  2% {
    opacity:1;
  }
  28% {
    opacity:1;
  }
  30% {
    opacity:0;
  }
  100% {
    opacity:0;
  }
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: 50% 50%;
  background-size: cover;
  animation-fill-mode: both;
  animation: ${fadeIn} 32s infinite;
  opacity: 0;
`;

const Caption = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  z-index: 1;
  color: white;
  text-shadow: 0px 1px 1px black, 0px 1px 8px rgba(0, 0, 0, 0.2);
  a {
    color: inherit;
    &:visited {
      color: white;
    }
  }
`;

export default Hero;
