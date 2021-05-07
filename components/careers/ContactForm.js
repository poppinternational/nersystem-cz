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

    fetch("/careers", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
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
      <div className="bg-white py-8 lg:py-16">
        <form
          action="/careers"
          name="careers-contact"
          className="grid grid-cols-1 gap-y-6"
          data-netlify="true"
          onSubmit={processContactForm}
        >
          <input type="hidden" name="form-name" value="careers-contact" />
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
              placeholder="Jméno"
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
              placeholder="Telefon"
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
              placeholder="Zpráva"
              required={true}
              defaultValue={""}
            />
          </div>
          <div className="">
            <label htmlFor="cv" className="sr-only">
              CV
            </label>
            <input type="file" name="cv" id="cv" />
          </div>
          <div className="flex items-center justify-center">
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
                  Při zpracování požadavky nastala chyba. Zvolte prosím jinou
                  formu kontaktu.
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
  );
}
