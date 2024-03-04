import React, { FC } from "react";
import Image from "next/image";

const OfferPopup: FC<{
  content: FC;
  closePopup: () => void;
}> = ({ content: ContentComponent, closePopup }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-10 px-4">
      <div className="popup-content rounded-2xl shadow-md relative mx-15 z-10 px-3">
        <ContentComponent />
        <div className="absolute top-1 right-4 z-10">
          <Image
            src="/assets/icons/close_icon2.png"
            alt="close"
            width={40}
            height={40}
            onClick={closePopup}
            className="transition transform active:scale-150 cursor-pointer object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default OfferPopup;
