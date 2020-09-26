import { theme } from "../theme";
import styled from "styled-components";
import Nav from "../components/Nav";
import Section from "../components/Section";
import Timp from "../components/Timp";
import Title from "../components/Title";
import Images from "../components/Images";

export default function Home() {
  return (
    <>
      {/* <Nav invert></Nav> */}
      <Section style={{ height: "60vmin" }} background={<Timp />}>
        <Title></Title>
      </Section>
      <Section>
        <Images />
      </Section>
      <Section style={{ height: "100vh" }}></Section>
    </>
  );
}
