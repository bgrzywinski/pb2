import React from "react";

interface offerItemData {
  label: string;
  index: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className: string;
}

export const offerItemData: offerItemData[] = [
  {
    label: "OFERTA LIMITOWANA",
    index: 0,
    className:
      "offer_item 2xl:w-[300px] w-[200px] h-[350px] 2xl:h-[600px] rounded-xl 2xl:text-14 text-12 flex flex-col items-center justify-evenly cursor-pointer transition-transform transition-bg duration-500 text-white pt-14",
  },
  {
    label: "KOKTAJLE",
    index: 1,
    className:
      "cocktail_item 2xl:w-[300px] w-[200px] h-[350px] 2xl:h-[600px] rounded-xl 2xl:text-14 text-12 flex flex-col items-center justify-evenly transition-transform duration-500 cursor-pointer text-white pt-14",
  },
  {
    label: "OFERTA OPEN",
    index: 2,
    className:
      "offer_item 2xl:w-[300px] w-[200px] h-[350px] 2xl:h-[600px] rounded-xl 2xl:text-14 text-12  flex flex-col items-center justify-evenly cursor-pointer transition-transform transition-bg duration-500 text-white pt-14",
  },
];
