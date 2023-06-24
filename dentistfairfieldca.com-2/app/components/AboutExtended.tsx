import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";

export function AboutExtended() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-teal-600">
                Meet Your Dentist
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Dr. Mark Warner DDS
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Dr. Mark Warner, a Fairfield native, has deep roots in the
                community. After completing his education at Armijo High School,
                BYU in Utah, and dental school in Virginia, he obtained his DDS
                from Virginia Commonwealth University, Medical College of
                Virginia - School of Dentistry in 1993. Returning to Fairfield,
                he worked alongside his father, James Warner, as an associate
                dentist before taking over the practice in 1999. With a strong
                commitment to patient comfort and care, Dr. Warner, along with
                his dedicated staff, ensures a welcoming environment for all
                your dental needs.
              </p>
            </div>
          </div>
        </div>
        <div className="p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-full max-w-lg rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
            src="/drwarner.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                In addition to his professional achievements, Dr. Warner has
                enjoyed a fulfilling personal life. He has been happily married
                to Kristin since 1988, and together they have raised four grown
                children. Their family values and friendly demeanor extend to
                their dental practice, where they strive to make every patient
                feel at ease and comfortable.
              </p>
              <p className="mt-8">
                Located on Oliver Road, Dr. Mark J. Warner DDS has established
                himself as a leading dentist in Fairfield, CA. The office boasts
                an abundance of natural light and large windows, creating a
                bright and inviting atmosphere for patients. Experience
                exceptional dental care delivered by a compassionate team in a
                setting designed to enhance your comfort and well-being.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Services Provided by Dr. Mark J. Warner DDS
              </h2>
              <ul role="list" className="mt-8 space-y-3 text-gray-600">
                <li className="flex gap-x-3">
                  <ArrowRightCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-teal-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Preventive Services
                    </strong>{" "}
                    Regular check-ups, cleanings, and exams to maintain optimal
                    oral health.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-teal-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Teeth Whitening
                    </strong>{" "}
                    Professional whitening treatments to enhance the brightness
                    and radiance of your smile.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-teal-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Veneers
                    </strong>{" "}
                    Custom-made porcelain shells that improve the appearance of
                    teeth by addressing chips, stains, and gaps.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-teal-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Bonding
                    </strong>{" "}
                    Dental bonding using tooth-colored composite resin to repair
                    minor chips, cracks, and discoloration.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-teal-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      White Resin Restorations
                    </strong>{" "}
                    Seamless restorations using tooth-colored resin to repair
                    cavities and imperfections.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-teal-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Traditional and Cantilever Bridges
                    </strong>{" "}
                    Replacement options for missing teeth, restoring both
                    function and aesthetics.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
