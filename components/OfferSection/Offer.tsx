"use client";

import Image from "next/image";
import OfferItem from "@/components/OfferSection/OfferItem";
import { useEffect, useState } from "react";
import React from "react";
import OfferPopup from "@/components/OfferSection/OfferPopup";
import Cocktails from "@/components/OfferSection/OfferContent/CocktailsData/Cocktails";
import OfferLimitScript from "@/components/OfferSection/OfferContent/OfferComponents/OfferLimit/OfferLimitScript";
import OfferOpenScript from "@/components/OfferSection/OfferContent/OfferComponents/OfferOpen/OfferOpenScript";
import { offerItemData } from "@/components/OfferSection/OfferContent/OfferComponents/offerItemData";
import { useInView } from "react-intersection-observer";

const Offer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null,
  );

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const offerElement = document.querySelector("#offer_element");

      if (offerElement) {
        offerElement.classList.add("offer-fade");
      }
    }
  }, [inView]);
  const handleOfferItemClick = (
    index: number,
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    e.preventDefault();
    setShowPopup(true);
    setSelectedItemIndex(index);
    document.body.classList.add("modal-opened");
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedItemIndex(null);
    document.body.classList.remove("modal-opened");
  };

  return (
    <section
      id="offer"
      className="h-screen flex flex-col items-center justify-center"
    >
      <div className="w-full h-full 2xl:py-64 py-32 relative">
        {/*<Image
          src="/assets/offerbg.jpg"
          alt="offerbg"
          className="object-cover blur-[5px]"
          fill
        />*/}
        {showPopup ? (
          <div className="flex justify-center items-center mx-10">
            {selectedItemIndex === 0 ? (
              <div className="relative">
                <OfferPopup
                  content={OfferLimitScript}
                  closePopup={closePopup}
                />
              </div>
            ) : selectedItemIndex === 1 ? (
              <div className="relative">
                <OfferPopup content={Cocktails} closePopup={closePopup} />
              </div>
            ) : selectedItemIndex === 2 ? (
              <div className="relativ">
                <OfferPopup content={OfferOpenScript} closePopup={closePopup} />
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          <div
            id="offer_element"
            ref={ref}
            className={`flex flex-col lg:flex-row justify-evenly items-center lg:gap-0 gap-28 lg:py-24 px-6 ${
              showPopup || inView ? "" : "opacity-0"
            }`}
          >
            {offerItemData.map(({ label, index, className }) => (
              <OfferItem
                key={label}
                label={label}
                onClick={handleOfferItemClick}
                index={index}
                className={className}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Offer;
