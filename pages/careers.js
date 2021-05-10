import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import ContactForm from "../components/careers/ContactForm";

const Careers = () => {
  return (
    <Layout>
      <Head>
        <title>NER System — Otevřené pracovní pozice</title>
        <meta property="og:title" content="NER System" />
        <meta property="og:description" content="Hledáme nové kolegy" />
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
            Account manager
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Pracuj pro inovativní startup v oblasti výroby a pomoz tak urychlit
            revoluci v průmyslu
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
          <div className="text-lg max-w-prose mx-auto">
            <p className="mt-8 text-xl text-gray-500 leading-8">
              Náš software pro řízení výroby a komunikaci jsme původně vyvinuli
              pro interní účely naší sesterské výrobní firmy. Rychle jsme si ale
              uvědomili jeho potenciál a chceme zabojovat o svoje místo na
              globálním trhu. Z toho důvodu rozšiřujeme náš pracovní team a
              hledáme kolegu do nově vzniklého obchodního oddělení.
            </p>
          </div>
          <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
            <h2>Co tě u nás čeká?</h2>
            <ul>
              <li>
                Hledání nových obchodních příležitostí, oslovování klientů a
                domlouvání schůzek
              </li>
              <li>
                Zjišťování jejich potřeb, návrhy toho, jak náš software pomůže
                jejich businessu a zajišťování zpětné vazby pro naše produktové
                a vývojové týmy
              </li>
              <li>Aktivní účast při implementaci systemu u klientů</li>
            </ul>
            <h2>Jak si tě představujeme?</h2>
            <ul>
              <li>
                Máš 1-2 roky praxe s komunikací s klienty (Sales, Business
                Development, Project Manager aj.)
              </li>
              <li>
                Máš rád/a lidi - na zákaznících nám záleží a budujeme s nimi
                dlouhodobé vztahy
              </li>
              <li>Obchod tě prostě baví</li>
              <li>
                Máš dobré komunikační, vyjednávací a argumentační dovednosti
              </li>
              <li>Rád/a přicházíš s novými nápady</li>
            </ul>
            <h2>Co nabízíme my?</h2>
            <ul>
              <li>
                Příležitost prodávat produkt, který posová produktivitu
                výrobních společností na novou úroveň
              </li>
              <li>Spoustu nástrojů a postupů, které ti obchod usnadní</li>
              <li>
                Otevřenou a přátelskou firemní kulturu založenou na vzájemné
                důvěře
              </li>
              <li>Teambuildingy a firemní akce</li>
              <li>
                Motivační finanční ohodnocení (34 000 Kč - 110 000 Kč / měsíc +
                bonusy)
              </li>
              <li>
                Služební auto, homeoffice, kariérní růst, notebook, pet-friendly
                office, pružná pracovní doba, telefon
              </li>
            </ul>

            <hr />

            <p>
              Chceš se k nám přidat? Dej nám o sobě vědět, pošli nám CV nebo
              LinkedIn a my se ozveme zpět.
            </p>
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Careers;
