import { FC, MouseEvent } from "react";
import Image from "next/image";

const OfferItem: FC<{
  label: string;
  onClick: (index: number, e: MouseEvent<HTMLDivElement>) => void;
  index: number;
  className?: string;
}> = ({ label, onClick, index, className }) => {
  return (
    <div className="font-bold relative">
      <div className={className} onClick={(e) => onClick(index, e)}>
        {label}
        <Image
          src="/assets/icons/blacklogo2.png"
          alt="bl"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default OfferItem;
