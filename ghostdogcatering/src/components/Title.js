import React from "react";
import styled, { keyframes } from "styled-components";

export default function Title() {
  const options = ["Home Office", "Wedding", "Office", "Home", "Crew"];
  const totalTime = options.length * 4;

  return (
    <Container>
      <div>
        <Logo src="/logo.png" />
      </div>
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
      </div>
    </Container>
  );
}

const Container = styled.div`
  font-weight: bold;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  padding: 20px;
  padding-bottom: 100px;
  @media (min-width: 600px) {
    display: flex;
    align-items: center;
    & > div {
      flex: 1;
    }
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
