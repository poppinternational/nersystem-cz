import Head from "next/head";
import Layout from "../../components/Layout";

import {
  BookOpenIcon,
  DeviceMobileIcon,
  ClipboardListIcon,
  UsersIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Přehled docházky",
    description:
      "Okamžitě dostupný seznam všech pracovníků spolu s jejich historií a pracovními záznamy.",
    icon: ClipboardListIcon,
  },
  {
    name: "Personální management",
    description:
      "Docházkový systém je propojen s plánováním výroby, díky tomu dokáže vyhodnocovat obsazenost jednotlivých pracovních stanovišť a zlepšit tak řízení výroby.",
    icon: UsersIcon,
  },
];

const Attendance = () => {
  return (
    <Layout>
      <Head>
        <title>NER System – Docházkový systém</title>
        <meta property="og:title" content="NER System – Docházkový systém" />
        <meta
          property="og:description"
          content="Přediktivní a automatizované řízení skladových pohybů a zásobování výroby."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
              NER Attendance
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Docházkový systém
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Evidence docházky prostřednictvím mobilní aplikace a portál pro
              check-in a check-out zaměstnanců na pracovištích
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-white pt-16 pb-32 overflow-hidden">
        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div>
                  <span className="h-12 w-12 rounded-md flex items-center justify-center bg-blue-600">
                    <BookOpenIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Administrační rozhraní
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Získejte komplexní přehled o evidenci docházky. Zobrazení
                    žádostí o dovolenou ve speciálním kalendáři nebo tabulkovém
                    přehledu Vám usnadní jejich posuzování.
                  </p>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6 hidden">
                <blockquote>
                  <div>
                    <p className="text-base text-gray-500">
                      &ldquo;Cras velit quis eros eget rhoncus lacus ultrices
                      sed diam. Sit orci risus aenean curabitur donec aliquet.
                      Mi venenatis in euismod ut.&rdquo;
                    </p>
                  </div>
                  <footer className="mt-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <img
                          className="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                          alt=""
                        />
                      </div>
                      <div className="text-base font-medium text-gray-700">
                        Marcia Hill, Digital Marketing Manager
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/attendance-admin.png"
                  alt="Inbox user interface"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
              <div>
                <div>
                  <span className="h-12 w-12 rounded-md flex items-center justify-center bg-blue-600">
                    <DeviceMobileIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Mobilní aplikace pro zaměstnance
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Žádný hardware - jedna aplikace pro všechny. Umožnuje
                    vytvářet a spravovat všechny typy nepřítomnosti. Informace o
                    docházce jsou přímo propojeny s aktuální a budoucí výrobou.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full max-w-xl mx-auto lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:h-full lg:w-auto lg:max-w-none"
                  src="/app.png"
                  alt="App"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="container mt-16 mx-auto px-4 sm:px-6 lg:px-8">
        <img
          src="/attendance_overview.png"
          alt=""
          className="relative rounded-lg shadow-lg"
        />
      </div>
    </Layout>
  );
};

export default Attendance;
