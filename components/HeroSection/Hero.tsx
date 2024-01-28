"use client";

import Image from "next/image";
import heroDescription from "@/public/text/descriptions";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Navigation from "@/layout/Navigation/Navigation";

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
        ></video>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div
          id="hero_description"
          ref={ref}
          className="py-28 xl:mt-10 relative xl:mx-[171px] mx-20 border-b border-gray-400 opacity-0"
        >
          <div className="max-w-[100px] flex xl:flex-row-reverse flex-col-reverse pr-[40px]">
            <h2 className="2xl:text-15 text-15 font-extrabold py-8">CZEŚĆ!</h2>
            <Image
              src="/assets/icons/blacklogo.png"
              alt="headlogo"
              className="object-contain mr-3 mb-3"
              width={70}
              height={70}
            />
          </div>
          <div className="2xl:text-15 text-12 uppercase leading-10 text-justify">
            {heroDescription}
          </div>
        </div>
        <h3 className="2xl:text-5xl xl:text-3xl sm:text-2xl text-xl font-semibold 2xl:py-36 py-16 xl:mt-24 mt-16 text-center">
          POZNAJ NASZĄ OFERTĘ
        </h3>
      </div>
    </section>
  );
};

export default Hero;
