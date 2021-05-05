import {
  ClipboardListIcon,
  TruckIcon,
  CogIcon,
  ChatAlt2Icon,
  ServerIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";

import Hero from "../components/index/Hero";
import ContactForm from "../components/index/ContactForm";
import Layout from "../components/Layout";

import Link from "next/link";
import { useState } from "react";

const features = [
  {
    name: "Sklad a management zásob",
    icon: ClipboardListIcon,
    text:
      "Prediktívne a automatizované riadenie skladových pohybov a zásobovania výroby",
  },
  {
    name: "Riadenie výroby",
    icon: CogIcon,
    text:
      "Správa výrobných liniek a procesov výroby s priamym prepojením na proces skladovania a ostatné časti distribučného procesu",
  },
  {
    name: "Logistika",
    icon: TruckIcon,
    text:
      "Aktívne riadenie logistiky s priamou komunikáciou s odberateľom a následnou koordináciou montážnych pracovníkov",
  },
  {
    name: "Správa zákaziek a partnerský portál",
    icon: ChatAlt2Icon,
    text:
      "Online vytváranie objednávok, ich správa a následná komunikácia pri reklamácii, servisoch a výrobných zmenách",
  },
  {
    name: "Konfigurátor produktov",
    icon: ServerIcon,
    text:
      "Umožňuje úplné prispôsobenie atribútov produktov — od objednávky cez sklad a výrobu až po distribúciu",
  },
  {
    name: "Dochádzkový systém",
    icon: UserGroupIcon,
    text: "Evidencia dochádzky pomocou mobilnej aplikácie pre zamestnancov",
  },
];

export default function Home() {
  const [contactFormState, setContactFormState] = useState("idle");

  const processContactForm = async (event) => {
    event.preventDefault();

    const contactForm = event.target;
    let formData = new FormData(contactForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        console.log("Form successfully submitted");
        event.target.reset();
      })
      .catch((error) => console.error(error));
  };

  return (
    <Layout>
      <Hero></Hero>

      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-blue-600 uppercase">
            Kľúčové vlastnosti
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Všetko čo výrobná firma potrebuje
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            NER System poskytuje kompletnú škálu služieb, na ktoré ste doteraz
            používali vzájomne nekompatibilný softvér a MS Excel
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
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        {feature.name}
                      </h3>
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

      <ContactForm></ContactForm>
    </Layout>
  );
}
