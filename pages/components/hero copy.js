import { ChevronRightIcon } from "@heroicons/react/solid";

const Hero = () => {
  return (
    <div className="pt-10 bg-white sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 overflow-hidden lg:relative">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
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
                <span className="block text-blue-600">výrobných procesoch</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Od objednávky cez proces výroby a distribúcie až po predaj,
                reklamácie a servis. Všetky procesy pod jednou strechou,
                efektívne a prehľadne.
              </p>
              <div className="mt-10 sm:mt-12">
                <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
