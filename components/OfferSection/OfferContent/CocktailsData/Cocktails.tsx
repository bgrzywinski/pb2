import { FC, useState } from "react";
import Image from "next/image";
import Cocktails2 from "@/components/OfferSection/OfferContent/CocktailsData/cocktails2";
import Cocktails3 from "@/components/OfferSection/OfferContent/CocktailsData/cocktails3";
import { Cocktails1 } from "@/components/OfferSection/OfferContent/CocktailsData/cocktails1";

const Cocktails: FC = () => {
  const cocktailsTypes = [Cocktails1, Cocktails2, Cocktails3];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const handlePrevClick = () => {
    const newIndex =
      (currentTextIndex - 1 + cocktailsTypes.length) % cocktailsTypes.length;
    setCurrentTextIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (currentTextIndex + 1) % cocktailsTypes.length;
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
            className="w-auto h-auto"
            width={50}
            height={50}
          />
        </button>
      </div>
      {typeof cocktailsTypes[currentTextIndex] === "function"
        ? cocktailsTypes[currentTextIndex]()
        : ""}
      <div className="m-auto">
        <button
          className="transition transform active:scale-150"
          onClick={handleNextClick}
        >
          <Image
            src="/assets/icons/right-arrow.png"
            alt="right"
            className="w-auto h-auto"
            width={50}
            height={50}
          />
        </button>
      </div>
    </div>
  );
};

export default Cocktails;
