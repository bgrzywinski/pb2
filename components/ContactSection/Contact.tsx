"use client";

import Image from "next/image";
import ContactForm from "@/components/ContactSection/Form/ContactForm";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const contactTitle = document.querySelector("#contact_title");

      if (contactTitle) {
        contactTitle.classList.add("fade-in");
      }
    }
  }, [inView]);

  return (
    <section className="flex flex-col items-center">
      <div
        id="contact_title"
        ref={ref}
        className="opacity-0 border-b border-gray-400 mx-10 mt-32"
      >
        <h3 className="2xl:text-4xl xl:text-3xl sm:text-2xl text-xl font-semibold 2xl:py-36 py-16 xl:mt-24 mt-16 text-center">
          {" "}
          I SKONTAKTUJ SIĘ Z NAMI!
        </h3>
      </div>
      <div
        id="contact"
        className="w-full flex md:flex-row flex-col md:gap-0 gap-12 justify-evenly items-center py-32"
      >
        <div className="relative">
          <Image
            src="/assets/pb_images/form_card.png"
            alt="blacklogo"
            width={350}
            height={1}
            className="rounded-xl"
          />
        </div>
        {formSubmitted ? (
          <div className="flex flex-col items-center gap-4">
            <p className="text-2xl text-white font-bold bg-transparent">
              Kłaniamy się nisko!
            </p>
            <Image
              src="/assets/icons/salute.png"
              alt="salute"
              width={100}
              height={100}
            />
          </div>
        ) : (
          <div className="relative">
            <Image
              src="/assets/pb_images/cicha3.jpg"
              alt="form"
              fill
              sizes="w-auto h-auto"
              className="object-cover rounded-2xl blur-[4px]"
            />
            <div className="relative">
              <ContactForm onFormSubmit={handleFormSubmit} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
