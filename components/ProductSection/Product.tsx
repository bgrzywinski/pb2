"use client";

import Image from "next/image";
import ProductItem from "@/components/ProductSection/ProductItem";
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % productImages.length,
      );
    }, 4000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex, productImages.length]);

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
      <Image
        src="/assets/icons/whitelogo2.png"
        alt="whitelogo2"
        width={200}
        height={200}
        className="animate-smoothBounce -mt-14 w-auto h-auto"
      />
      <div
        id="product_title"
        ref={ref}
        className="border-b border-gray-300 opacity-0 relative mx-10"
      >
        <Image
          src="/assets/toast.png"
          alt="toast"
          fill
          className="object-contain opacity-20"
        />
        <h3 className="2xl:text-4xl xl:text-3xl sm:text-2xl text-xl font-semibold 2xl:py-36 py-16 xl:mt-24 mt-16 text-center">
          RZUĆ OKIEM NA NASZE REALIZACJE
        </h3>
      </div>
      <div
        id="product"
        className="w-full h-full flex justify-center items-center relative 2xl:py-64 py-36 mt-24"
      >
        <Image
          src="/assets/pb_images/cicha4.jpg"
          alt="productbg"
          fill
          className="w-full h-full object-cover blur-sm"
        />
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
      </div>
    </section>
  );
};

export default Product;
