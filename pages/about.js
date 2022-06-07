import Head from "next/head";
import Layout from "../components/Layout";

const stats = [
  { label: "Založeno", value: "2017" },
  { label: "Zpracovaných zakázek", value: "24 000" },
  { label: "Komunikačních tiketů", value: "32 000" },
  { label: "Obrat zpracovaný systémem", value: "875 mil. Kč" },
];

const About = () => {
  return (
    <Layout>
      <Head>
        <title>NER System – O nás</title>
        <meta property="og:title" content="NER System – O nás" />
        <meta
          property="og:description"
          content="Přediktivní a automatizované řízení skladových pohybů a zásobování výroby."
        />
      </Head>

      <div className="relative bg-white py-16 sm:py-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              <img src="/popp.jpg" alt="" />
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                Náš příběh
              </h2>
              <div className="mt-6 text-gray-500 space-y-6">
                <p className="text-lg">
                  Před čtyřmi lety naše sesterská firma procházela přerodem z
                  malé na středně velkou společnost, který přirozeně doprovází
                  změna procesů a vnitřní organizace. Jedním z logických kroků
                  byl výběr správného ERP systému.
                </p>
                <p className="text-base leading-7">
                  Vytvoření vlastního systému nebylo naší první myšlenkou ani
                  záměrem. Naším plánem bylo najít a využít již existující
                  produkt. Po několikaměsíčním testování pravděpodobně všech
                  dostupných softwarů na trhu se naše představa o systému, který
                  začíná u odběratele konfigurováním produktu a končí logistikou
                  (popřípadě servisními úkony), velmi rychle rozplynula.
                </p>
                <p className="text-base leading-7">
                  Z naší jasné představy o dalším fungování firmy vycházelo
                  jediné možné řešení - vlastní systém. NER vznikal 4 roky a
                  postupně dostával finální podobu, která jak věříme, bude
                  usnadňovat řízení kompletního provozu každé výrobní
                  společnosti.
                </p>

                <p className="text-base leading-7">
                  Za tu dobu se NER podařilo dosáhnout mnoha úspěchů:
                </p>
              </div>
            </div>

            {/* Stats section */}
            <div className="mt-10">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border-t-2 border-gray-100 pt-6"
                  >
                    <dt className="text-base font-medium text-gray-500">
                      {stat.label}
                    </dt>
                    <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
