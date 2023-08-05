import { Link } from "@remix-run/react";

export function getHeadline() {
  const headlines = [
    {
      headline: "Discover Your Perfect Smile: Personalized Dental Care",
      subheadline:
        "Comprehensive and Advanced Treatments in Fairfield, California including Teeth Whitening, Veneers, Bonding, and White Resin Restorations",
    },
    {
      headline: "Transform Your Smile: Professional Dental Services",
      subheadline:
        "Unlock Your Smile's Potential with Invisalign Clear Wireless Braces and the New iTero Element® Scanner in Fairfield, California",
    },
    {
      headline: "Optimal Oral Health: Quality Dentistry by Mark J. Warner",
      subheadline:
        "Comprehensive Dental Care in Fairfield, California including Fillings, Crowns, Inlays, Onlays, Dental Implants, and Crown and Bridgework",
    },
    {
      headline: "Trusted Dental Office: Personalized Care",
      subheadline:
        "Building Trust and Providing Exceptional Dental Services for a Healthy, Confident Smile in Fairfield, California",
    },
    {
      headline: "Schedule Your Visit: Exceptional Dental Services",
      subheadline:
        "Take the First Step Towards a Healthy Smile – Book an Appointment for Preventive Checkups, Cleanings, or Dental Procedures in Fairfield, California",
    },
    {
      headline: "Enhance Your Smile: Advanced Dental Solutions",
      subheadline:
        "Explore State-of-the-Art Techniques for Smile Transformations including Restorative Dentistry and Dental Implants in Fairfield, California",
    },
    {
      headline: "Quality Dental Care: Trust Dr. Mark J. Warner",
      subheadline:
        "Experience Unmatched Expertise and Compassionate Dental Care for Optimal Oral Health in Fairfield, California",
    },
    {
      headline: "Excellence in Dentistry: Mark J. Warner DDS",
      subheadline:
        "Unlock Your Smile's Potential with Cosmetic Dentistry, Restorative Treatments, and Advanced Dental Solutions in Fairfield, California",
    },
    {
      headline: "Your Dental Needs, Our Priority: Exceptional Care",
      subheadline:
        "Dedicated to Your Comfort and Satisfaction – Your Smile Deserves the Best in Fairfield, California",
    },
    {
      headline: "Transformative Dentistry: Radiant Smile",
      subheadline:
        "Experience Life-changing Dental Solutions including Bridges, Teeth Whitening, Veneers, Bonding, and White Resin Restorations in Fairfield, California",
    },
  ];

  return headlines[Math.floor(Math.random() * headlines.length)];
}

export function getPhoto() {
  const images = [
    "/stock-photos/home-1.png",
    "/stock-photos/home-2.png",
    "/stock-photos/home-3.png",
    "/stock-photos/home-4.png",
  ];
  return images[Math.floor(Math.random() * images.length)];
}

type Headline = ReturnType<typeof getHeadline>;

export function Hero({
  headline,
  photo,
}: {
  headline: Headline;
  photo: string;
}) {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="hidden sm:mt-32 sm:flex lg:mt-16">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Get a Free Consultation &nbsp;
                <Link
                  to="/contact"
                  className="whitespace-nowrap font-semibold text-teal-600"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Contact Us <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              {headline.headline}
            </h1>
            <h2 className="mt-6 text-lg leading-8 text-gray-600">
              {headline.subheadline}
            </h2>
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
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src={photo}
            alt="People smiling"
          />
        </div>
      </div>
    </div>
  );
}
