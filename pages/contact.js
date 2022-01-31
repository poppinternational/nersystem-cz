import Head from "next/head";
import Layout from "../components/Layout";
import ContactForm from "../components/index/ContactForm";

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>NER System | Kontakt</title>
        <meta property="og:title" content="NER System – Kontakt" />
        <meta
          property="og:description"
          content="Pobavme se jak společně posuneme produktivitu vaší výroby na novou úroveň."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Kontakt
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Pobavme se jak společně posuneme produktivitu vaší výroby na novou
              úroveň
            </p>
          </div>
        </div>
      </div>

      <ContactForm></ContactForm>
    </Layout>
  );
};

export default Contact;
