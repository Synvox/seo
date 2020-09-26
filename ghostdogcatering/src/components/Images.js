import React from "react";
import styled, { keyframes } from "styled-components";

const files = [
  "a.jpg",
  "b.jpg",
  "c.jpg",
  "d.jpg",
  "e.jpg",
  "f.jpg",
  "g.jpg",
  "h.jpg",
  "i.jpg",
  "j.jpg",
  "k.jpg",
  "l.jpg",
  "m.jpg",
  "n.jpg",
  "o.jpg",
];

export default function Images() {
  const divvyUp = files.reduce(
    (acc, name, index) => {
      acc[index % 3].push(name);
      return acc;
    },
    [[], [], []]
  );

  return (
    <Container>
      {divvyUp.map((slides, indexOuter) => {
        const totalTime = slides.length * 3;
        return (
          <Inner key={indexOuter}>
            <Image>
              {slides.map((name, index) => (
                <Slide
                  key={index}
                  style={{
                    backgroundImage: `url(/${name})`,
                    animationDelay:
                      totalTime * (index / slides.length) +
                      indexOuter / 2 +
                      "s",
                    animationDuration: totalTime + "s",
                  }}
                />
              ))}
            </Image>
          </Inner>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  box-shadow: 0px 0px 0px 2px #0004;
  background: #0004;
`;

const Inner = styled.div`
  width: 33.333333%;
`;

const Image = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  overflow: hidden;
`;

const anim = keyframes`
  from {
    opacity:0;
    transform: translateY(5px);
  }
  10% {
    opacity:1;
    transform: translateY(0);
  }
  15% {
    opacity:1;
    transform: translateY(0);
  }
  50% {
    opacity:0;
    transform: translateY(5px);
  }
  to {
    opacity:0;
    transform: translateY(5px);
  }
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  animation: ${anim} infinite;
  animation-fill-mode: both;
  position: absolute;
  top: 0;
  background-size: cover;
  background-position: 50% 50%;
`;
