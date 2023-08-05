import type { V2_MetaFunction } from "@remix-run/cloudflare";
import { AboutExtended } from "~/components/AboutExtended";

export const meta: V2_MetaFunction = () => {
  return [{ title: "About Mark J Warner, DDS" }];
};

export default function About() {
  return (
    <>
      <AboutExtended />
    </>
  );
}
