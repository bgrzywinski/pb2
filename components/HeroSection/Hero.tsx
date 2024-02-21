"use client";

import Image from "next/image";
import heroDescription from "@/public/text/descriptions";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const descriptionElement = document.querySelector("#hero_description");

      if (descriptionElement) {
        descriptionElement.classList.add("fade-in");
      }
    }
  }, [inView]);
  return (
    <section className="flex flex-col justify-center items-center" id="hero">
      <div className="w-full flex md:flex-row flex-col mt-28 md:p-16 p-6 rounded-xl">
        <div className="md:w-[50vw] bg-gray-300 flex justify-center items-center shadow-gray-600 shadow-2xl rounded-xl relative">
          <div className="w-[25vw] py-12">
            <Image
              src="/assets/icons/blacklogo.png"
              alt="logo"
              width={1}
              height={1}
              layout="responsive"
              className="shadow-2xl shadow-black rounded-[250px] object-contain"
            />
          </div>
        </div>
        <div className="md:w-[50vw] rounded-xl">
          <Image
            src="/assets/herobg3_anim.gif"
            alt="bg"
            width={500}
            height={500}
            className="min-h-[700px] w-full object-cover shadow-black shadow-2xl rounded-xl"
          ></Image>
        </div>
      </div>
      <div className="flex flex-col justify-evenly items-center">
        <div
          id="hero_description"
          ref={ref}
          className="max-w-[1200px] py-28 xl:mt-16 relative xl:mx-[171px] mx-8 opacity-0"
        >
          <div className="max-w-[100px] flex xl:flex-row-reverse flex-col-reverse 2xl:pr-[33px] xl:pr-12">
            <h2 className="2xl:text-xl text-15 font-bold py-8">CZEŚĆ!</h2>
            <Image
              src="/assets/icons/blacklogo.png"
              alt="headlogo"
              className="object-contain mr-5 mb-3"
              width={70}
              height={70}
            />
          </div>
          <div className="2xl:text-15 xl:text-12 text-11 uppercase 2xl:leading-10 leading-8 text-justify z-40">
            {heroDescription}
            <Image
              src="/assets/icons/cityborder.png"
              alt="border"
              fill
              className="object-contain absolute mt-96"
            />
          </div>
        </div>
        <div className="border-b border-gray-300 my-32 sm:pt-32 pt-6">
          <h3 className="2xl:text-4xl xl:text-3xl sm:text-2xl text-xl py-16 font-semibold text-center">
            POZNAJ NASZĄ OFERTĘ
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
