import { json, LoaderArgs, type V2_MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { Blog, getMeta, getPosts } from "~/components/Blog";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export function loader(ctx: LoaderArgs) {
  const url = new URL(ctx.request.url);
  const page = Number(url.searchParams.get("page")) || 0;

  return json({
    posts: getPosts(page),
    page,
    meta: getMeta(),
  });
}

export default function Index() {
  const { posts, page, meta } = useLoaderData<typeof loader>();
  return (
    <>
      <Blog posts={posts} page={page} meta={meta} />
    </>
  );
}
