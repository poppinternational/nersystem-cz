import {
  ClipboardListIcon,
  TruckIcon,
  CogIcon,
  ChatAlt2Icon,
  ServerIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

import Hero from "../components/index/Hero";
import Advantages from "../components/index/Advantages";
import Layout from "../components/Layout";
import Link from "next/link";

const features = [
  {
    name: "Sklad a management zásob",
    icon: ClipboardListIcon,
    link: "/solutions/warehouse",
    text: "Prediktivní a automatizované řízení skladových pohybů a zásobování výroby",
    text_sk:
      "Prediktívne a automatizované riadenie skladových pohybov a zásobovania výroby",
  },
  {
    name: "Řízení výroby",
    icon: CogIcon,
    link: "/solutions/production",
    text: "Správa výrobních linek a procesů výroby s přímým propojením na proces skladování a ostatní části distribučního procesu",
    text_sk:
      "Správa výrobných liniek a procesov výroby s priamym prepojením na proces skladovania a ostatné časti distribučného procesu",
  },
  {
    name: "Logistika",
    icon: TruckIcon,
    link: "/solutions/logistics",
    text: "Aktivní řízení logistiky s přímou komunikací s odběratelem a následnou koordinací montážních pracovníků",
    text_sk:
      "Aktívne riadenie logistiky s priamou komunikáciou s odberateľom a následnou koordináciou montážnych pracovníkov",
  },
  {
    name: "Správa zkázek a partnerský portál",
    icon: ChatAlt2Icon,
    link: "/solutions/partner-portal",
    text: "Online vytváření objednávek, jejich správa a následná komunikace při reklamaci, servisech a výrobních změnách",
    text_sk:
      "Online vytváranie objednávok, ich správa a následná komunikácia pri reklamácii, servisoch a výrobných zmenách",
  },
  {
    name: "Konfigurátor produktů",
    icon: ServerIcon,
    link: "/solutions/production",
    text: "Umožňuje úplné přizpůsobení atributů produktů — od objednávky přes sklad a výrobu až po distribuci",
    text_sk:
      "Umožňuje úplné prispôsobenie atribútov produktov — od objednávky cez sklad a výrobu až po distribúciu",
  },
  {
    name: "Docházkový systém",
    icon: UserGroupIcon,
    link: "/solutions/attendance",
    text: "Evidence docházky pomocí mobilní aplikace pro zaměstnance",
    text_sk: "Evidencia dochádzky pomocou mobilnej aplikácie pre zamestnancov",
  },
];

export default function Home() {
  const SHOW_TESTIMONIAL = false;

  return (
    <Layout>
      <Hero></Hero>

      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-blue-600 uppercase">
            Klíčové vlastnosti
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Všechno co výrobní firma potřebuje
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            NER System poskytuje komplexní škálu služeb, na které ste doteď
            používali vzájemně nekompatibilní softvér a MS Excel
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                          <feature.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <Link href={feature.link}>
                        <a className="text-gray-900 hover:bg-blue-600 transition">
                          <h3 className="mt-8 text-lg font-medium  tracking-tight">
                            {feature.name}
                          </h3>
                        </a>
                      </Link>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Advantages></Advantages>

      {SHOW_TESTIMONIAL && (
        <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <svg
              className="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2"
              width={404}
              height={404}
              fill="none"
              viewBox="0 0 404 404"
              role="img"
              aria-labelledby="svg-workcation"
            >
              <title id="svg-workcation">Workcation</title>
              <defs>
                <pattern
                  id="ad119f34-7694-4c31-947f-5c9d249b21f3"
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
                height={404}
                fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
              />
            </svg>

            <div className="relative">
              <img
                className="mx-auto h-8"
                src="https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg"
                alt="Workcation"
              />
              <blockquote className="mt-10">
                <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                  <p>
                    &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Nemo expedita voluptas culpa sapiente alias molestiae.
                    Numquam corrupti in laborum sed rerum et corporis.&rdquo;
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="md:flex md:items-center md:justify-center">
                    <div className="md:flex-shrink-0">
                      <img
                        className="mx-auto h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                      <div className="text-base font-medium text-gray-900">
                        Judith Black
                      </div>

                      <svg
                        className="hidden md:block mx-1 h-5 w-5 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11 0h3L9 20H6l5-20z" />
                      </svg>

                      <div className="text-base font-medium text-gray-500">
                        CEO, Workcation
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
