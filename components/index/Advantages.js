import { CheckIcon } from "@heroicons/react/outline";

const features = [
  {
    name: "Výrobní systém vytvořený výrobní společností",
    description:
      "Všechny procesy jsou vytvořené na základě reálných zkušeností z výroby a nejsou zatížené mechanismem účetnického softwaru",
  },
  {
    name: "Žádná instalace",
    description:
      "Webová aplikace (SaaS) s bezproblémových chodem systému a neustálou nejnovější verzí bez nutnosti aktualizace",
  },
  {
    name: "Automatizace",
    description: "Důraz na automatizaci a minimální potřebu manuálních zásahů",
  },
  {
    name: "Komunikace",
    description:
      "Efektivní interní i externí komunikace vztažená ke konkrétní zakázce",
  },
  {
    name: "Notifikace",
    description: "Různé druhy notifikací, díky kterým jste neustále v obraze",
  },
  {
    name: "Bezpapírová firma",
    description:
      "Všechny potřebné podklady k výrobě předávány na tabletech, sdílení a zasílání podkladů s partnery pomocí NER",
  },
];

export default function Advantages() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">
            Výhody NER Systemu
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">
            Moderní řešení bez kompromisů
          </p>
          <p className="mt-4 text-lg text-gray-500">
            Vaše cesta k efektivní a přehlendné výrobě.
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
