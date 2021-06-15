import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import ContactForm from "../components/careers/ContactForm";

const Careers = () => {
  return (
    <Layout>
      <Head>
        <title>NER System — Otevřené pracovní pozice</title>
        <meta property="og:title" content="Junior automation tester - Cypress" />
        <meta property="og:description" content="NER System hľadá nového kolegu na pozíciu Junior automation tester vo frameworku Cypress." />
        <meta
          property="og:image"
          content="https://www.nersystem.com/og_image_careers.png"
        />
      </Head>
      <div className="max-w-7xl mx-auto pt-16 px-4 sm:pt-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
            Otevřené pracovní pozice: 1
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Junior automation tester - Cypress
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Pracuj pre inovatívny startup v oblasti výroby a pomôž tak urýchliť
            revolúciu v priemysle
          </p>
        </div>
      </div>

      <div className="relative pt-8 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          >
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
                height={384}
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
                height={384}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
                height={384}
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div class="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
            <p>
              Part-time / Full-time
            </p>
            <p>
              8-10€ / hodina v závislosti od skúseností
            </p>
            <p>
              Bratislava / home office
            </p>

            <p>
              Do nášho rozrastajúceho sa tímu v NER System hľadáme testera,
              ktorého láka automatizované testovanie. Vyvíjame systém na manažment výroby pre stredne veľké firmy.
              Ide o webovú aplikáciu v jazyku Ruby on Rails, pre ktorú vytvárame sadu automatizovaných testov písaných v JavaScripte za pomoci frameworku <a href="https://www.cypress.io" target="_blank">Cypress</a>.
            </p>
            <p>
              Tvojou úlohou bude dopĺňanie nových testov podľa zadefinovanej stratégie a udržiavanie už existujúcich. Pracovať budeš pod vedením nášho skúseného senior testera, ktorý ti rád vysvetlí všetko potrebné a zabezpečí aktívny mentoring.
            </p>
            <p>
              Sedíme vo vlastnej kancelárii v rámci coworkingu SpaceUp na Záhradníckej. Po zaučení nemáme problém s home office. Objem práce je aspoň 40 hodín mesačne, pracovný čas je flexibilný.
            </p>
          </div>
          <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
            <h2>Náplň práce</h2>
            <ul>
              <li>vytváranie automatizovaných testov</li>
              <li>udržiavanie existujúcich testov</li>
              <li>exekúcia existujucich testov a analýza výsledkov</li>
              <li>reportovanie bugov</li>
              <li>manualne testovanie</li>
            </ul>
            <h2>Požiadavky</h2>
            <ul>
              <li>skúsenosti s testovaním softvéru</li>
              <li>zmysel pre detail</li>
              <li>analytické myslenie</li>
            </ul>
            <h2>Bonusové body za skúsenosti s</h2>
            <ul>
              <li>automatizované testovanie - Cypress / Selenium</li>
              <li>git</li>
              <li>základná znalosť JavaScriptu</li>
              <li>framework Ruby on Rails</li>
            </ul>

            <h2>Pár slov o nás</h2>
            <div className="text-lg max-w-prose mx-auto">
              <p className="mt-8 text-xl text-gray-500 leading-8">
                Náš softvér pre riadenie výroby a komunikáciu pomáha výrobným spoločnostiam rásť. Pôvodne sme ho vyvinuli pre interné účely našej sesterskej výrobnej firmy.
                Rýchlo sme si ale uvedomili jeho potenciál a chceme zabojovať o svoje miesto na globálnom trhu.
              </p>
              <p className="mt-8 text-xl text-gray-500 leading-8">
                Nájdeš u nás otvorenú a priateľskú firemnú kultúru a príležitosť posúvať sa vo svojej kariére.
              </p>
            </div>

            <hr />

            <p>
              Zaujala ťa naša pozícia? Ozvi sa nám a prilož aj svoje CV alebo
              LinkedIn.
            </p>
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Careers;
