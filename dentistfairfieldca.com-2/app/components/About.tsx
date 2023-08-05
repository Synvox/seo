export function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-[32rem] shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="/drwarner.png"
                alt="Dr. Mark Warner"
              />
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-teal-600">
                Meet Your Dentist
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Dr. Mark Warner
              </h1>
              <div className="mt-10 flex max-w-xl flex-col gap-5">
                <p>
                  Dr. Mark Warner, a Fairfield native, has deep roots in the
                  community. After completing his education at Armijo High
                  School, BYU in Utah, and dental school in Virginia, he
                  obtained his DDS from Virginia Commonwealth University,
                  Medical College of Virginia - School of Dentistry in 1993.
                  Returning to Fairfield, he worked alongside his father, James
                  Warner, as an associate dentist before taking over the
                  practice in 1999. With a strong commitment to patient comfort
                  and care, Dr. Warner, along with his dedicated staff, ensures
                  a welcoming environment for all your dental needs.
                </p>
              </div>
            </div>

            <div className="mt-10 flex">
              <a
                href="/about"
                className="text-base font-semibold leading-7 text-teal-600"
              >
                Learn more about Dr. Mark Warner
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
