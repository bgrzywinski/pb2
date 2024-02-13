"use client";

import Image from "next/image";
import { productImages } from "@/components/ProductSection/product_images";
import { FC, useEffect, useState } from "react";

const ProductItem: FC<{
  currentImageIndex: number;
}> = ({ currentImageIndex }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    if (imageLoaded) {
      const productImage = document.getElementById("product-image");
      if (productImage) {
        productImage.classList.add("product-item-animation");

        const animationDuration = 500;
        setTimeout(() => {
          setImageLoaded(false);
        }, animationDuration);
      }
    }
  }, [imageLoaded]);
  return (
    <div className="w-full h-full relative fancy-border">
      <Image
        id="product-image"
        src={productImages[currentImageIndex]}
        alt="product"
        fill
        sizes="100vw 100vh"
        className={`w-full h-full rounded-md object-cover aspect-auto ${
          imageLoaded ? "product-item-animation" : ""
        }`}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default ProductItem;
