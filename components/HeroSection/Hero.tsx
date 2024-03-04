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
    <section className="w-[100vw] h-screen flex">
      <div className="w-full text-white flex items-center justify-evenly">
        <div>
          <h1 className="text-[25px]">PAŃSTWO BARMAŃSTWO</h1>
          <p className="text-[13px] text-right">since 2017</p>
        </div>
        <div className="">
          <Image
            src="/assets/icons/blacklogo.png"
            alt="logo"
            width={500}
            height={1}
            className="shadow-2xl shadow-black rounded-[100%]"
          />
        </div>
      </div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </section>
  );
};

export default Hero;
