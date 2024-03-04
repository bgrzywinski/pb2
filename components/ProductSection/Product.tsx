"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { productImages } from "@/components/ProductSection/product_images";
import { useInView } from "react-intersection-observer";

const Product = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    const newIndex =
      (currentImageIndex - 1 + productImages.length) % productImages.length;
    setCurrentImageIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (currentImageIndex + 1) % productImages.length;
    setCurrentImageIndex(newIndex);
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const productTitle = document.querySelector("#product_title");

      if (productTitle) {
        productTitle.classList.add("fade-in");
      }
    }
  }, [inView]);
  return (
    <section className="flex flex-col items-center">
      <div id="product_title" ref={ref} className="">
        <h3 className="text-white text-[30px]">
          RZUĆ OKIEM NA NASZE REALIZACJE
        </h3>
      </div>
      <div className="carousel mt-40 relative">
        <div className="item">
          <Image
            src="/assets/pb_images/pb3.jpg"
            alt="img"
            fill
            className="object-cover"
          />
        </div>
        <div className="item">
          <Image
            src="/assets/pb_images/pb13.jpg"
            alt="img"
            fill
            className="object-cover"
          />
        </div>
        <div className="item">
          <Image
            src="/assets/pb_images/pb4.jpg"
            alt="img"
            fill
            className="object-cover"
          />
        </div>
        <div className="item">
          <Image
            src="/assets/pb_images/pb5.jpg"
            alt="img"
            fill
            className="object-cover"
          />
        </div>
        <div className="item">
          <Image
            src="/assets/pb_images/cicha1.jpg"
            alt="img"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/*<div
        id="product"
        className="w-full h-full flex justify-center items-center relative mt-32"
      >
        <div className="flex items-center gap-1 2xl:w-[650px] 2xl:h-[650px] w-[450px] h-[400px] rounded-3xl px-2">
          <button
            className="transition transform active:scale-150"
            onClick={handlePrevClick}
          >
            <div className="2xl:w-[50px] 2xl:h-[50px] w-[30px] h-[30px]">
              <Image
                src="/assets/icons/left-arrow.png"
                alt="left"
                fill
                sizes="w-auto h-auto"
              />
            </div>
          </button>
          <div className="w-full h-full relative">
            <ProductItem currentImageIndex={currentImageIndex} />
          </div>
          <button
            className="transition transform active:scale-150"
            onClick={handleNextClick}
          >
            <div className="2xl:w-[50px] 2xl:h-[50px] w-[30px] h-[30px]">
              <Image
                src="/assets/icons/right-arrow.png"
                alt="right"
                fill
                sizes="w-auto h-auto"
              />
            </div>
          </button>
        </div>
      </div>*/}
    </section>
  );
};

export default Product;
