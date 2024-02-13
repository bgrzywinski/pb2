import { FC, useState } from "react";
import Image from "next/image";
import offer_open_1 from "@/components/OfferSection/OfferContent/OfferComponents/OfferOpen/Offer_open_1";
import offer_open_2 from "@/components/OfferSection/OfferContent/OfferComponents/OfferOpen/Offer_open_2";

const OfferOpenScript: FC = () => {
  const offerPages = [offer_open_1, offer_open_2];

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
            width={30}
            height={30}
            className="w-auto h-auto"
          />
        </button>
      </div>
      {typeof offerPages[currentTextIndex] === "function"
        ? offerPages[currentTextIndex]()
        : ""}
      <div className="m-auto">
        <button
          className="transition transform active:scale-150"
          onClick={handleNextClick}
        >
          <Image
            src="/assets/icons/right-arrow.png"
            alt="right"
            width={30}
            height={30}
            className="w-auto h-auto"
          />
        </button>
      </div>
    </div>
  );
};

export default OfferOpenScript;
