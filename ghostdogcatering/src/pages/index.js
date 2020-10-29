import { theme } from "../theme";
import styled from "styled-components";
import Nav from "../components/Nav";
import Section from "../components/Section";
import Timp from "../components/Timp";
import Title from "../components/Title";
import Images from "../components/Images";
import { Blockquote, Heading, P, Padding } from "../components/typography";
import Stack from "../components/Stack";

export default function Home() {
  return (
    <>
      <Nav invert></Nav>
      <Section style={{ height: "60vmin" }} background={<Timp />}>
        <Title></Title>
      </Section>
      <Section>
        <Images />
      </Section>
      <Section>
        <Padding>
          <Stack>
            <Heading>Custom Food</Heading>
            <P>
              <ul>
                <li>Homemade Family Meals</li>
                <li>Gourmet Brown Bag Lunches for Crews &amp; Office Staff</li>
                <li>Elaborate Tapas Style Dinners</li>
                <li>Brunches and fresh baked goods</li>
                <li>Food for Family and Friend Celebrations</li>
                <li>Private Chef Services</li>
                <li>Custom Menus By Request</li>
              </ul>
            </P>
            <Heading>Reviews</Heading>
            <Blockquote cite="Tisha (Dallas, Aug 2020)">
              Best food I've ever had
            </Blockquote>
            <Blockquote cite="Courtney (Dallas, Aug 2020)">
              Best Dessert of my life
            </Blockquote>
          </Stack>
        </Padding>
      </Section>
    </>
  );
}
