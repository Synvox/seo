import { twMerge } from "tailwind-merge";

import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Link, NavLink, useLocation, useNavigation } from "@remix-run/react";

const navigation = [
  { name: "About Dr. Warner", href: "/about" },
  { name: "Treatments", href: "/treatments" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { state } = useNavigation();
  useEffect(() => {
    if (state !== "idle") setMobileMenuOpen(false);
  }, [state]);
  const location = useLocation();
  const isContact = location.pathname === "/contact";

  return (
    <>
      <header className="border-b border-b-slate-100 bg-white">
        <nav className="h-1 bg-yellow-600 text-center">
          <div className="mx-auto max-w-7xl px-4 text-right sm:px-6 lg:px-8"></div>
        </nav>
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center gap-x-12">
            <Link to="/" className="-m-3 p-1.5">
              <span className="sr-only">Mark J Warner, D.D.S.</span>
              <img className="h-14 w-auto" src="/logo.jpg" alt="" />
            </Link>
            <div className="hidden  p-1 lg:flex lg:gap-x-3">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    twMerge(
                      "rounded-lg px-3 py-1 text-sm font-semibold leading-6 text-gray-800 transition-colors",
                      isActive ? "bg-teal-50 text-teal-900" : ""
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {!isContact && (
            <div className="hidden lg:flex">
              <Link
                to="/contact"
                className="relative rounded-md border border-yellow-400 bg-yellow-300 px-5 py-2 text-sm font-semibold leading-6 text-yellow-900 transition-colors hover:border-yellow-300 hover:bg-yellow-100 active:top-[1px] active:bg-yellow-300 active:transition-none "
              >
                Schedule Appointment <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          )}
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Mark J Warner, D.D.S.</span>
                <img
                  className="-m-1 h-14 w-auto"
                  src="/logo.jpg"
                  alt="Mark J Warner, D.D.S."
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                      }}
                      className={({ isActive }) =>
                        twMerge(
                          `hover:bg-gray-50" -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900`,
                          isActive ? "text-teal-500" : ""
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-yellow-700 hover:bg-gray-50"
                  >
                    Schedule Appointment
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      {children}
      <Footer />
    </>
  );
}
