import React from "react";
import ContactHero from "../components/Contact/ContactHero";
import ContactCards from "../components/Contact/ContactCards";
import ContactForm from "../components/Contact/ContactForm";
import OfficeLocation from "../components/Contact/OfficeLocation";
import ContactCTA from "../components/Contact/ContactCTA";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-[#07090e] text-white">
      <ContactHero />
      <ContactCards />
      <section className="max-w-7xl mx-auto px-4 my-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-stretch">
          <ContactForm />
          <div className="hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-white/15 to-transparent h-full my-auto" />
          <OfficeLocation />
        </div>
      </section>
      <ContactCTA />
    </div>
  );
};

export default Contact;
