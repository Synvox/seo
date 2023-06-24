import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import posts from "../posts.json";
import { Link } from "@remix-run/react";

type Post = {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
  firstLine: string;
  html: string;
};

let perPage = 5;
export function getPosts(pageIndex: number): Post[] {
  //@ts-expect-error
  return posts.slice(pageIndex * perPage, (pageIndex + 1) * perPage);
}

export function getPost(id: string): Post {
  //@ts-expect-error
  return posts.find((post) => post.id === id);
}

export function getMeta() {
  return {
    perPage,
    pages: Math.ceil(posts.length / perPage),
    count: posts.length,
  };
}

export function Blog({
  posts,
  page,
  meta,
}: {
  posts: Post[];
  page: number;
  meta: ReturnType<typeof getMeta>;
}) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  {Boolean(post.thumbnail) && (
                    <>
                      <img
                        src={post.thumbnail}
                        alt=""
                        className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    </>
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-500">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link to={`/blog/${post.id}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p
                      className="prose mt-5 leading-6 text-gray-600"
                      dangerouslySetInnerHTML={{ __html: post.firstLine }}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-20 flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
              <a
                href="#"
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Previous
              </a>
              <a
                href="#"
                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Next
              </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing{" "}
                  <span className="font-medium">{page * meta.perPage + 1}</span>{" "}
                  to{" "}
                  <span className="font-medium">
                    {(page + 1) * meta.perPage}
                  </span>{" "}
                  of <span className="font-medium">{meta.count}</span> results
                </p>
              </div>
              <div>
                <nav
                  className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  <Link
                    to={`?page=${Math.max(0, page - 1)}`}
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </Link>

                  <Link
                    to={`?page=${Math.min(meta.pages - 1, page + 1)}`}
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
