import Link from "next/link";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

import {
  ClipboardListIcon,
  CogIcon,
  MenuIcon,
  PhoneIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  TruckIcon,
  SupportIcon,
  ChatAlt2Icon,
  XIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

const solutions = [
  {
    name: "Sklady",
    description:
      "Prediktivní a automatizované řízení skladových pohybů a zásobování výroby",
    href: "/solutions/warehouse",
    icon: ClipboardListIcon,
  },
  {
    name: "Řízení výroby",
    description:
      "Správa výrobních linek a procesů výroby s přímým propojením na ostatní části",
    href: "/solutions/production",
    icon: CogIcon,
  },
  {
    name: "Logistika",
    description:
      "Řízení logistiky s komunikací s odběratelem a koordinací montážních pracovníků",
    href: "/solutions/logistics",
    icon: TruckIcon,
  },
  {
    name: "Správa zakázek a partnerský portál",
    description:
      "Online vytváření objednávek, reklamace, servis a výrobní změny",
    href: "/solutions/partner-portal",
    icon: ChatAlt2Icon,
  },
  {
    name: "Docházkový systém",
    description: "Evidence docházky pomocí mobilní aplikace pro zaměstnance",
    href: "/solutions/attendance",
    icon: UserGroupIcon,
  },
];
const callsToAction = [
  { name: "Kontaktujte nás", href: "/contact", icon: PhoneIcon },
];
const resources = [
  {
    name: "Centrum podpory",
    description:
      "Nájdite odpovede na svoje otázky alebo kontaktuje našich pracovníkov podpory",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Bezpečnosť",
    description: "Náš záväzok zachovať bezpečnosť Vašich dát",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Otvorené pozície",
    description: "Hľadáme nových kolegov!",
    href: "/careers",
    icon: LightningBoltIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const MENU_SHOWN = true;

  return (
    <Popover className="z-50 sticky top-0 border-b border-gray-50 glass">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
              <div className="flex justify-start">
                <Link href="/">
                  <a>
                    <span className="sr-only">NER System</span>
                    <img
                      src="/nersystem.svg"
                      alt="nersystem logo"
                      className="h-8 w-auto sm:h-10"
                    />
                  </a>
                </Link>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              {MENU_SHOWN && (
                <Popover.Group as="nav" className="hidden md:flex space-x-10">
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-gray-500",
                            "group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          )}
                        >
                          <span>Řešení</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-gray-600" : "text-gray-400",
                              "ml-2 h-5 w-5 group-hover:text-gray-500"
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {solutions.map((item) => (
                                  <Link href={item.href} key={item.name}>
                                    <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                      <item.icon
                                        className="flex-shrink-0 h-6 w-6 text-blue-600"
                                        aria-hidden="true"
                                      />
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">
                                          {item.name}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                ))}
                              </div>
                              <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                {callsToAction.map((item) => (
                                  <div key={item.name} className="flow-root">
                                    <Link href={item.href}>
                                      <a className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                                        <item.icon
                                          className="flex-shrink-0 h-6 w-6 text-gray-400"
                                          aria-hidden="true"
                                        />
                                        <span className="ml-3">
                                          {item.name}
                                        </span>
                                      </a>
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  <Link href="/about">
                    <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                      O nás
                    </a>
                  </Link>
                </Popover.Group>
              )}
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <Link href="/contact">
                  <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
                    Kontaktujte nás
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <Link href="/">
                        <a>
                          <span className="sr-only">NER System</span>
                          <img
                            src="/nersystem.svg"
                            alt="nersystem logo"
                            className="h-8 w-auto sm:h-10"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  {MENU_SHOWN && (
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {solutions.map((item) => (
                          <Link key={item.name} href={item.href}>
                            <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-blue-600"
                                aria-hidden="true"
                              />
                              <span className="ml-3 text-base font-medium text-gray-900">
                                {item.name}
                              </span>
                            </a>
                          </Link>
                        ))}
                      </nav>
                    </div>
                  )}
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <Link href="/about">
                      <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                        O nás
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div>
                    <Link href="/contact">
                      <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
                        Kontaktujte nás
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Navbar;
