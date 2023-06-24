const featuredTestimonial = {
  body: "When it comes to a dentist, you will not find a better one than Dr. Warner. His experience is second to none. I have had multiple teeth worked on by him through the years. The prices are excellent the staff are highly professional, the office spotless and uses the latest in dental technology. I cannot recommend him enough.",
  author: {
    name: "Eddie",
  },
};
const testimonials = [
  [
    [
      {
        body: "Dr Mark is my second generation of Warner dentists. We started with his Dad in the late 70’s. Mark has advanced the services and quality of the practice. Everyone in the practice is empathetic and caring for the patient. Whatever my issues I’ve had throughout the years, the Warner’s have taken care of it. I would recommend Dr. Mark to anyone.",
        author: {
          name: "David C",
        },
      },
      {
        body: "Dr. Warner is the only dentist I'll ever go to. He has a very gentle hand and is very skilled in what he does. Everyone who works there is great. If you have a fear of dentist's, trust me when I say this, he will put you at ease and make you feel comfortable. A+ in my books.",
        author: {
          name: "Tom S",
        },
      },
      {
        body: "I am extremely happy and satisfied! Dr Warner did a great job and no words can explain how happy and thankful I am. Thanks to Kristin for filling me in on that same day. Everyone is Professional, courteous, and friendly staff made me feel like family! I would highly recommend this place.",
        author: {
          name: "M S",
        },
      },
    ],
    [
      {
        body: "Dr. Warner is a great dentist with a wonderful staff. Our family has always had a good experience here.",
        author: {
          name: "Jeff H",
        },
      },
      {
        body: "Great time and incredibly helpful. Very insightful and very fast to accommodate. This dentist will be my go to from now on.",
        author: {
          name: "Shane L",
        },
      },
      {
        body: "Love Doctor. Warner! He is willing to work with you and squeeze you in at anytime.",
        author: {
          name: "Chelsea H",
        },
      },
    ],
  ],
  [
    [
      {
        body: "I love the dentist and his staff. They are always so caring and gentle I wouldn’t go anywhere else",
        author: {
          name: "Kerry D",
        },
      },
      {
        body: "Every time I am seen at Dr Warner's, I am continually impressed with the kind, professional and friendly care I receive! Dr Warner has a way with people and really understands the importance of caring for his patient's oral health. I always feel at ease once I am in the dental chair, despite the nerves I feel leading up to the appointment. Dr Warner and his staff handle patients' dental anxiety very well and it is obvious that they love their work and are highly trained. I will never switch dentists!",
        author: {
          name: "Madison D",
        },
      },
    ],
    [
      {
        body: "I’ve been coming here for years. Dr. Warner recently got me my invisaliners and I have finally reached a lifelong goal of having straight good looking teeth! I also come here for everything else teeth related. I’m not very easy to deal with when it comes to my mouth (Gag reflex), but the people here are awesome and are always very patient. Love this place and staff.",
        author: {
          name: "Joshua P",
        },
      },
      {
        body: "Friendly staff and easygoing Doctor. He makes sure your comfortable before anything else. Very good experience",
        author: {
          name: "Gregory D",
        },
      },
      {
        body: "Outstanding Dentist and staff. Highly recommend to anybody looking for a dentist.",
        author: {
          name: "Mosscreek",
        },
      },
      {
        body: "It’s a great experience whenever I come in for a cleaning. Very welcoming and professional staff. They’re amazing!",
        author: {
          name: "Nicholas S",
        },
      },
    ],
  ],
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function Testimonials() {
  return (
    <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-teal-500 to-yellow-600"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        aria-hidden="true"
      >
        <div
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-teal-500 to-yellow-600 xl:ml-0 xl:mr-[calc(50%-12rem)]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-teal-600">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We have worked with many amazing people
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
              <div className="flex-auto">
                <div className="font-semibold">
                  {featuredTestimonial.author.name}
                </div>
              </div>
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8"
                  )}
                >
                  {column.map((testimonial, i) => (
                    <figure
                      key={i}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
