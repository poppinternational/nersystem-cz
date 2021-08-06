import Head from "next/head";
import Layout from "../../components/Layout";

import {
  SparklesIcon,
  ClipboardCheckIcon,
  CogIcon,
} from "@heroicons/react/outline";

const transferFeatures = [
  {
    id: 1,
    name: "Prehľad",
    description:
      "Na prvý pohľad zobrazené všetky položky, ktoré si vyžadujú pozornosť uľahčujú prácu nákupcu a následne urýchľujú reakčnú dobu.",
    icon: ClipboardCheckIcon,
  },
  {
    id: 2,
    name: "Predikcia",
    description:
      "Pri aktívnej výrobe systém automaticky vytvára kusovníky a predikuje budúcu spotrebu na základe plánovanej výroby. Tento proces znižuje hodnotu skladu a zabezpečuje plynulý obrátkovosť.",
    icon: SparklesIcon,
  },
  {
    id: 3,
    name: "Automatizácia",
    description:
      "Vzhľadom na možnosť prediktívneho vytvárania kusovníkov podla plánu výroby, dokaže systém automaticky generovať objednávky a aktivne s nimi pracovať.",
    icon: CogIcon,
  },
];

const Warehouse = () => {
  return (
    <Layout>
      <Head>
        <title>NER System — Sklad a management zásob</title>
        <meta
          property="og:title"
          content="NER System – Sklad a management zásob"
        />
        <meta
          property="og:description"
          content="Přediktivní a automatizované řízení skladových pohybů a zásobování výroby."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
              Warehouse
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Sklad a management zásob
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Zjednodušenie a zefektívnenie celého procesu objednávania a
              udržiavania skladu pri minimálnych nákladoch
            </p>
          </div>
        </div>
      </div>

      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative mt-6 lg:mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Moderná správa skladu
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
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
                width={784}
                height={404}
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            <img
              className="relative mx-auto"
              width={490}
              src="/warehouse.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Warehouse;
