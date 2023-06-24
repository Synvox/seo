import {
  json,
  type LoaderArgs,
  type V2_MetaFunction,
} from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { About } from "~/components/About";
import { getHeadline, Hero } from "~/components/Hero";
import { Insurance } from "~/components/Insurance";
import { Testimonials } from "~/components/Testimonials";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export function loader(ctx: LoaderArgs) {
  return json({
    headline: getHeadline(),
  });
}

export default function Index() {
  const { headline } = useLoaderData<typeof loader>();
  return (
    <>
      <Hero headline={headline} />
      <About />
      <Testimonials />
      <Insurance />
    </>
  );
}
