import type { V2_MetaFunction } from "@remix-run/cloudflare";
import { About } from "~/components/About";
import { Contact } from "~/components/Contact";
import { Hero } from "~/components/Hero";
import { Insurance } from "~/components/Insurance";
import { Testimonials } from "~/components/Testimonials";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function ContactRoute() {
  return (
    <>
      <Contact />
    </>
  );
}
