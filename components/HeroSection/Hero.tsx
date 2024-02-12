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
      <div className="w-full h-full xl:-mt-16 mt-16">
        <video
          src="/assets/herobg2_anim.mp4"
          autoPlay
          loop
          muted
          className="w-full min-h-[700px] object-cover"
          controls={false}
        ></video>
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
