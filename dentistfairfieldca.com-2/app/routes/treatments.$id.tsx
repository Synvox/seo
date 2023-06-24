import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";
import { LoaderArgs, json, redirect } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { treatments } from "~/components/Treatments";

export function loader(ctx: LoaderArgs) {
  const treatmentId = ctx.params.id;
  const treatment = treatments.find((t) => t.id === treatmentId);
  if (!treatment) throw redirect("..");
  return json({
    treatment,
  });
}

export default function TreatmentRoute() {
  const { treatment } = useLoaderData<typeof loader>();
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {treatment.title}
          </h1>
        </div>
        <p className="mt-6 text-xl leading-8 text-gray-700">
          {treatment.shortDescription}
        </p>
        <div className="mx-auto mt-16">
          <article className="prose text-base leading-7 text-gray-700 lg:col-span-7">
            {treatment.longDescription.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <h2 className="mb-0 mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Summary
            </h2>
            <ul role="list" className="mt-8 space-y-2 text-gray-600">
              {treatment.bulletPoints.map((bullet, i) => (
                <li className="flex gap-x-3" key={i}>
                  <ArrowRightCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-teal-600"
                    aria-hidden="true"
                  />
                  <span className="mb-0">{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="/contact"
              className="relative rounded-md border border-yellow-400 bg-yellow-300 px-5 py-2 text-sm font-semibold leading-6 text-yellow-900 transition-colors hover:border-yellow-300 hover:bg-yellow-100 active:top-[1px] active:bg-yellow-300 active:transition-none"
            >
              Schedule Appointment <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
