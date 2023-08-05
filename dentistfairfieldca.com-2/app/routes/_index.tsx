import {
  json,
  type LoaderArgs,
  type V2_MetaFunction,
} from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { About } from "~/components/About";
import { getHeadline, getPhoto, Hero } from "~/components/Hero";
import { Insurance } from "~/components/Insurance";
import { Testimonials } from "~/components/Testimonials";

export const meta: V2_MetaFunction<typeof loader> = (args) => {
  return [
    { title: "Welcome to Mark J Warner, DDS" },
    { name: "description", content: args.data?.headline },
  ];
};

export function loader(ctx: LoaderArgs) {
  return json({
    headline: getHeadline(),
    photo: getPhoto(),
  });
}

export default function Index() {
  const { headline, photo } = useLoaderData<typeof loader>();
  return (
    <>
      <Hero headline={headline} photo={photo} />
      <About />
      <Testimonials />
      <Insurance />
    </>
  );
}
