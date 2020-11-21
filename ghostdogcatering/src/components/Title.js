import React from "react";
import styled, { keyframes } from "styled-components";

export default function Title() {
  const options = [
    "Family Occasion",
    "Home Office",
    "Wedding",
    "Office",
    "Home",
    "Crew",
  ];
  const totalTime = options.length * 5;

  return (
    <Container>
      <LogoContainer>
        <Logo src="/logo.png" />
      </LogoContainer>
      <div>
        <SmallText>We'll cook for your</SmallText>
        <BigText>
          {options.map((option, index) => (
            <Slide
              key={index}
              style={{
                animationDelay: totalTime * (index / options.length) + "s",
                animationDuration: totalTime + "s",
              }}
            >
              {option}
            </Slide>
          ))}
        </BigText>
        <ContactButton onClick={() => window.open("mailto:")}>
          Contact Us
        </ContactButton>
      </div>
    </Container>
  );
}

const Container = styled.div`
  font-weight: bold;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  padding: 20px;
  padding-bottom: 100px;
  color: white;
  text-align: center;
  font-family: "Teko", sans-serif;
  position: relative;
  @media (min-width: 600px) {
    display: flex;
    align-items: center;
    & > div {
      flex: 1;
    }
  }
`;

const LogoContainer = styled.div`
  @media (max-width: 600px) {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
`;

const Logo = styled.img`
  width: 100px;
  @media (min-width: 600px) {
    width: 400px;
  }
`;

const BigText = styled.div`
  font-size: clamp(3rem, 5.5vw, 5rem);
  text-align: left;
  position: relative;
  height: 72px;
`;

const SmallText = styled.div`
  text-align: left;
  font-size: clamp(2rem, 3vw, 5rem);
`;

const anim = keyframes`
  from {
    opacity:0;
    transform: translateY(5px);
  }
  5% {
    opacity:1;
    transform: translateY(0);
  }
  15% {
    opacity:1;
    transform: translateY(0);
  }
  20% {
    opacity:0;
    transform: translateY(5px);
  }
  to {
    opacity:0;
    transform: translateY(5px);
  }
`;

const Slide = styled.div`
  animation: ${anim} infinite;
  animation-fill-mode: both;
  position: absolute;
`;

const ContactButton = styled.button`
  border: 0;
  background: white;
  margin: 0;
  padding: 0.25em 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5em;
  font-size: 20px;
  font-size: clamp(2rem, 2vw, 3rem);
  font-family: "Teko", sans-serif;
  font-weight: 500;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;
