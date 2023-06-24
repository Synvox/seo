export function Insurance() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-5">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              We are in network with several insurance providers
            </h2>
          </div>
          <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-4">
            {[
              {
                title: "Anthem",
                url: "/insurance/anthem.svg",
              },
              {
                title: "Delta Dental",
                url: "/insurance/delta-dental.png",
              },
              {
                title: "Ameritas",
                url: "/insurance/ameritas.png",
              },
              {
                title: "Blue Cross Blue Shield FEP DentalS",
                url: "/insurance/bluecross-blueshield.png",
              },
            ].map(({ title, url }, i) => (
              <div
                className="flex items-center justify-center bg-gray-400/5 p-6 sm:p-10"
                key={i}
              >
                <img
                  className="max-h-12 w-full object-contain"
                  src={url}
                  alt={title}
                  width={158}
                  height={48}
                />
              </div>
            ))}
          </div>
          <div className="text-sm text-gray-500">
            Although we are only in network with the above insurance{" "}
            <span className="text-teal-700">
              we accept most insurances under the out of network benefit for the
              plan.
            </span>{" "}
            Call and we would be happy to check for your particular plan what
            your benefits would be here at our office. Unfortunately we do not
            accept Medicare at this time.
          </div>
        </div>
      </div>
    </div>
  );
}
