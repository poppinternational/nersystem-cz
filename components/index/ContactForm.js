import { MailIcon, PhoneIcon } from "@heroicons/react/outline";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const FORM_STATE_OPTIONS = {
    IDLE: 0,
    LOADING: 1,
    DONE: 2,
    ERROR: 3,
  };
  const [formState, setFormState] = useState(FORM_STATE_OPTIONS.IDLE);

  const processContactForm = async (event) => {
    event.preventDefault();

    setFormState(FORM_STATE_OPTIONS.LOADING);

    const contactForm = event.target;
    let formData = new FormData(contactForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        console.log("Form successfully submitted");
        setFormState(FORM_STATE_OPTIONS.DONE);
        event.target.reset();
      })
      .catch((error) => {
        console.error(error);
        setFormState(FORM_STATE_OPTIONS.ERROR);
      });
  };

  return (
    <div className="relative bg-white" id="kontakt">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-white" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <dl className="mt-6 text-base text-gray-500">
              <p className="font-medium">NER System s.r.o.</p>
              <div className="grid grid-cols-2 gap-x-2 mt-2">
                <div>
                  <dt className="sr-only">Adresa CZ</dt>
                  <dd>
                    <p>Žižkovská 1390</p>
                    <p>691 02 Velké Bílovice</p>
                  </dd>
                </div>
                <div className="">
                  <dt className="sr-only">Adresa SK</dt>
                  <dd>
                    <p>Záhradnícka 95</p>
                    <p>821 08 Bratislava</p>
                  </dd>
                </div>
              </div>

              <div className="mt-6">
                <dt className="sr-only">Telefon</dt>
                <dd className="flex">
                  <PhoneIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3"><a href="tel:+420777969084" target="_blank">+420 777 969 084</a></span>
                </dd>
              </div>
              <div className="mt-2">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3"><a href="mailto:info@nersystem.cz" target="_blank">info@nersystem.cz</a></span>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form
              name="contact"
              className="grid grid-cols-1 gap-y-6"
              data-netlify="true"
              onSubmit={processContactForm}
            >
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label htmlFor="full_name" className="sr-only">
                  Meno
                </label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  autoComplete="name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  placeholder="Meno"
                  required={true}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  placeholder="Email"
                  required={true}
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Telefónne číslo
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  placeholder="Telefónne číslo"
                  required={true}
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Správa
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  placeholder="Správa"
                  required={true}
                  defaultValue={""}
                />
              </div>
              <div>
                {formState === FORM_STATE_OPTIONS.DONE && (
                  <div className="bg-green-50 border border-green-100 rounded-md py-3 px-4">
                    <span className="text-green-900">
                      Zpráva odeslaná! Děkujeme.
                    </span>
                  </div>
                )}
                {formState === FORM_STATE_OPTIONS.ERROR && (
                  <div className="bg-red-50 border border-red-100 rounded-md py-3 px-4">
                    <span className="text-red-900">
                      Při zpracování požadavky nastala chyba. Zvolte prosím
                      jinou formu kontaktu.
                    </span>
                  </div>
                )}
                {(formState === FORM_STATE_OPTIONS.IDLE ||
                  formState === FORM_STATE_OPTIONS.LOADING) && (
                  <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    disabled={formState === FORM_STATE_OPTIONS.LOADING}
                  >
                    {formState === FORM_STATE_OPTIONS.IDLE && "Odeslat"}
                    {formState === FORM_STATE_OPTIONS.LOADING && "Odesílám ..."}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
