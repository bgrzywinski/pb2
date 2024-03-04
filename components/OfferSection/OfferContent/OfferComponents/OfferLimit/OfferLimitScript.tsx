import { FC, useState } from "react";
import Image from "next/image";

const OfferLimitScript: FC = () => {
  /*const [currentTextIndex, setCurrentTextIndex] = useState(0);*/

  /* /!* const handlePrevClick = () => {
    const newIndex =
      (currentTextIndex - 1 + offerPages.length) % offerPages.length;
    setCurrentTextIndex(newIndex);
  };*!/

  const handleNextClick = () => {
    const newIndex = (currentTextIndex + 1) % offerPages.length;
    setCurrentTextIndex(newIndex);
  };*/

  return (
    <div className="flex">
      <div className="m-auto relative z-10">
        <Image
          src="/assets/offer_limit1.png"
          alt="offer1"
          width={900}
          height={800}
          className="object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default OfferLimitScript;
