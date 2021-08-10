import Head from "next/head";
import Layout from "../../components/Layout";

import {
  BriefcaseIcon,
  ChatIcon,
  ClipboardListIcon,
} from "@heroicons/react/outline";

const transferFeatures = [
  {
    id: 1,
    name: "Partner portál",
    description:
      "Umožňuje vstoupit odběrateli do části systému, kde má možnost konfigurovat produkty, vytvářet skladové objednávky a mě přehled o všech jeho zakázkách.",
    icon: BriefcaseIcon,
  },
  {
    id: 2,
    name: "Komunikační tikety",
    description:
      "Součást partnerského portálu je možnost přímé komunikace prostřednictvím tiketů, které usnadňují práci s objednávkami a řešení problémů.",
    icon: ChatIcon,
  },
  {
    id: 3,
    name: "Přehled objednávek",
    description:
      "Partnerský portál umožňuje snadnou práci a objednávkami a jejich součástmi, jako jsou cenové nabídky, servis a reklamace.",
    icon: ClipboardListIcon,
  },
];

const PartnerPortal = () => {
  return (
    <Layout>
      <Head>
        <title>NER System — Správa zakázek a partnerský portál</title>
        <meta
          property="og:title"
          content="NER System – Správa zakázek a partnerský portál"
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
              NER NOW
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Správa zakázek a partnerský portál
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Zjednodušení a zefektivnění komunikace s partnery
            </p>
          </div>
        </div>
      </div>

      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative mt-6 lg:mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Jednoduchá komunikace s partnermi
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Partnerský portál dovoluje vstoupit odběratelům do systému, kde
              mají možnost sami vytvářet objednávky, konfigurovat produkty a
              následně je spravovat formou komunikačních tiketů, které jsou
              automaticky přidělovány odpovědným pracovníkem.
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
            <img
              className="relative w-full"
              width={490}
              src="/partner-portal.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PartnerPortal;
