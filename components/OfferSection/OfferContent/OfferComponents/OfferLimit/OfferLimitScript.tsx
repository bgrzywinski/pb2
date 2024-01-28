import { FC, useState } from "react";
import Image from "next/image";
import offer_limit_1 from "@/components/OfferSection/OfferContent/OfferComponents/OfferLimit/Offer_limit_1";
import offer_limit_2 from "@/components/OfferSection/OfferContent/OfferComponents/OfferLimit/Offer_limit_2";

const OfferLimitScript: FC = () => {
  const offerPages = [offer_limit_1, offer_limit_2];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const handlePrevClick = () => {
    const newIndex =
      (currentTextIndex - 1 + offerPages.length) % offerPages.length;
    setCurrentTextIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (currentTextIndex + 1) % offerPages.length;
    setCurrentTextIndex(newIndex);
  };

  return (
    <div className="flex">
      <div className="m-auto">
        <button
          className="transition transform active:scale-150"
          onClick={handlePrevClick}
        >
          <Image
            src="/assets/icons/left-arrow.png"
            alt="left"
            width={50}
            height={50}
            className="w-auto h-auto"
          />
        </button>
      </div>
      <div className="2xl:px-6 xl:px-2">
        {typeof offerPages[currentTextIndex] === "function"
          ? offerPages[currentTextIndex]()
          : ""}
      </div>
      <div className="m-auto">
        <button
          className="transition transform active:scale-150"
          onClick={handleNextClick}
        >
          <Image
            src="/assets/icons/right-arrow.png"
            alt="right"
            width={50}
            height={50}
            className="w-auto h-auto"
          />
        </button>
      </div>
    </div>
  );
};

export default OfferLimitScript;
