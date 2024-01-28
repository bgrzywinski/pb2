"use client";

import Image from "next/image";
import { productImages } from "@/components/ProductSection/product_images";
import { FC } from "react";

const ProductItem: FC<{
  currentImageIndex: number;
}> = ({ currentImageIndex }) => {
  return (
    <div className="w-full h-full relative fancy-border">
      <Image
        id="product-image"
        src={productImages[currentImageIndex]}
        alt="product"
        fill
        sizes="100vw 100vh"
        className="w-full h-full rounded-md object-cover aspect-auto"
      />
    </div>
  );
};

export default ProductItem;
