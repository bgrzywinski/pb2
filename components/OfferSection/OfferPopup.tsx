import React, { FC } from "react";
import Image from "next/image";

const OfferPopup: FC<{
  content: FC;
  closePopup: () => void;
}> = ({ content: ContentComponent, closePopup }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-10">
      <div className="popup-content rounded-2xl shadow-md relative mx-15 z-20 xl:mt-24 px-6">
        <ContentComponent />
        <div className="2xl:w-[40px] 2xl:h-[40px] w-[25px] h-[25px] absolute top-4 right-4">
          <Image
            src="/assets/icons/close_icon2.png"
            alt="close"
            fill
            onClick={closePopup}
            className="transition transform active:scale-150 cursor-pointer object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OfferPopup;
