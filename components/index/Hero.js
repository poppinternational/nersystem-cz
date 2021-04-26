import { ChevronRightIcon } from "@heroicons/react/solid";

const Hero = () => {
  return (
    <div className="bg-white pb-8 sm:pb-12 lg:pb-12">
      <div className="pt-8 overflow-hidden sm:pt-12 lg:relative">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div className="lg:py-24">
            <a
              href="#"
              className="inline-flex items-center text-gray-800 bg-gray-50 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-blue-700"
            >
              <span className="px-3 py-0.5 text-blue-900 text-xs font-semibold leading-5 uppercase tracking-wide bg-blue-100 rounded-full">
                Hľadáme nových kolegov
              </span>
              <span className="ml-4 text-sm">Otvorené pozície</span>
              <ChevronRightIcon
                className="ml-2 w-5 h-5 text-gray-500"
                aria-hidden="true"
              />
            </a>
            <h1 className="mt-4 text-3xl tracking-tight font-extrabold text-gray-800 sm:mt-5 sm:text-5xl lg:mt-6 xl:text-5xl">
              <span className="block">Konečne poriadok vo</span>
              <span className="block text-transparent bg-clip-text brand-gradient">
                výrobných procesoch
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Od objednávky cez proces výroby a distribúcie až po predaj,
              reklamácie a servis. Všetky procesy pod jednou strechou, efektívne
              a prehľadne.
            </p>
            <div className="mt-10 sm:mt-12">
              <form action="#" className="sm:max-w-xl lg:mx-0">
                <div className="sm:flex">
                  <div className="min-w-0 flex-1">
                    <label htmlFor="email" className="sr-only">
                      Telefónne číslo
                    </label>
                    <input
                      id="tel"
                      type="tel"
                      placeholder="Vaše telefónne číslo"
                      className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:flex-1 border-gray-300"
                    />
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full py-3 px-4 rounded-md shadow bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900"
                    >
                      Zavolajte mi
                    </button>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-500 sm:mt-4">
                  Bude Vás kontaktovať náš špecialista ktorý s Vami preberie
                  XZY. Vaše číslo je u nás v bezpečí.
                </p>
              </form>
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
                src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
