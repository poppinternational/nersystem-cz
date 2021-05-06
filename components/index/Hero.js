import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/solid";

const Hero = () => {
  return (
    <div className="bg-white pb-8 sm:pb-12 lg:pb-12">
      <div className="pt-8 overflow-hidden sm:pt-12 lg:relative">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div className="lg:py-36 lg:mb-12">
            <Link href="/careers">
              <a className="inline-flex items-center text-gray-800 bg-gray-50 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-blue-700">
                <span className="hidden sm:inline px-3 py-0.5 text-blue-900 text-xs font-semibold leading-5 uppercase tracking-wide bg-blue-100 rounded-full">
                  Hledáme nové kolegy
                </span>
                <span className="ml-4 text-sm">Otevřené pozice</span>
                <ChevronRightIcon
                  className="ml-2 w-5 h-5 text-gray-500"
                  aria-hidden="true"
                />
              </a>
            </Link>
            <h1 className="mt-4 text-3xl tracking-tight font-extrabold text-gray-800 sm:mt-5 sm:text-5xl lg:mt-6 xl:text-5xl">
              <span className="block">Konečně pořádek ve</span>
              <span className="block text-transparent bg-clip-text brand-gradient">
                výrobních procesech
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Od objednávky cez proces výroby a distribuce až po prodej,
              reklamace a servis. Všechny procesy pod jednou strechou, efektivně
              a přehledně.
            </p>
            <div className="mt-6 sm:mt-8">
              <Link href="#kontakt">
                <a className="inline-block py-3 px-4 rounded-md shadow bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900">
                  Kontaktujte nás
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="hidden sm:block">
              <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
              <svg
                className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                />
              </svg>
            </div>
            <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
              <img
                className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                src="/screenshot.png"
                alt="Screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
